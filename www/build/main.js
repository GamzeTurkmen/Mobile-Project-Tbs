webpackJsonp([0],{

/***/ 107:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AramaPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_barcode_scanner__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__sayacdetay_sayacdetay__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__siteler_siteler__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_http__ = __webpack_require__(25);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









/**
 * Generated class for the AramaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var AramaPage = /** @class */ (function () {
    function AramaPage(http, modal, alertCtrl, events, barcodeScanner, navCtrl, navParams) {
        //  this.sayaclar = navParams.get('sayaclar');
        // console.log(this.sayaclar);       
        this.http = http;
        this.modal = modal;
        this.alertCtrl = alertCtrl;
        this.events = events;
        this.barcodeScanner = barcodeScanner;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.sayaclar = [];
    }
    AramaPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AramaPage');
    };
    AramaPage.prototype.onChange = function (CValue) {
        this.name.value = CValue;
        console.log(CValue);
    };
    AramaPage.prototype.islemyap = function () {
        var _this = this;
        var endpoint = "sayac-verisi-yonetimi";
        var condition = { "name": 103 };
        var method = "son_kapali_donem";
        var mail = "kadirsaymadi@idealbilgi.com";
        var password = "123";
        var request = "GET";
        var giden_obje = { mail: mail, password: password, request: request, endpoint: endpoint, condition: condition, method: method };
        //  console.log(JSON.stringify(giden_obje));
        this.http.post("http://okumapaylasim.com/api/sayac-verisi-yonetimi", JSON.stringify(giden_obje)).subscribe(function (result) {
            _this.sayaclar = JSON.parse(result['_body']);
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
            if (_this.sayac_id == _this.sayaclar.data.main_counter_id) {
                if (_this.sayaclar["status"] == 200) {
                    // let id = this.sayaclar.data[0]['id'];
                    // console.log(id);
                    _this.events.publish('hideHeader', { isHidden: false });
                    var myModal = _this.modal.create(__WEBPACK_IMPORTED_MODULE_3__sayacdetay_sayacdetay__["a" /* SayacdetayPage */]);
                    myModal.present();
                    _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__sayacdetay_sayacdetay__["a" /* SayacdetayPage */], { sayaclar: _this.sayaclar });
                    //  let id=this.sayaclar['data'][0]['main_counter_id'];
                    //console.log(id);
                }
                else if (_this.sayaclar["status"] == 100) {
                    var alert_1 = _this.alertCtrl.create({ title: "Giriş Başarısız", message: _this.sayaclar.message, buttons: [{ text: 'Tamam', role: 'cancel' }] });
                    alert_1.present();
                    _this.events.publish('hideHeader', { isHidden: true });
                }
            }
            else {
                var alert_2 = _this.alertCtrl.create({ title: "Sayaç numarası bulunmamaktadır.", message: _this.sayaclar.message, buttons: [{ text: 'Tamam', role: 'cancel' }] });
                alert_2.present();
            }
        });
    };
    AramaPage.prototype.barkod_okut = function () {
        this.barcodeScanner.scan()
            .then(function (barcodeData) {
            console.log('Barcode data', barcodeData);
        }).catch(function (err) {
            console.log('Error', err);
        });
        this.islemyap();
    };
    AramaPage.prototype.goBackBlok = function () {
        this.events.publish('hideHeader', { isHidden: false });
        this.navCtrl.popTo(__WEBPACK_IMPORTED_MODULE_4__siteler_siteler__["a" /* SitelerPage */]);
    };
    AramaPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-arama',template:/*ion-inline-start:"C:\Users\Gamze\AppProject\src\pages\arama\arama.html"*/'<!--\n  Generated template for the AramaPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n\n   <ion-list class="site_" *ngIf="sayaclar"  >\n     <ion-item *ngFor="let sayac of sayaclar">\n       <button  ion-button round (click)="SayacDetayaGit(sayac.id)">A</button>\n        &nbsp;<label>{{sayac.name}}</label>\n      </ion-item>\n      <br/>\n      <br/>\n  \n-->\n  <ion-content>\n      \n      <div  style="height: 56px; background: linear-gradient(60deg, #6aa0a9, #004f88)  ">\n          <ion-buttons style="position: absolute">\n              <button  icon-only (click)="goBackBlok()" style="background: transparent;margin-top:33%;font-size: 14px">\n                <ion-icon name="arrow-back" style="color: white"></ion-icon>\n              </button>\n            </ion-buttons>\n        <img  src="assets/imgs/tebas_logo.png" >\n       </div> \n       \n       <br/>  \n       <ion-card style="width:95%" (click)="barkod_okut()">\n          <ion-card-header>\n              <ion-icon name="barcode" (click)="barkod_okut()" ></ion-icon><br/><br/>\n            <!--  &nbsp; &nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp; \n              &nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; -->\n                <label (click)="barkod_okut()">Barkod Okut </label>\n          </ion-card-header>      \n       </ion-card> \n       \n        <div class="my_cont"  >\n           <div class="border_">\n                \n                  <ion-label>Sayaç Numarasını Giriniz:</ion-label><br/>\n                  \n                    <textarea [(ngModel)]="sayac_id"></textarea> \n                  \n                   <br/> <br/>\n               \n                   <ion-row>\n                      <ion-col class="signup-col">\n                        <button ion-button full (click)="islemyap()" style="background-color:#ffb619" >İŞLEM YAP</button><br/>\n                      </ion-col>\n                    </ion-row>\n\n          </div>\n        </div>\n            \n              \n  \n  </ion-content>\n  '/*ion-inline-end:"C:\Users\Gamze\AppProject\src\pages\arama\arama.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_5__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* ModalController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* Events */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_barcode_scanner__["a" /* BarcodeScanner */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]])
    ], AramaPage);
    return AramaPage;
}());

//# sourceMappingURL=arama.js.map

/***/ }),

