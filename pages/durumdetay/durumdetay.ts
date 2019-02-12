import { Component } from '@angular/core';
import {  NavController, NavParams } from 'ionic-angular';
import { ViewChild, OnInit, Renderer, Input } from '@angular/core';

/**
 * Generated class for the DurumdetayPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */


@Component({
  selector: 'page-durumdetay',
  templateUrl: 'durumdetay.html',
})
export class DurumdetayPage implements OnInit {

  accordionExapanded = false;
  @ViewChild("cc") cardContent: any;
  @Input('title') title: string;

  icon: string = "arrow-forward";

  constructor(public renderer: Renderer) {

  }

  ngOnInit() {
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

  }

}