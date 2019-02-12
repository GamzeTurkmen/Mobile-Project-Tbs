import { Injectable } from '@angular/core';
import { Events } from 'ionic-angular';

import { Http, Headers} from '@angular/http';
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';


@Injectable()
export class UserData {
  _favorites: string[] = [];
  HAS_LOGGED_IN = 'hasLoggedIn';
  HAS_SEEN_TUTORIAL = 'hasSeenTutorial';
  URL = 'http://diaticaret.xyz/apartman-yonetimi-2/api/yapi-yonetimi/';
  storage: any;
  constructor(
    public events: Events,

    public http:Http
  ) {}

  hasFavorite(sessionName: string): boolean {
    return (this._favorites.indexOf(sessionName) > -1);
  };

  addFavorite(sessionName: string): void {
    this._favorites.push(sessionName);
  };

  removeFavorite(sessionName: string): void {
    let index = this._favorites.indexOf(sessionName);
    if (index > -1) {
      this._favorites.splice(index, 1);
    }
  };

  login(mail,pass) {
     let data={
        

            "data": 
            
             {"delete_status":0,"building_id":"1"}, 
            
             "method":"get_all_items", 
            
             "mail":"kadirsaymadi@idealbilgi.com",
            
             "password":"123", 
            
             "request":"GET" 
            
            

     };

    return new Promise((resolve, reject) => {
      let headers = new Headers();
      headers.append('Content-Type', 'application/json');
      headers.append('Accept', 'application/json');

      this.http.post(this.URL+'login', {headers: headers})
        .subscribe(res => {
          let json = res.json();
          this.storage.set(this.HAS_LOGGED_IN, true);
          this.setUsername(json.user.name);
          this.events.publish('user:login');
          resolve(res.json());
        }, (err) => {
          reject(err);
        });
    });
  };

  signup(username: any) {
    return new Promise((resolve, reject) => {
      let headers = new Headers();
      headers.append('Content-Type', 'application/json');
      headers.append('Accept', 'application/json');

      this.http.post(this.URL, {headers: headers})
        .subscribe(res => {
          let json = res.json();
          this.storage.set(this.HAS_LOGGED_IN, true);
          this.setUsername(json.success.name);
          this.events.publish('user:login');
          resolve(res.json());
        }, (err) => {
          reject(err);
        });
    });
  };

  logout(): void {
    this.storage.remove(this.HAS_LOGGED_IN);
    this.storage.remove('username');
    this.events.publish('user:logout');
    window.localStorage.clear();
  };

  setUsername(username: string): void {
    this.storage.set('username', username);
  };

  getUsername(): Promise<string> {
    return this.storage.get('username').then((value) => {
      return value;
    });
  };

  hasLoggedIn(): Promise<boolean> {
    return this.storage.get(this.HAS_LOGGED_IN).then((value) => {
      return value === true;
    });
  };

  checkHasSeenTutorial(): Promise<string> {
    return this.storage.get(this.HAS_SEEN_TUTORIAL).then((value) => {
      return value;
    });
  };
}