/***/ 109:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SayacdetayPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__durumdetay_durumdetay__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_storage__ = __webpack_require__(35);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var SayacdetayPage = /** @class */ (function () {
    function SayacdetayPage(renderer, storage, navCtrl, navParams, view, alertCtrl, http, loadingCtrl, events) {
        this.renderer = renderer;
        this.storage = storage;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.view = view;
        this.alertCtrl = alertCtrl;
        this.http = http;
        this.loadingCtrl = loadingCtrl;
        this.events = events;
        this.accordionExapanded = false;
        this.shownGroup = null;
        this.icon = "arrow-forward";
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
    SayacdetayPage.prototype.kapatSayfa = function () {
        // this.navCtrl.push(AramaPage);
        this.view.dismiss();
    };
    SayacdetayPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SayacdetayPage');
    };
    SayacdetayPage.prototype.goDetail = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_1__durumdetay_durumdetay__["a" /* DurumdetayPage */]);
    };
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
    SayacdetayPage.prototype.toggleGroup = function (group) {
        if (this.isGroupShown(group)) {
            this.shownGroup = null;
        }
        else {
            this.shownGroup = group;
        }
    };
    ;
    SayacdetayPage.prototype.isGroupShown = function (group) {
        return this.shownGroup === group;
    };
    ;
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])("cc"),
        __metadata("design:type", Object)
    ], SayacdetayPage.prototype, "cardContent", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])('title'),
        __metadata("design:type", String)
    ], SayacdetayPage.prototype, "title", void 0);
    SayacdetayPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-sayacdetay',template:/*ion-inline-start:"C:\Users\Gamze\AppProject\src\pages\sayacdetay\sayacdetay.html"*/'<ion-content padding>\n\n    \n        <button style="background: transparent; margin-left: 303px" icon-only (click)="kapatSayfa()">X</button>\n    \n     <br/>\n     <br/>\n    <div  >\n\n\n        <ion-row>\n            <ion-row>\n               <ion-label style="margin-left: 17px">En Son Okunan İndex:</ion-label>\n            </ion-row>\n            <ion-item >\n            <ion-label style="color:green;">{{data}}</ion-label>\n            </ion-item>\n      </ion-row>\n\n\n      <ion-row>\n          <ion-row>\n              <ion-label  style="margin-left: 17px" >En Son Okuma Tarihi:</ion-label>\n          </ion-row>\n          <ion-item>\n              <ion-label style="color:purple;">{{data1}}</ion-label>\n          </ion-item>\n      </ion-row>\n\n      <ion-row>\n          <ion-row>\n              <ion-label  style="margin-left: 17px" >Kıyas Yapılma Durumu:</ion-label>\n          </ion-row>\n          <ion-item>\n              <ion-label style="color:blue;">{{data2}}:</ion-label>\n          </ion-item>\n      </ion-row>\n\n      <ion-row>\n          <ion-row>\n              <ion-label  style="margin-left: 17px" >Geçen Dönemin Tüketimi:</ion-label>\n          </ion-row>\n          <ion-item>\n              <ion-label style="color:orangered;">{{data3}}</ion-label>\n          </ion-item>\n      </ion-row>\n\n  </div>\n      <br/>\n      <br/>\n\n   <ion-textarea placeholder="Yeni Sorgu Oluştur" ></ion-textarea>\n   <br/>\n   <button style="background-color: #3f8afd" ion-button (click)="gonder" >Gönder</button>\n\n     \n    \n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Gamze\AppProject\src\pages\sayacdetay\sayacdetay.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["V" /* Renderer */], __WEBPACK_IMPORTED_MODULE_4__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["j" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["m" /* ViewController */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["f" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* Events */]])
    ], SayacdetayPage);
    return SayacdetayPage;
}());

//# sourceMappingURL=sayacdetay.js.map

/***/ }),

/***/ 110:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DurumdetayPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the DurumdetayPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var DurumdetayPage = /** @class */ (function () {
    function DurumdetayPage(renderer) {
        this.renderer = renderer;
        this.accordionExapanded = false;
        this.icon = "arrow-forward";
    }
    DurumdetayPage.prototype.ngOnInit = function () {
        console.log(this.cardContent.nativeElement);
        this.renderer.setElementStyle(this.cardContent.nativeElement, "webkitTransition", "max-height 500ms, padding 500ms");
    };
    DurumdetayPage.prototype.toggleAccordion = function () {
        if (this.accordionExapanded) {
            this.renderer.setElementStyle(this.cardContent.nativeElement, "max-height", "0px");
            this.renderer.setElementStyle(this.cardContent.nativeElement, "padding", "0px 16px");
        }
        else {
            this.renderer.setElementStyle(this.cardContent.nativeElement, "max-height", "500px");
            this.renderer.setElementStyle(this.cardContent.nativeElement, "padding", "13px 16px");
        }
        this.accordionExapanded = !this.accordionExapanded;
        this.icon = this.icon == "arrow-forward" ? "arrow-down" : "arrow-forward";
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])("cc"),
        __metadata("design:type", Object)
    ], DurumdetayPage.prototype, "cardContent", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])('title'),
        __metadata("design:type", String)
    ], DurumdetayPage.prototype, "title", void 0);
    DurumdetayPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-durumdetay',template:/*ion-inline-start:"C:\Users\Gamze\AppProject\src\pages\durumdetay\durumdetay.html"*/'<!--\n  Generated template for the DurumdetayPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>durumdetay</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n <ion-list>\n  \n  <ion-card style="background-color: orchid"><ion-card-content>Durum</ion-card-content></ion-card><br/>\n  <ion-card style="background-color: red"><ion-card-content>Durum</ion-card-content></ion-card><br/>\n  <ion-card style="background-color: yellow"><ion-card-content>Durum</ion-card-content></ion-card><br/>\n  <ion-card style="background-color: green"><ion-card-content>Durum</ion-card-content></ion-card><br/>\n  <ion-card style="background-color: blue"><ion-card-content>Durum</ion-card-content></ion-card><br/>\n  <ion-card style="background-color: orange ;"><ion-card-content>Durum</ion-card-content></ion-card><br/>\n  <ion-card style="background-color: orangered"><ion-card-content>Durum</ion-card-content></ion-card>\n\n  \n </ion-list>\n</ion-content>\n'/*ion-inline-end:"C:\Users\Gamze\AppProject\src\pages\durumdetay\durumdetay.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["V" /* Renderer */]])
    ], DurumdetayPage);
    return DurumdetayPage;
}());

//# sourceMappingURL=durumdetay.js.map

