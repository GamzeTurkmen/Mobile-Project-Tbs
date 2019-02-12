import { Component } from '@angular/core';
import {NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the LogopagePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */


@Component({
  selector: 'page-logopage',
  templateUrl: 'logopage.html',
})
export class LogopagePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LogopagePage');
  }

}
