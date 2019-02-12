import { Component } from '@angular/core';
import { NavController, NavParams,LoadingController,Loading } from 'ionic-angular';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';
import {Md5} from 'ts-md5/dist/md5';
import { UserData } from '../../providers/userdata'; 
import { AlertController } from 'ionic-angular';
import { NativeStorage } from '@ionic-native/native-storage';
import { Storage } from '@ionic/storage';
import { AnaekranPage } from '../anaekran/anaekran';
import { HomePage } from '../home/home';
import { Events } from 'ionic-angular';
//import { AngularFireAuth } from 'angularfire2/auth';
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  loading:Loading
  posts:any;
  mail:any;
  pass:any;
  sonuc:any;
  data:any;
  yapilar:any=[];
  status:any;
  veri:any;
  
  constructor(private storage : Storage,private nativeStorage: NativeStorage,private alertCtrl: AlertController,
    public giris:UserData,public navCtrl: NavController,private barcodeScanner: BarcodeScanner, public http: Http,
    public loadingCtrl:LoadingController,public events:Events
    ) {
     
  
    }

  rootPage: any;
  section:boolean;
  		login(){
        if(this.mail==null || this.pass==null ){
          let alert = this.alertCtrl.create({
            title: 'Hata',
            subTitle: 'Eksik Bilgi Girdiniz!!!',
            buttons: ['Tamam']
          });
          alert.present();

        }
  
      const endpoint = "yapi-yonetimi";
      const condition = {"delete_status":0};
      const method = "get_all_items";
      const mail = this.mail;
      const password = this.pass;
      const request = "GET";

     const giden_obje = {mail:mail,password:password, request: request,endpoint: endpoint,condition:condition,method:method};
     var pass2 = Md5.hashStr(this.pass);
     var data = {mail:this.mail,password:pass2}; //{mail:this.mail,pass:pass2};
    
     this.http.post( "http://okumapaylasim.com/api/yapi-yonetimi", 
                      JSON.stringify(giden_obje)).subscribe((result) =>  {
      
      this.yapilar = JSON.parse(result['_body']);
    
    //session control 
      if(this.yapilar["status"] == 200){
        
        let id = this.yapilar.data[0]['id'];
       // console.log(id);
        let alert = this.alertCtrl.create({title:"Hoşgeldiniz",message:this.yapilar.message,buttons:[{text:'Tamam',role:'cancel'}]});
        alert.present();
        this.events.publish('hideHeader', { isHidden: false});
       
        this.navCtrl.push(HomePage,{ yapilar: this.yapilar});
  
        localStorage.setItem('id', id);
        var myStorageId = this.storage.set('id', id);
       // console.log(myStorageId);
        
    }
        else if (data["status"] ==100) {

        let alert = this.alertCtrl.create({title:"Giriş Başarısız",message:this.yapilar.message,buttons:[{text:'Tamam',role:'cancel'}]});
        alert.present();
        this.events.publish('hideHeader', { isHidden: true});

        }
         
      },(err)=>{

      }); 

     /* if(mail==this.mail && password==this.pass){
        console.log("şifre mail başarılı girildi");
              
        this.section=true;
       
      }
      else
            {
              let alert = this.alertCtrl.create({
                title: 'Hata',
                subTitle: 'Sistem tarafından hata oluştu',
                buttons: ['Tamam']
              });
              alert.present();

              this.section=false;
              this.rootPage = LoginPage;
              
            } */
} 
          onKeydown(event) {
            if (event.key === "Enter") {
                console.log(event);
            }
          }
      
  
         showLoader(){
          this.loading = this.loadingCtrl.create({
            content: 'Giriş yapılıyor...'
          });
       
          this.loading.present();
        }

        ionViewDidLoad() {
          console.log('ionViewDidLoad LoginPage');
        }

}