/***/ }),

/***/ 119:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 119;

/***/ }),

/***/ 161:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 161;

/***/ }),

/***/ 205:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BloklarPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the BloklarPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var BloklarPage = /** @class */ (function () {
    function BloklarPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    BloklarPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad BloklarPage');
    };
    BloklarPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-bloklar',template:/*ion-inline-start:"C:\Users\Gamze\AppProject\src\pages\bloklar\bloklar.html"*/'\n  <ion-content padding>\n      <div class="bar bar-header bar-light">\n          <ion-img  src="assets/imgs/tebas_logo.png" ></ion-img> \n        </div>\n    \n                  \n        <ion-content padding>\n          <ion-list>\n            <ion-col col-4>\n                <ion-item>\n                    <ion-card>\n          \n                        <ion-card-header>\n                          Card Header\n                        </ion-card-header>\n                      \n                        <ion-card-content>\n                          <!-- Add card content here! -->\n                        </ion-card-content>\n                      \n                      </ion-card>\n                </ion-item>\n            </ion-col>\n            <ion-col col-4>\n                <ion-item>\n                    <ion-card>\n          \n                        <ion-card-header>\n                          Card Header\n                        </ion-card-header>\n                      \n                        <ion-card-content>\n                          <!-- Add card content here! -->\n                        </ion-card-content>\n                      \n                      </ion-card>\n                </ion-item>\n            </ion-col>\n            <ion-col col-4>\n                <ion-item>\n                    <ion-card>\n          \n                        <ion-card-header>\n                          Card Header\n                        </ion-card-header>\n                      \n                        <ion-card-content>\n                          <!-- Add card content here! -->\n                        </ion-card-content>\n                      \n                      </ion-card>\n                </ion-item>\n            </ion-col>\n  \n  \n            <ion-col col-4>\n                <ion-item>\n                    <ion-card>\n          \n                        <ion-card-header>\n                          Card Header\n                        </ion-card-header>\n                      \n                        <ion-card-content>\n                          <!-- Add card content here! -->\n                        </ion-card-content>\n                      \n                      </ion-card>\n                </ion-item>\n            </ion-col>\n            <ion-col col-4>\n                <ion-item>\n                    <ion-card>\n          \n                        <ion-card-header>\n                          Card Header\n                        </ion-card-header>\n                      \n                        <ion-card-content>\n                          <!-- Add card content here! -->\n                        </ion-card-content>\n                      \n                      </ion-card>\n                </ion-item>\n            </ion-col>\n            <ion-col col-4>\n                <ion-item>\n                    <ion-card>\n          \n                        <ion-card-header>\n                          Card Header\n                        </ion-card-header>\n                      \n                        <ion-card-content>\n                          <!-- Add card content here! -->\n                        </ion-card-content>\n                      \n                      </ion-card>\n                </ion-item>\n            </ion-col>\n            </ion-list>\n          </ion-content>\n       \n  </ion-content>\n    \n  \n  \n  \n  \n  '/*ion-inline-end:"C:\Users\Gamze\AppProject\src\pages\bloklar\bloklar.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]])
    ], BloklarPage);
    return BloklarPage;
}());

//# sourceMappingURL=bloklar.js.map

/***/ }),

/***/ 206:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SayacPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SayacPage = /** @class */ (function () {
    function SayacPage(events, navCtrl, navParams) {
        this.events = events;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.sayaclar = navParams.get('sayaclar');
        console.log(this.sayaclar);
    }
    SayacPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SayacPage');
    };
    SayacPage.prototype.daire = function () {
        // this.events.publish('hideHeader', { isHidden: false});
        //  this.navCtrl.popTo(MulklerPage);
        // this.navCtrl.push(MulklerPage);
    };
    SayacPage.prototype.SayacDetayaGit = function () {
        //this.navCtrl.push(AramaPage);
    };
    SayacPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-sayac',template:/*ion-inline-start:"C:\Users\Gamze\AppProject\src\pages\sayac\sayac.html"*/'\n \n  <ion-content>\n      \n      <div  style="height: 56px; background: linear-gradient(60deg, #6aa0a9, #004f88)  ">\n          <ion-buttons style="position: absolute; ">\n              <button  icon-only (click)="daire()" style="background: transparent;margin-top:33%;font-size: 14px">\n                <ion-icon name="arrow-back" style="color: white"></ion-icon>\n              </button>\n            </ion-buttons>\n              <img  src="assets/imgs/tebas_logo.png" >\n      </div>  \n    <ion-list class="site_" *ngIf="sayaclar"  >\n     <ion-item *ngFor="let sayac of sayaclar">\n       <button  ion-button round (click)="SayacDetayaGit(sayac.id)">A</button>\n        &nbsp;<label>{{sayac.name}}</label>\n      </ion-item>\n      <br/>\n  \n    </ion-list>\n   </ion-content>\n  \n\n\n\n      \n      \n          '/*ion-inline-end:"C:\Users\Gamze\AppProject\src\pages\sayac\sayac.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* Events */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]])
    ], SayacPage);
    return SayacPage;
}());

//# sourceMappingURL=sayac.js.map

/***/ }),

/***/ 207:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AnaekranPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__siteler_siteler__ = __webpack_require__(44);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/**
 * Generated class for the AnaekranPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var AnaekranPage = /** @class */ (function () {
    function AnaekranPage(events, navCtrl, navParams) {
        this.events = events;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    AnaekranPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AnaekranPage');
    };
    AnaekranPage.prototype.myWorks = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__siteler_siteler__["a" /* SitelerPage */]);
    };
    AnaekranPage.prototype.goBackHomePage = function () {
        this.events.publish('hideHeader', { isHidden: false });
        this.navCtrl.popTo(__WEBPACK_IMPORTED_MODULE_2__home_home__["a" /* HomePage */]);
    };
    AnaekranPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-anaekran',template:/*ion-inline-start:"C:\Users\Gamze\AppProject\src\pages\anaekran\anaekran.html"*/'<!--\n  Generated template for the AnaekranPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n\n<ion-content >\n            \n   <div  class="form2_">\n      <ion-buttons style="position: absolute; ">\n          <button  icon-only (click)="goBackHomePage()" style="background: transparent;margin-top:23%;font-size: 14px">\n            <ion-icon name="arrow-back" style="color: white"></ion-icon>\n          </button>\n        </ion-buttons>\n    <ion-img  src="assets/imgs/tebas_logo.png" class="anaekran_img" ></ion-img>\n   </div>\n    <div>\n          <ion-col class="signup-col">\n                <ion-row>\n                    <button  ion-button full (click)="myWorks()"><ion-icon name="build"></ion-icon>&nbsp;  &#304;&#350;LER&#304;M</button>\n                </ion-row>\n          </ion-col>   \n    </div>\n</ion-content>\n'/*ion-inline-end:"C:\Users\Gamze\AppProject\src\pages\anaekran\anaekran.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* Events */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]])
    ], AnaekranPage);
    return AnaekranPage;
}());

