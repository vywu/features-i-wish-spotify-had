import { Injectable } from '@angular/core';
import {Http, Headers, Response} from '@angular/http';
import 'rxjs/Rx';
import 'rxjs/add/operator/map';
@Injectable()
export class SpotifyAPIService {

  constructor(private http:Http) { }
  apiUrl="https://api.spotify.com/v1/me";
  token=localStorage.getItem("access_token");

  headers=new Headers({"Authorization":"Bearer "+this.token});

  getUsername(){
    var username:string;
    return this.http.get(this.apiUrl,{
      headers:this.headers}).map((response:Response)=>response.json());
  }

  getRecentTracks(){
    return this.http.get(this.apiUrl+'/player/recently-played',{headers:this.headers}).map((response:Response)=>response.json())
  }

  getCurrentTrack(){
    return this.http.get(this.apiUrl+'/player/currently-playing',{headers:this.headers}).map((response:Response)=>response.json());
  }

  pauseCurrentTrack(){
    return this.http.put(this.apiUrl+'/player/pause',null,{headers:this.headers}).map((response:Response)=>response.json()).subscribe(data=>console.log(data));
  }

  startCurrentTrack(){

    return this.http.put(this.apiUrl+'/player/play',null,{headers:this.headers}).map((response:Response)=>response.json()).subscribe(data=>console.log(data));
  }

  skipCurrentTrack(){
    return this.http.post(this.apiUrl+'/player/next',null,{headers:this.headers}).map((response:Response)=>response.json()).subscribe(data=>console.log(data));
  }
}


