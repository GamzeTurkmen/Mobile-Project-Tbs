import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {MulklerPage } from '../mulkler/mulkler';
import {AramaPage } from '../arama/arama';
import { Events } from 'ionic-angular';

@Component({
  selector: 'page-sayac',
  templateUrl: 'sayac.html',
})
export class SayacPage {
  
  sayaclar:any;
  constructor(public events:Events ,public navCtrl: NavController, public navParams: NavParams) {
                
               this.sayaclar = navParams.get('sayaclar');
               console.log(this.sayaclar);          
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SayacPage');
  }

  
  daire(){
   // this.events.publish('hideHeader', { isHidden: false});
  //  this.navCtrl.popTo(MulklerPage);
   // this.navCtrl.push(MulklerPage);
  }

  SayacDetayaGit(){
    //this.navCtrl.push(AramaPage);
  }
  

}
