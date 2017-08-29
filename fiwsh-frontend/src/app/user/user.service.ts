import { Injectable } from '@angular/core';
import {SpotifyAPIService} from '../spotify-api.service';


@Injectable()
export class UserService {

  constructor(private apiService: SpotifyAPIService) {
    this.getUsername();
  }
  getUsername(){
    if(localStorage.getItem("username")==null)
      console.log("yepit'sempty");
      this.apiService.getUsername();
      console.log("done");
    }

  getTracks(){
    this.apiService.getRecentTracks().subscribe(data=>{console.log(data)});
  }

  pauseTrack(){
    this.apiService.pauseCurrentTrack();
  }

  startTrack(){
    this.apiService.startCurrentTrack();
  }

  skipTrack(){
    this.apiService.skipCurrentTrack();
  }
  currentTrack(){
    this.apiService.getCurrentTrack();
  }
}