//# sourceMappingURL=anaekran.js.map

/***/ }),

/***/ 208:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AnasayfaPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the AnasayfaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var AnasayfaPage = /** @class */ (function () {
    function AnasayfaPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    AnasayfaPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AnasayfaPage');
    };
    AnasayfaPage.prototype.openPage = function (pagesss) {
        // Reset the content nav to have just this page
        // we wouldn't want the back button to show in this scenario
        this.navCtrl.setRoot(pagesss.component);
    };
    AnasayfaPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-anasayfa',template:/*ion-inline-start:"C:\Users\Gamze\AppProject\src\pages\anasayfa\anasayfa.html"*/'\n\n<ion-header class="header_">\n    <ion-navbar >\n      <button ion-button menuToggle style="color:black">\n        <ion-icon name="menu"></ion-icon>\n      </button>\n      <meta charset="UTF-8"/>\n      <ion-title ></ion-title>\n      \n    </ion-navbar>\n  </ion-header> \n\n  <ion-content padding >\n   <div  class="form_">\n      <ion-list>\n             \n            <br/>\n            <br/>\n  \n            <ion-item>\n                <ion-label>Başlangıç Tarihi</ion-label>\n                <ion-datetime displayFormat="MM/DD/YYYY"  [(ngModel)]="myDate"></ion-datetime>\n            </ion-item>\n            <br/>\n  \n            <ion-item>\n                <ion-label>Bitiş Tarihi</ion-label>\n                <ion-datetime displayFormat="MM/DD/YYYY"  [(ngModel)]="myDate"></ion-datetime>\n            </ion-item>\n            <br/>\n                  \n          <ion-row>\n            <ion-col class="signup-col">\n              <button   ion-button full (click)="onay()">GİRİŞ</button>\n              <br/>\n            </ion-col>\n          </ion-row>\n     </ion-list> \n     \n     <ion-item>\n        <ion-label color="primary" fixed>Ad</ion-label>\n        <textarea></textarea>\n      </ion-item>\n     <br/>\n      <ion-item>\n          <ion-label color="primary" fixed>Yapısı</ion-label>\n          <textarea></textarea>\n        \n        </ion-item>\n        <br/>\n        <ion-item>\n            <ion-label color="primary" fixed>Tarih</ion-label>\n            <textarea></textarea>\n          </ion-item>\n          <br/>\n          <ion-item>\n              <ion-label color="primary" fixed>Detay</ion-label>\n              <textarea></textarea>\n            </ion-item>\n          \n   </div>\n  </ion-content> \n     '/*ion-inline-end:"C:\Users\Gamze\AppProject\src\pages\anasayfa\anasayfa.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]])
    ], AnasayfaPage);
    return AnasayfaPage;
}());

//# sourceMappingURL=anasayfa.js.map

/***/ }),

/***/ 209:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MulklerPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_native_storage__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_storage__ = __webpack_require__(35);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







/**
 * Generated class for the MulklerPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var MulklerPage = /** @class */ (function () {
    function MulklerPage(navCtrl, navParams, http, storage, nativeStorage, alertCtrl, events) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.http = http;
        this.storage = storage;
        this.nativeStorage = nativeStorage;
        this.alertCtrl = alertCtrl;
        this.events = events;
        this.mulkler = navParams.get('mulkler');
        //console.log(this.mulkler);
    }
    MulklerPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad MulklerPage');
    };
    MulklerPage.prototype.SayacaGit = function (id) {
        var _this = this;
        var endpoint = "sayac-yonetimi";
        var condition = { "delete_status": 0, "branch_id": 1 };
        var method = "get_all_items";
        var mail = "cihan@mail.com";
        var password = "123";
        var request = "GET";
        var giden_obje = { mail: mail, password: password, request: request, endpoint: endpoint, condition: condition, method: method };
        console.log(JSON.stringify(giden_obje));
        this.http.post("http://192.168.3.222/teknikservis/api/", JSON.stringify(giden_obje))
            .subscribe(function (response) {
            var myParseData = JSON.parse(response["_body"]);
            if (myParseData["status"] == 200) {
                var id_1 = myParseData["data"][0]["id"];
                _this.events.publish('hideHeader', { isHidden: false });
                // this.navCtrl.push(AramaPage, {sayaclar: myParseData.data});
                var myStorageId = _this.storage.set('id', id_1);
            }
            else if (myParseData["status"] == 100) {
                var alert_1 = _this.alertCtrl.create({ title: "Giriş Başarısız", message: myParseData["message"], buttons: [{ text: 'Tamam', role: 'cancel' }] });
                alert_1.present();
                _this.events.publish('hideHeader', { isHidden: true });
            }
        });
        // this.navCtrl.push(SayacPage);
    };
    MulklerPage.prototype.back = function () {
        this.events.publish('hideHeader', { isHidden: false });
        // this.navCtrl.popTo(SitelerPage);
        // this.navCtrl.push(SitelerPage);
    };
    MulklerPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-mulkler',template:/*ion-inline-start:"C:\Users\Gamze\AppProject\src\pages\mulkler\mulkler.html"*/'\n \n  <ion-content>\n      \n      <div  style="height: 56px; background: linear-gradient(60deg, #6aa0a9, #004f88)  ">\n          <ion-buttons style="position: absolute ">\n              <button  icon-only (click)="back()" style="background: transparent;margin-top:33%;font-size: 14px">\n                <ion-icon name="arrow-back" style="color: white"></ion-icon>\n              </button>\n            </ion-buttons>\n              <img  src="assets/imgs/tebas_logo.png" >\n      </div>  \n    <ion-list class="site_" *ngIf="mulkler"  >\n     <ion-item *ngFor="let mulk of mulkler" (click)="SayacaGit(mulk.id)" >\n       <button  ion-button round >A</button>\n        &nbsp;<label>{{mulk.name}}</label>\n      </ion-item>\n      <br/>\n  \n    </ion-list>\n   </ion-content>\n  \n\n\n\n      \n      \n          '/*ion-inline-end:"C:\Users\Gamze\AppProject\src\pages\mulkler\mulkler.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */],
            __WEBPACK_IMPORTED_MODULE_4__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_native_storage__["a" /* NativeStorage */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* Events */]])
    ], MulklerPage);
    return MulklerPage;
}());

