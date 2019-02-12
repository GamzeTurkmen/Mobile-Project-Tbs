import { Component } from '@angular/core';
import {Modal, NavController, NavParams } from 'ionic-angular';
import {SayacPage } from '../sayac/sayac';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';
import { Events } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { HomePage } from '../home/home';
import { SayacdetayPage } from '../sayacdetay/sayacdetay';
import { ModalController} from 'ionic-angular';
import {SitelerPage } from '../siteler/siteler';
import { Http } from '@angular/http';
/**
 * Generated class for the AramaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({    
  selector: 'page-arama',
  templateUrl: 'arama.html',
 

})
export class AramaPage {
  sayaclar:any=[];
  name:any;
  bloklar:any;
  sayac:any;
  sayac_id:any;
  main_counter_id:any;
  counter_index_number:any;
  actual_consumption:any;
  created_at:any;
  comparison_making_status:any;
 
  
  constructor(public http: Http,private modal:ModalController,private alertCtrl: AlertController,public events:Events ,private barcodeScanner: BarcodeScanner,public navCtrl: NavController, public navParams: NavParams) { 
  //  this.sayaclar = navParams.get('sayaclar');
   // console.log(this.sayaclar);       
  
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AramaPage');
  }
  

  public CValue:String;
  onChange(CValue) {
       this.name.value= CValue;
       console.log(CValue);
  }

  islemyap(){
    const endpoint = "sayac-verisi-yonetimi";
    const condition = {"name":103};
    const method = "son_kapali_donem";
    const mail = "kadirsaymadi@idealbilgi.com";
    const password = "123";
    const request = "GET";
    const giden_obje = {mail:mail,password:password, request: request,endpoint: endpoint,condition:condition,method:method};
     //  console.log(JSON.stringify(giden_obje));

       this.http.post( "http://okumapaylasim.com/api/sayac-verisi-yonetimi", 
       JSON.stringify(giden_obje)).subscribe((result) =>  {
  
        
        this.sayaclar = JSON.parse(result['_body']);
       // console.log(this.sayaclar.data[0]['id']);
        
      /*  let main_counter_id=this.sayaclar.data.main_counter_id;
        console.log(this.sayaclar.data.main_counter_id);
        
        let counter_index_number=this.sayaclar.data.counter_index_number;
        console.log(this.sayaclar.data.counter_index_number);


        let actual_consumption=this.sayaclar.data.actual_consumption;
        console.log(this.sayaclar.data.actual_consumption);


        let created_at=this.sayaclar.data.created_at;
        console.log(this.sayaclar.data.created_at);

        let comparison_making_status=this.sayaclar.data.comparison_making_status;
        console.log(this.sayaclar.data.comparison_making_status);*/




        if(this.sayac_id==this.sayaclar.data.main_counter_id){
           
              if(this.sayaclar["status"] == 200){

            // let id = this.sayaclar.data[0]['id'];
              // console.log(id);
              
              this.events.publish('hideHeader', { isHidden: false});
              let myModal=this.modal.create(SayacdetayPage);
              myModal.present();
              this.navCtrl.push(SayacdetayPage, { sayaclar: this.sayaclar});
            //  let id=this.sayaclar['data'][0]['main_counter_id'];

              //console.log(id);
              
          }
              else if (this.sayaclar["status"] ==100) {
      
              let alert = this.alertCtrl.create({title:"Giriş Başarısız",message:this.sayaclar.message,buttons:[{text:'Tamam',role:'cancel'}]});
              alert.present();
              this.events.publish('hideHeader', { isHidden: true});
      
          } 
  }
      else{
      let alert = this.alertCtrl.create({title:"Sayaç numarası bulunmamaktadır.",message:this.sayaclar.message,buttons:[{text:'Tamam',role:'cancel'}]});
      alert.present();
    }  


       });
      
      
  }
      barkod_okut()
      {
          
        this.barcodeScanner.scan()
        .then(barcodeData => {
        console.log('Barcode data', barcodeData);

    }).catch(err => {
        console.log('Error', err);
    });

     this.islemyap();
    
      }
  
    
    goBackBlok(){
      this.events.publish('hideHeader', { isHidden: false});
      this.navCtrl.popTo(SitelerPage);
    }


}
