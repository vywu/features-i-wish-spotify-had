import { Injectable } from '@angular/core';
import {Http} from '@angular/http';

@Injectable()
export class AuthenticationService {

  constructor(http: Http) {
  }

  logout(){
    localStorage.clear();
  }

  login(){
    console.log('called');
    var client_id='990908af7650443799342f406c37de12';
    var response_type="token";
    var redirect_uri="http://localhost:4200/user";
    var scope= 'user-read-private playlist-read-collaborative playlist-modify-public playlist-modify-private ugc-image-upload user-follow-read user-library-read user-read-private user-top-read streaming';
    var authUrl='https://accounts.spotify.com/authorize?'+'client_id='+client_id+'&response_type='+response_type+'&redirect_uri='+redirect_uri+'&scope='+scope;
    console.log(authUrl);
    window.open(authUrl);
    return
    // return this.http.get(authUrl)
    //   .map((response: Response)=>response.json())
    //   .catch((error: Response)=>Observable.throw(error.json()));
  }







}