//# sourceMappingURL=mulkler.js.map

/***/ }),

/***/ 210:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LogopagePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the LogopagePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var LogopagePage = /** @class */ (function () {
    function LogopagePage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    LogopagePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad LogopagePage');
    };
    LogopagePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-logopage',template:/*ion-inline-start:"C:\Users\Gamze\AppProject\src\pages\logopage\logopage.html"*/'\n<ion-header>  \n    <img  src="assets/imgs/tebas_logo.png" >\n    <button ion-button  click="logfunction()">Logout</button>\n</ion-header>\n\n\n'/*ion-inline-end:"C:\Users\Gamze\AppProject\src\pages\logopage\logopage.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]])
    ], LogopagePage);
    return LogopagePage;
}());

//# sourceMappingURL=logopage.js.map

/***/ }),

/***/ 211:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_barcode_scanner__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ts_md5_dist_md5__ = __webpack_require__(289);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ts_md5_dist_md5___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_ts_md5_dist_md5__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_userdata__ = __webpack_require__(212);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_native_storage__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_storage__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__home_home__ = __webpack_require__(43);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};












//import { AngularFireAuth } from 'angularfire2/auth';
var LoginPage = /** @class */ (function () {
    function LoginPage(storage, nativeStorage, alertCtrl, giris, navCtrl, barcodeScanner, http, loadingCtrl, events) {
        this.storage = storage;
        this.nativeStorage = nativeStorage;
        this.alertCtrl = alertCtrl;
        this.giris = giris;
        this.navCtrl = navCtrl;
        this.barcodeScanner = barcodeScanner;
        this.http = http;
        this.loadingCtrl = loadingCtrl;
        this.events = events;
        this.yapilar = [];
    }
    LoginPage.prototype.login = function () {
        var _this = this;
        if (this.mail == null || this.pass == null) {
            var alert_1 = this.alertCtrl.create({
                title: 'Hata',
                subTitle: 'Eksik Bilgi Girdiniz!!!',
                buttons: ['Tamam']
            });
            alert_1.present();
        }
        var endpoint = "yapi-yonetimi";
        var condition = { "delete_status": 0 };
        var method = "get_all_items";
        var mail = this.mail;
        var password = this.pass;
        var request = "GET";
        var giden_obje = { mail: mail, password: password, request: request, endpoint: endpoint, condition: condition, method: method };
        var pass2 = __WEBPACK_IMPORTED_MODULE_5_ts_md5_dist_md5__["Md5"].hashStr(this.pass);
        var data = { mail: this.mail, password: pass2 }; //{mail:this.mail,pass:pass2};
        this.http.post("http://okumapaylasim.com/api/yapi-yonetimi", JSON.stringify(giden_obje)).subscribe(function (result) {
            _this.yapilar = JSON.parse(result['_body']);
            //session control 
            if (_this.yapilar["status"] == 200) {
                var id = _this.yapilar.data[0]['id'];
                // console.log(id);
                var alert_2 = _this.alertCtrl.create({ title: "Hoşgeldiniz", message: _this.yapilar.message, buttons: [{ text: 'Tamam', role: 'cancel' }] });
                alert_2.present();
                _this.events.publish('hideHeader', { isHidden: false });
                _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_9__home_home__["a" /* HomePage */], { yapilar: _this.yapilar });
                localStorage.setItem('id', id);
                var myStorageId = _this.storage.set('id', id);
                // console.log(myStorageId);
            }
            else if (data["status"] == 100) {
                var alert_3 = _this.alertCtrl.create({ title: "Giriş Başarısız", message: _this.yapilar.message, buttons: [{ text: 'Tamam', role: 'cancel' }] });
                alert_3.present();
                _this.events.publish('hideHeader', { isHidden: true });
            }
        }, function (err) {
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
    };
    LoginPage.prototype.onKeydown = function (event) {
        if (event.key === "Enter") {
            console.log(event);
        }
    };
    LoginPage.prototype.showLoader = function () {
        this.loading = this.loadingCtrl.create({
            content: 'Giriş yapılıyor...'
        });
        this.loading.present();
    };
    LoginPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad LoginPage');
    };
    LoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-login',template:/*ion-inline-start:"C:\Users\Gamze\AppProject\src\pages\login\login.html"*/'<!--<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon> \n    </button>\n    <ion-title>Home</ion-title>\n  </ion-navbar>\n</ion-header> -->\n\n\n<ion-content padding >\n  <div  class="form_">\n     <ion-list>\n            <div class="home_img">\n               <ion-img  src="assets/imgs/tebas_logo.png" ></ion-img>\n            </div>\n           <br/>\n           <br/>\n \n           <ion-item>\n             <ion-input value="kadirsaymadi@idealbilgi.com" type="text" placeholder="Kullanıcı Adınız" [(ngModel)]="mail"></ion-input>\n           </ion-item>\n           <br/>\n \n           <ion-item>\n             <ion-input value="123" type="password"placeholder="Şifreniz" [(ngModel)]="pass"></ion-input>\n           </ion-item>\n           <br/>\n                   \n           <ion-label class = "checkbox">\n             <input type = "checkbox">\n             <label >Beni Hatırla</label>\n           </ion-label>\n                 \n         <ion-row>\n           <ion-col class="signup-col">\n             <button   ion-button full (click)="login()">G&#304;R&#304;&#350;</button>\n             <br/>\n           </ion-col>\n         </ion-row>\n    </ion-list>  \n  </div>\n </ion-content> \n    '/*ion-inline-end:"C:\Users\Gamze\AppProject\src\pages\login\login.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_8__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_7__ionic_native_native_storage__["a" /* NativeStorage */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_6__providers_userdata__["a" /* UserData */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_4__ionic_native_barcode_scanner__["a" /* BarcodeScanner */], __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* Events */]])
    ], LoginPage);
    return LoginPage;
}());

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 212:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserData; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__ = __webpack_require__(290);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_observable_throw__ = __webpack_require__(293);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_observable_throw___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_observable_throw__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var UserData = /** @class */ (function () {
    function UserData(events, http) {
        this.events = events;
        this.http = http;
        this._favorites = [];
        this.HAS_LOGGED_IN = 'hasLoggedIn';
        this.HAS_SEEN_TUTORIAL = 'hasSeenTutorial';
        this.URL = 'http://diaticaret.xyz/apartman-yonetimi-2/api/yapi-yonetimi/';
    }
    UserData.prototype.hasFavorite = function (sessionName) {
        return (this._favorites.indexOf(sessionName) > -1);
    };
    ;
    UserData.prototype.addFavorite = function (sessionName) {
        this._favorites.push(sessionName);
    };
    ;
    UserData.prototype.removeFavorite = function (sessionName) {
        var index = this._favorites.indexOf(sessionName);
        if (index > -1) {
            this._favorites.splice(index, 1);
        }
    };
    ;
    UserData.prototype.login = function (mail, pass) {
        var _this = this;
        var data = {
            "data": { "delete_status": 0, "building_id": "1" },
            "method": "get_all_items",
            "mail": "kadirsaymadi@idealbilgi.com",
            "password": "123",
            "request": "GET"
        };
        return new Promise(function (resolve, reject) {
            var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]();
            headers.append('Content-Type', 'application/json');
            headers.append('Accept', 'application/json');
            _this.http.post(_this.URL + 'login', { headers: headers })
                .subscribe(function (res) {
                var json = res.json();
                _this.storage.set(_this.HAS_LOGGED_IN, true);
                _this.setUsername(json.user.name);
                _this.events.publish('user:login');
                resolve(res.json());
            }, function (err) {
                reject(err);
            });
        });
    };
    ;
    UserData.prototype.signup = function (username) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]();
            headers.append('Content-Type', 'application/json');
            headers.append('Accept', 'application/json');
            _this.http.post(_this.URL, { headers: headers })
                .subscribe(function (res) {
                var json = res.json();
                _this.storage.set(_this.HAS_LOGGED_IN, true);
                _this.setUsername(json.success.name);
                _this.events.publish('user:login');
                resolve(res.json());
            }, function (err) {
                reject(err);
            });
        });
    };
    ;
    UserData.prototype.logout = function () {
        this.storage.remove(this.HAS_LOGGED_IN);
        this.storage.remove('username');
        this.events.publish('user:logout');
        window.localStorage.clear();
    };
    ;
    UserData.prototype.setUsername = function (username) {
        this.storage.set('username', username);
    };
    ;
    UserData.prototype.getUsername = function () {
        return this.storage.get('username').then(function (value) {
            return value;
        });
    };
    ;
    UserData.prototype.hasLoggedIn = function () {
        return this.storage.get(this.HAS_LOGGED_IN).then(function (value) {
            return value === true;
        });
    };
    ;
    UserData.prototype.checkHasSeenTutorial = function () {
        return this.storage.get(this.HAS_SEEN_TUTORIAL).then(function (value) {
            return value;
        });
    };
    ;
    UserData = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* Events */],
            __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */]])
    ], UserData);
    return UserData;
}());

