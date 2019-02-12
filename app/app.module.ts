import { FormsModule } from '@angular/forms';
import { MbscModule } from '@mobiscroll/angular';
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { IonicStorageModule } from '@ionic/storage';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { LogopagePage}   from '../pages/logopage/logopage';
import {SayacdetayPage } from '../pages/sayacdetay/sayacdetay';
import { DurumdetayPage}   from '../pages/durumdetay/durumdetay';
import {OrnekPage } from '../pages/ornek/ornek';
import {SitelerPage } from '../pages/siteler/siteler';
import {AramaPage } from '../pages/arama/arama';
import { BloklarPage } from '../pages/bloklar/bloklar';
import { AnaekranPage } from '../pages/anaekran/anaekran';
import { AnasayfaPage } from '../pages/anasayfa/anasayfa';
import { SayacPage } from '../pages/sayac/sayac';
import { MulklerPage}   from '../pages/mulkler/mulkler';
import { LoginPage}   from '../pages/login/login';
import { NativeStorage } from '@ionic-native/native-storage';

import { HttpModule } from '@angular/http';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';
import { UserData } from '../providers/userdata';
import { Storage } from '@ionic/storage';
import { AngularFireModule } from 'angularfire2';



@NgModule({
  declarations: [
    MyApp,
    LoginPage,
    HomePage,
    AnasayfaPage,
    OrnekPage,
    SayacPage,
    SayacdetayPage,
    DurumdetayPage,
    AnaekranPage,
    MulklerPage,
    SitelerPage,
    AramaPage,
    LogopagePage,  
    BloklarPage
 
  ],

  imports: [ 
    FormsModule, 
    MbscModule,
    BrowserModule,
     HttpModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot(),
  
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    AnaekranPage,
    AnasayfaPage,
    SayacdetayPage,
    BloklarPage,
    OrnekPage,
    LoginPage,
    LogopagePage, 
    DurumdetayPage, 
    SitelerPage,
    MulklerPage,
    SayacPage,
    AramaPage,

 
  ],
  providers: [
    StatusBar,
    SplashScreen,
    BarcodeScanner,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    NativeStorage,
    UserData,
  ]
})
export class AppModule {}
