import { Injectable } from '@angular/core';
import {Http} from '@angular/http';

@Injectable()
export class AuthenticationService {

  constructor(http: Http) {
  }
  production=false;



  login(){
    console.log('called');
    var client_id='990908af7650443799342f406c37de12';
    var response_type="token";
    var redirect_uri=this.production? "https://fiwsh.herokuapp.com/":"http://localhost:4200";
    var scope= 'user-read-private user-read-email user-read-recently-played playlist-read-collaborative playlist-modify-public playlist-modify-private ugc-image-upload user-follow-read user-library-read user-read-private user-top-read streaming user-read-currently-playing user-modify-playback-state';
    var authUrl='https://accounts.spotify.com/authorize?'+'client_id='+client_id+'&response_type='+response_type+'&redirect_uri='+redirect_uri+
    (scope ? '&scope=' + encodeURIComponent(scope) : '');
    console.log(authUrl);
    window.open(authUrl,"_self");
    console.log(window.location.hash.substring(1));
    // return this.http.get(authUrl)
    //   .map((response: Response)=>response.json())
    //   .catch((error: Response)=>Observable.throw(error.json()));
  }

  logout(){
    localStorage.clear();
  }


  getAccessToken(){
    var hashParams={};
    var q=window.location.hash.substring(1);
    var e, r = /([^&;=]+)=?([^&;]*)/g;
    if(q!='')
    {
      while (e = r.exec(q)) {
        hashParams[e[1]] = decodeURIComponent(e[2]);
      }
      this.setAccessToken(hashParams);
      return true;

    }
    // var expires = 0 + localStorage.getItem('pa_expires');
    // if ((new Date()).getTime() > expires) {
    // return '';}
    // var token = localStorage.getItem('pa_token');
    // console.log(token);
    // return token;
}

  setAccessToken(hashParams:any){
    console.log(hashParams);
    localStorage.setItem("access_token",hashParams.access_token);
  }





}
