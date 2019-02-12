import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { HomePage }      from '../pages/home/home';
import { SitelerPage }   from '../pages/siteler/siteler';
import { AramaPage }     from '../pages/arama/arama';
import {SayacdetayPage}     from '../pages/sayacdetay/sayacdetay';
import { BloklarPage }   from '../pages/bloklar/bloklar';
import { SayacPage }     from '../pages/sayac/sayac';
import { AnaekranPage }  from '../pages/anaekran/anaekran';
import { AnasayfaPage }  from '../pages/anasayfa/anasayfa';
import { MulklerPage}   from '../pages/mulkler/mulkler';
import { UserData } from '../providers/userdata';
import { DurumdetayPage}   from '../pages/durumdetay/durumdetay';
import { NativeStorage } from '@ionic-native/native-storage';
import { LogopagePage}   from '../pages/logopage/logopage';
import { LoginPage}   from '../pages/login/login';
import { Slides } from 'ionic-angular';


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;
  @ViewChild(Slides) slides: Slides;
  rootPage: any;
  section:boolean;
  pages: Array<{title: string, component: any}>;
  //pagess:Array<{title: string, component: any}>;
  //user:{mail:'ahmet@mail.com',pass:'123',login:true};

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
    this.initializeApp();
    localStorage.clear();
    //localStorage.getItem('id');
    if(localStorage.getItem('id')){
      this.section=true;
      //this.rootPage = HomePage;
      this.rootPage = LoginPage;
    }
    else {
      this.section=false;
      this.rootPage =LoginPage; 
    }
    
    // used for an example of ngFor and navigation
    if(this.section == true){
      this.pages = [
        { title: 'Home', component: HomePage },  
        { title: 'Anasayfa', component:AnasayfaPage },
        { title: 'Siteler', component: SitelerPage },
        { title: 'Arama', component: AramaPage },
        { title: 'Sayac', component:SayacPage },
        { title: 'DurumDetay', component:DurumdetayPage },
        { title: 'Bloklar', component: BloklarPage },
        { title: 'Logo', component:LogopagePage },
        { title: 'Login', component: LoginPage },
        { title: 'Sayac Detay', component: SayacdetayPage },
        { title: 'Daireler', component: MulklerPage },
        { title: 'Anaekran', component:AnaekranPage },
        
        
      ];
    }
    else {
      this.pages = [];
    }

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  
  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    //this.nav.setRoot(page.component);
  }

  slideChanged() {
    let currentIndex = this.slides.getActiveIndex();
    console.log('Current index is', currentIndex);
}
  
}
