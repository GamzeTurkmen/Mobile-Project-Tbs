import { Component } from '@angular/core';
import { AramaPage } from '../arama/arama';
import { DurumdetayPage } from '../durumdetay/durumdetay';
import { NavController, NavParams,LoadingController,Loading,ViewController } from 'ionic-angular';
import { Http } from '@angular/http';
import { AlertController } from 'ionic-angular';
import { Events } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { ViewChild, OnInit, Renderer, Input } from '@angular/core';
@Component({
  selector: 'page-sayacdetay',
  templateUrl: 'sayacdetay.html',
})
export class SayacdetayPage /*implements OnInit */{
  information: any[];
  accordionExapanded = false;
  accordions:any;
  @ViewChild("cc") cardContent: any;
  @Input('title') title: string;
  shownGroup = null;

  icon: string = "arrow-forward";
  data?:any;
  data1?:any;
  data2?:any;
  data3?:any;
  keys?:any;
  result:any;
  
     
     constructor(public renderer: Renderer,private storage : Storage,public navCtrl: NavController, private navParams: NavParams,private view:ViewController,private alertCtrl: AlertController,
    public http: Http,public loadingCtrl:LoadingController,public events:Events) {
      
       this.data = navParams.get('sayaclar').data.counter_index_number;
       this.data1 = navParams.get('sayaclar').data.created_at;
       this.data2 = navParams.get('sayaclar').data.comparison_making_status;
       this.data3 = navParams.get('sayaclar').data.actual_consumption;
       console.log(this.data);
       this.keys = Object.keys(this.data);
       console.log(this.keys);
    
     /* this.keys = Object.keys(this.data);
      console.log(this.keys);*/
  /*  for(let i = 0; i < this.keys; i++)
      {
        this.result.push(this.data[i]);
       
      }*/
      

  }
  kapatSayfa(){
   // this.navCtrl.push(AramaPage);
    this.view.dismiss();
  
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad SayacdetayPage');
  }
  goDetail(){
  this.navCtrl.push(DurumdetayPage);
  }

  /*ngOnInit() {
    console.log(this.cardContent.nativeElement);
    this.renderer.setElementStyle(this.cardContent.nativeElement, "webkitTransition", "max-height 500ms, padding 500ms");
  }
  toggleAccordion() {
    if (this.accordionExapanded) {
      this.renderer.setElementStyle(this.cardContent.nativeElement, "max-height", "0px");
      this.renderer.setElementStyle(this.cardContent.nativeElement, "padding", "0px 16px");

    } else {
      this.renderer.setElementStyle(this.cardContent.nativeElement, "max-height", "500px");
      this.renderer.setElementStyle(this.cardContent.nativeElement, "padding", "13px 16px");

    }

    this.accordionExapanded = !this.accordionExapanded;
    this.icon = this.icon == "arrow-forward" ? "arrow-down" : "arrow-forward";

  } */

  toggleGroup(group) {
    if (this.isGroupShown(group)) {
        this.shownGroup = null;
    } else {
        this.shownGroup = group;
    }
};
isGroupShown(group) {
    return this.shownGroup === group;
};
    

  

    

}
