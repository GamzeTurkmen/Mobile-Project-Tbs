import { Component } from '@angular/core';
import { LoadingController,Loading, NavController, NavParams, } from 'ionic-angular';
import { Http } from '@angular/http';
import {SitelerPage } from '../siteler/siteler';
import {SayacPage } from '../sayac/sayac';
import {AramaPage } from '../arama/arama';
import { AlertController } from 'ionic-angular';
import { NativeStorage } from '@ionic-native/native-storage';
import { Storage } from '@ionic/storage';
import { Events } from 'ionic-angular';
/**
 * Generated class for the MulklerPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */


@Component({
  selector: 'page-mulkler',
  templateUrl: 'mulkler.html',
})
export class MulklerPage {
   mulkler:any;

  constructor(public navCtrl: NavController, public navParams: NavParams,public http: Http,
    private storage : Storage,private nativeStorage: NativeStorage,private alertCtrl: AlertController,
    public events:Events) {


    this.mulkler = navParams.get('mulkler');
    //console.log(this.mulkler);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MulklerPage');
  }
 


  SayacaGit(id){
   
    const endpoint = "sayac-yonetimi";
    const condition = {"delete_status":0,"branch_id":1};
    const method = "get_all_items";
    const mail = "cihan@mail.com";
    const password = "123";
    const request = "GET";
    const giden_obje = {mail:mail,password:password, request: request,endpoint: endpoint,condition:condition,method:method};
       console.log(JSON.stringify(giden_obje));
       this.http.post( "http://192.168.3.222/teknikservis/api/", 
                       JSON.stringify(giden_obje)) 
       .subscribe( response=>  {
  
        var myParseData = JSON.parse(response["_body"]);
        if(myParseData["status"] == 200){
         
         let id = myParseData["data"][0]["id"];
         this.events.publish('hideHeader', { isHidden: false});
        // this.navCtrl.push(AramaPage, {sayaclar: myParseData.data});
         
         var myStorageId = this.storage.set('id', id);
       
         
     }
         else if (myParseData["status"] ==100) {
 
         let alert = this.alertCtrl.create({title:"Giriş Başarısız",message:myParseData["message"],buttons:[{text:'Tamam',role:'cancel'}]});
         alert.present();
         this.events.publish('hideHeader', { isHidden: true});
 
     } 

       });
    // this.navCtrl.push(SayacPage);
  }

  back(){
    this.events.publish('hideHeader', { isHidden: false});
   // this.navCtrl.popTo(SitelerPage);
   // this.navCtrl.push(SitelerPage);
  }

}
