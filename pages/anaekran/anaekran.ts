import { Component } from '@angular/core';
import {  NavController, NavParams } from 'ionic-angular';
import {HomePage } from '../home/home';
import {SitelerPage } from '../siteler/siteler';

import { Events } from 'ionic-angular';

/**
 * Generated class for the AnaekranPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */


@Component({
  selector: 'page-anaekran',
  templateUrl: 'anaekran.html',
})
export class AnaekranPage {

  constructor(public events:Events ,public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AnaekranPage');
  }
  myWorks(){
    this.navCtrl.push(SitelerPage);
      
  }
  goBackHomePage(){
    this.events.publish('hideHeader', { isHidden: false});
    this.navCtrl.popTo(HomePage);

  }

}
