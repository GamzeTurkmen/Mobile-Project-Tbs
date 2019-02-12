import { Component } from '@angular/core';
import { NavController, NavParams,LoadingController,Loading } from 'ionic-angular';
import {HomePage } from '../home/home';
import { Http } from '@angular/http';
import { Events } from 'ionic-angular';
//import {AramaPage } from '../arama/arama';
import {SayacPage } from '../sayac/sayac';
import {MulklerPage } from '../mulkler/mulkler';
import { AlertController } from 'ionic-angular';
import { NativeStorage } from '@ionic-native/native-storage';
import { Storage } from '@ionic/storage';
import { AramaPage } from '../arama/arama';
/**
 * Generated class for the SitelerPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
    
@Component({
  selector: 'page-siteler',
  templateUrl: 'siteler.html',
})
export class SitelerPage {
  //bloklar:any;
 
  bloklar:any;
 
  
  result?:any;
  data?:any;
  keys?:any;

  constructor(public events:Events ,public navCtrl: NavController, public navParams: NavParams,private storage : Storage,private nativeStorage: NativeStorage,private alertCtrl: AlertController,
     public http: Http, public loadingCtrl:LoadingController) {

      this.data = navParams.get('bloklar').data;
      this.result = [];
      this.keys = Object.keys(this.data).length;
      for(let i = 0; i < this.keys; i++)
      {
        this.result.push(this.data[i]);
      }

      this.storage.get('id').then((val) => {
            
      //  console.log('myID', val);

      });

    //this.bloklar = navParams.get('bloklar');
       // console.log(this.bloklar);
  }

  ionViewDidLoad() {
  //  console.log('ionViewDidLoad SitelerPage');
  }


  goBackHome(){
    this.events.publish('hideHeader', { isHidden: false});
    this.navCtrl.popTo(HomePage);


}   
    
    blokSayfa(id){
      this.navCtrl.push(AramaPage);
   /* const endpoint = "sayac-yonetimi";
    const condition = {"delete_status":0,"branch_id":1};
    const method = "get_all_items";
    const mail = "cihan@mail.com";
    const password = "123";
    const request = "GET";
    const giden_obje = {mail:mail,password:password, request: request,endpoint: endpoint,condition:condition,method:method};
       console.log(JSON.stringify(giden_obje));
       this.http.post( "http://okumapaylasim.com/api/sayac-yonetimi", 
                       JSON.stringify(giden_obje)) 
       .subscribe( response=>  {
  
        var myParseData = JSON.parse(response["_body"]);
        if(myParseData["status"] == 200){
        let id = myParseData["data"][0]["id"];
        console.log(id);
         
         this.events.publish('hideHeader', { isHidden: false});
         this.navCtrl.push(AramaPage, {sayaclar: myParseData.data});
         
         var myStorageId = this.storage.set('id', id);
         //console.log(myStorageId);
         
     }
         else if (myParseData["status"] ==100) {
 
         let alert = this.alertCtrl.create({title:"Giriş Başarısız",message:myParseData["message"],buttons:[{text:'Tamam',role:'cancel'}]});
         alert.present();
         this.events.publish('hideHeader', { isHidden: true});
 
     } 

       });*/
     //this.navCtrl.push(AramaPage);

   }
}
   