//# sourceMappingURL=userdata.js.map

/***/ }),

/***/ 213:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(214);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(236);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 236:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_forms__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__mobiscroll_angular__ = __webpack_require__(242);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_storage__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__(282);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_home_home__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_logopage_logopage__ = __webpack_require__(210);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_sayacdetay_sayacdetay__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_durumdetay_durumdetay__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_ornek_ornek__ = __webpack_require__(294);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_siteler_siteler__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_arama_arama__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_bloklar_bloklar__ = __webpack_require__(205);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_anaekran_anaekran__ = __webpack_require__(207);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_anasayfa_anasayfa__ = __webpack_require__(208);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_sayac_sayac__ = __webpack_require__(206);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_mulkler_mulkler__ = __webpack_require__(209);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pages_login_login__ = __webpack_require__(211);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__ionic_native_native_storage__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__angular_http__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__ionic_native_status_bar__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__ionic_native_splash_screen__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__ionic_native_barcode_scanner__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__providers_userdata__ = __webpack_require__(212);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


























var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_19__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_anasayfa_anasayfa__["a" /* AnasayfaPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_ornek_ornek__["a" /* OrnekPage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_sayac_sayac__["a" /* SayacPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_sayacdetay_sayacdetay__["a" /* SayacdetayPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_durumdetay_durumdetay__["a" /* DurumdetayPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_anaekran_anaekran__["a" /* AnaekranPage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_mulkler_mulkler__["a" /* MulklerPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_siteler_siteler__["a" /* SitelerPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_arama_arama__["a" /* AramaPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_logopage_logopage__["a" /* LogopagePage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_bloklar_bloklar__["a" /* BloklarPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_1__mobiscroll_angular__["a" /* MbscModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_21__angular_http__["c" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["e" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* MyApp */], {}, {
                    links: []
                }),
                __WEBPACK_IMPORTED_MODULE_5__ionic_storage__["a" /* IonicStorageModule */].forRoot(),
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_4_ionic_angular__["c" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_7__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_anaekran_anaekran__["a" /* AnaekranPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_anasayfa_anasayfa__["a" /* AnasayfaPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_sayacdetay_sayacdetay__["a" /* SayacdetayPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_bloklar_bloklar__["a" /* BloklarPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_ornek_ornek__["a" /* OrnekPage */],
                __WEBPACK_IMPORTED_MODULE_19__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_logopage_logopage__["a" /* LogopagePage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_durumdetay_durumdetay__["a" /* DurumdetayPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_siteler_siteler__["a" /* SitelerPage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_mulkler_mulkler__["a" /* MulklerPage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_sayac_sayac__["a" /* SayacPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_arama_arama__["a" /* AramaPage */],
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_22__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_23__ionic_native_splash_screen__["a" /* SplashScreen */],
                __WEBPACK_IMPORTED_MODULE_24__ionic_native_barcode_scanner__["a" /* BarcodeScanner */],
                { provide: __WEBPACK_IMPORTED_MODULE_3__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["d" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_20__ionic_native_native_storage__["a" /* NativeStorage */],
                __WEBPACK_IMPORTED_MODULE_25__providers_userdata__["a" /* UserData */],
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 282:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_siteler_siteler__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_arama_arama__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_sayacdetay_sayacdetay__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_bloklar_bloklar__ = __webpack_require__(205);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_sayac_sayac__ = __webpack_require__(206);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_anaekran_anaekran__ = __webpack_require__(207);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_anasayfa_anasayfa__ = __webpack_require__(208);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_mulkler_mulkler__ = __webpack_require__(209);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_durumdetay_durumdetay__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_logopage_logopage__ = __webpack_require__(210);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_login_login__ = __webpack_require__(211);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

















var MyApp = /** @class */ (function () {
    //pagess:Array<{title: string, component: any}>;
    //user:{mail:'ahmet@mail.com',pass:'123',login:true};
    function MyApp(platform, statusBar, splashScreen) {
        this.platform = platform;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        this.initializeApp();
        localStorage.clear();
        //localStorage.getItem('id');
        if (localStorage.getItem('id')) {
            this.section = true;
            //this.rootPage = HomePage;
            this.rootPage = __WEBPACK_IMPORTED_MODULE_15__pages_login_login__["a" /* LoginPage */];
        }
        else {
            this.section = false;
            this.rootPage = __WEBPACK_IMPORTED_MODULE_15__pages_login_login__["a" /* LoginPage */];
        }
        // used for an example of ngFor and navigation
        if (this.section == true) {
            this.pages = [
                { title: 'Home', component: __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */] },
                { title: 'Anasayfa', component: __WEBPACK_IMPORTED_MODULE_11__pages_anasayfa_anasayfa__["a" /* AnasayfaPage */] },
                { title: 'Siteler', component: __WEBPACK_IMPORTED_MODULE_5__pages_siteler_siteler__["a" /* SitelerPage */] },
                { title: 'Arama', component: __WEBPACK_IMPORTED_MODULE_6__pages_arama_arama__["a" /* AramaPage */] },
                { title: 'Sayac', component: __WEBPACK_IMPORTED_MODULE_9__pages_sayac_sayac__["a" /* SayacPage */] },
                { title: 'DurumDetay', component: __WEBPACK_IMPORTED_MODULE_13__pages_durumdetay_durumdetay__["a" /* DurumdetayPage */] },
                { title: 'Bloklar', component: __WEBPACK_IMPORTED_MODULE_8__pages_bloklar_bloklar__["a" /* BloklarPage */] },
                { title: 'Logo', component: __WEBPACK_IMPORTED_MODULE_14__pages_logopage_logopage__["a" /* LogopagePage */] },
                { title: 'Login', component: __WEBPACK_IMPORTED_MODULE_15__pages_login_login__["a" /* LoginPage */] },
                { title: 'Sayac Detay', component: __WEBPACK_IMPORTED_MODULE_7__pages_sayacdetay_sayacdetay__["a" /* SayacdetayPage */] },
                { title: 'Daireler', component: __WEBPACK_IMPORTED_MODULE_12__pages_mulkler_mulkler__["a" /* MulklerPage */] },
                { title: 'Anaekran', component: __WEBPACK_IMPORTED_MODULE_10__pages_anaekran_anaekran__["a" /* AnaekranPage */] },
            ];
        }
        else {
            this.pages = [];
        }
    }
    MyApp.prototype.initializeApp = function () {
        var _this = this;
        this.platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            _this.statusBar.styleDefault();
            _this.splashScreen.hide();
        });
    };
    MyApp.prototype.openPage = function (page) {
        // Reset the content nav to have just this page
        // we wouldn't want the back button to show in this scenario
        //this.nav.setRoot(page.component);
    };
    MyApp.prototype.slideChanged = function () {
        var currentIndex = this.slides.getActiveIndex();
        console.log('Current index is', currentIndex);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Nav */])
    ], MyApp.prototype, "nav", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* Slides */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* Slides */])
    ], MyApp.prototype, "slides", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"C:\Users\Gamze\AppProject\src\app\app.html"*/'\n  <!--<ion-menu [content]="content" [class.hide]="!section"> -->\n  <ion-menu [content]="content" > \n  <ion-header>\n    <ion-toolbar>\n      <ion-title>Menü</ion-title>\n    </ion-toolbar>\n  </ion-header>\n\n  <ion-content>\n    <ion-list>\n      <button menuClose ion-item *ngFor="let p of pages" (click)="openPage(p)">\n        {{p.title}}\n      </button>\n    </ion-list>\n  </ion-content>\n</ion-menu>\n\n\n\n<!-- Disable swipe-to-go-back because it\'s poor UX to combine STGB with side menus -->\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>\n'/*ion-inline-end:"C:\Users\Gamze\AppProject\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 294:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OrnekPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the OrnekPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var OrnekPage = /** @class */ (function () {
    function OrnekPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    OrnekPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad OrnekPage');
    };
    OrnekPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-ornek',template:/*ion-inline-start:"C:\Users\Gamze\AppProject\src\pages\ornek\ornek.html"*/'<!--\n  Generated template for the OrnekPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>ornek</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n</ion-content>\n'/*ion-inline-end:"C:\Users\Gamze\AppProject\src\pages\ornek\ornek.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]])
    ], OrnekPage);
    return OrnekPage;
}());

