import { Component } from '@angular/core';
import { AlertController, NavController, NavParams } from 'ionic-angular';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
//import {AramaPage } from '../arama/arama';
import {SitelerPage } from '../siteler/siteler';
import { Events } from 'ionic-angular';
//import { NativeStorage } from '@ionic-native/native-storage';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class  HomePage {

  isim:any;
  name:any;
  
  bloklar:any;
  yapilar:any;
  query:string;
  result?:any;
  data?:any;
  keys?:any;

  constructor(public events:Events,public navCtrl: NavController, public navParams: NavParams,public http: Http,
              public alertCtrl:AlertController,public storage:Storage) {
               
               // this.result = JSON.stringify( navParams.data.yapilar);
                this.data = navParams.get('yapilar').data;
                this.result = [];
                this.keys = Object.keys(this.data).length;
                for(let i = 0; i < this.keys; i++)
                {
                  this.result.push(this.data[i]);
                }

                //console.log(this.result.length);
                //this.yapilar = JSON.parse(this.result);
                //console.log(this.yapilar.length);
              }
 
  ionViewDidLoad() {
            
  }
  SearchSayfa(id){
   
    const endpoint = "blok-yonetimi";
    const condition = {"delete_status":0,"building_id":id};
    const method = "get_all_items";
    const mail = "kadirsaymadi@idealbilgi.com";
    const password = "123";
    const request = "GET";
    const giden_obje = {mail:mail,password:password, request: request,endpoint: endpoint,condition:condition,method:method};
     //  console.log(JSON.stringify(giden_obje));

       this.http.post( "http://okumapaylasim.com/api/blok-yonetimi", 
       JSON.stringify(giden_obje)).subscribe((result) =>  {
  
        
        this.bloklar = JSON.parse(result['_body']);
       
       if(this.bloklar["status"] == 200){

        let id = this.bloklar.data[0]['id'];
        // console.log(id);
         
         this.events.publish('hideHeader', { isHidden: false});
         this.navCtrl.push(SitelerPage, { bloklar: this.bloklar});
         localStorage.setItem('id', id);
        // console.log(id);
        // var myStorageId = this.storage.set('id', id);
         //console.log(myStorageId);
          
         
     }
         else if (this.bloklar["status"] ==100) {
 
         let alert = this.alertCtrl.create({title:"Giriş Başarısız",message:this.bloklar.message,buttons:[{text:'Tamam',role:'cancel'}]});
         alert.present();
         this.events.publish('hideHeader', { isHidden: true});
 
     } 
  
       });
       
          
}

  goBlok(){
    this.events.publish('hideHeader', { isHidden: false});
    this.navCtrl.popTo(SitelerPage);

  }

}
