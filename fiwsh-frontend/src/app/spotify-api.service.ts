import { Injectable } from '@angular/core';
import {Http, Headers, Response} from '@angular/http';

@Injectable()
export class SpotifyAPIService {

  constructor(private http:Http) { }
  apiUrl="https://api.spotify.com/v1";
  token=localStorage.getItem("access_token");

  headers=new Headers({"Authorization":"Bearer "+this.token});

  getUsername(){
    var username:string;
    this.http.get(this.apiUrl+'/me',{
      headers:this.headers}).map((response:Response)=>response.json()).subscribe(data=>{localStorage.setItem("username",data.display_name)});
  }

}