//# sourceMappingURL=ornek.js.map

/***/ }),

/***/ 43:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__siteler_siteler__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_storage__ = __webpack_require__(35);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




//import {AramaPage } from '../arama/arama';


//import { NativeStorage } from '@ionic-native/native-storage';

var HomePage = /** @class */ (function () {
    function HomePage(events, navCtrl, navParams, http, alertCtrl, storage) {
        this.events = events;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.http = http;
        this.alertCtrl = alertCtrl;
        this.storage = storage;
        // this.result = JSON.stringify( navParams.data.yapilar);
        this.data = navParams.get('yapilar').data;
        this.result = [];
        this.keys = Object.keys(this.data).length;
        for (var i = 0; i < this.keys; i++) {
            this.result.push(this.data[i]);
        }
        //console.log(this.result.length);
        //this.yapilar = JSON.parse(this.result);
        //console.log(this.yapilar.length);
    }
    HomePage.prototype.ionViewDidLoad = function () {
    };
    HomePage.prototype.SearchSayfa = function (id) {
        var _this = this;
        var endpoint = "blok-yonetimi";
        var condition = { "delete_status": 0, "building_id": id };
        var method = "get_all_items";
        var mail = "kadirsaymadi@idealbilgi.com";
        var password = "123";
        var request = "GET";
        var giden_obje = { mail: mail, password: password, request: request, endpoint: endpoint, condition: condition, method: method };
        //  console.log(JSON.stringify(giden_obje));
        this.http.post("http://okumapaylasim.com/api/blok-yonetimi", JSON.stringify(giden_obje)).subscribe(function (result) {
            _this.bloklar = JSON.parse(result['_body']);
            if (_this.bloklar["status"] == 200) {
                var id_1 = _this.bloklar.data[0]['id'];
                // console.log(id);
                _this.events.publish('hideHeader', { isHidden: false });
                _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__siteler_siteler__["a" /* SitelerPage */], { bloklar: _this.bloklar });
                localStorage.setItem('id', id_1);
                // console.log(id);
                // var myStorageId = this.storage.set('id', id);
                //console.log(myStorageId);
            }
            else if (_this.bloklar["status"] == 100) {
                var alert_1 = _this.alertCtrl.create({ title: "Giriş Başarısız", message: _this.bloklar.message, buttons: [{ text: 'Tamam', role: 'cancel' }] });
                alert_1.present();
                _this.events.publish('hideHeader', { isHidden: true });
            }
        });
    };
    HomePage.prototype.goBlok = function () {
        this.events.publish('hideHeader', { isHidden: false });
        this.navCtrl.popTo(__WEBPACK_IMPORTED_MODULE_4__siteler_siteler__["a" /* SitelerPage */]);
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"C:\Users\Gamze\AppProject\src\pages\home\home.html"*/'\n<ion-content padding>\n\n  <div class="giris_res">    \n       <img  src="assets/imgs/tebas_logo.png" >\n   </div> \n     \n       <ion-list>\n           \n           <ion-row >    \n                <ion-card style="width:29%"  *ngFor="let key of result" (click)="SearchSayfa(key.id)">\n                   <!--  <ion-card-header><span class="radius"></span></ion-card-header> -->\n                   <ion-card-content>{{key.name}} </ion-card-content> \n                   \n                  </ion-card>        \n            </ion-row >  \n            \n        \n\n            \n            \n        </ion-list>\n\n\n       \n           \n       \n    \n</ion-content>\n \n\n\n\n\n'/*ion-inline-end:"C:\Users\Gamze\AppProject\src\pages\home\home.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* Events */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_5__ionic_storage__["b" /* Storage */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 44:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SitelerPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_native_storage__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_storage__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__arama_arama__ = __webpack_require__(107);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









/**
 * Generated class for the SitelerPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var SitelerPage = /** @class */ (function () {
    function SitelerPage(events, navCtrl, navParams, storage, nativeStorage, alertCtrl, http, loadingCtrl) {
        this.events = events;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.storage = storage;
        this.nativeStorage = nativeStorage;
        this.alertCtrl = alertCtrl;
        this.http = http;
        this.loadingCtrl = loadingCtrl;
        this.data = navParams.get('bloklar').data;
        this.result = [];
        this.keys = Object.keys(this.data).length;
        for (var i = 0; i < this.keys; i++) {
            this.result.push(this.data[i]);
        }
        this.storage.get('id').then(function (val) {
            //  console.log('myID', val);
        });
        //this.bloklar = navParams.get('bloklar');
        // console.log(this.bloklar);
    }
    SitelerPage.prototype.ionViewDidLoad = function () {
        //  console.log('ionViewDidLoad SitelerPage');
    };
    SitelerPage.prototype.goBackHome = function () {
        this.events.publish('hideHeader', { isHidden: false });
        this.navCtrl.popTo(__WEBPACK_IMPORTED_MODULE_2__home_home__["a" /* HomePage */]);
    };
    SitelerPage.prototype.blokSayfa = function (id) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__arama_arama__["a" /* AramaPage */]);
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
    };
    SitelerPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-siteler',template:/*ion-inline-start:"C:\Users\Gamze\AppProject\src\pages\siteler\siteler.html"*/'\n \n  <ion-content>\n      \n      <div  style="height: 56px; background: linear-gradient(60deg, #6aa0a9, #004f88)  ">\n          <ion-buttons style="position: absolute; ">\n              <button  icon-only (click)="goBackHome()" style="background: transparent;margin-top:33%;font-size: 14px">\n                <ion-icon name="arrow-back" style="color: white"></ion-icon>\n              </button>\n            </ion-buttons>\n              <img  src="assets/imgs/tebas_logo.png" >\n      </div>  \n    <ion-list class="site_">\n      \n        <ion-item *ngFor="let key of result"  (click)="blokSayfa(id)">\n            <button  ion-button round></button>&nbsp;<label>{{key.name}}</label>\n          </ion-item>\n          <br/>\n\n    </ion-list>\n   </ion-content>\n  \n\n   '/*ion-inline-end:"C:\Users\Gamze\AppProject\src\pages\siteler\siteler.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* Events */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */], __WEBPACK_IMPORTED_MODULE_5__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_4__ionic_native_native_storage__["a" /* NativeStorage */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */]])
    ], SitelerPage);
    return SitelerPage;
}());

//# sourceMappingURL=siteler.js.map

/***/ })

},[213]);
//# sourceMappingURL=main.js.map