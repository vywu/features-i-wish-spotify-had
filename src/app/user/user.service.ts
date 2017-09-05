import { Injectable } from '@angular/core';
import {SpotifyAPIService} from '../spotify-api.service';


@Injectable()
export class UserService {

  constructor(private apiService: SpotifyAPIService) {

  }
  getUsername(){
      return this.apiService.getUsername();
    }

  getTracks(){
    return this.apiService.getRecentTracks().do(data=>{console.log(data)});
  }

  pauseTrack(){
    return this.apiService.pauseCurrentTrack();
  }

  startTrack(){
    return this.apiService.startCurrentTrack();
  }

  skipTrack(){
    this.apiService.skipCurrentTrack();
  }
  currentTrack(){
    this.apiService.getCurrentTrack();
  }
  previousTrack(){
    this.apiService.previousTrack();
  }
  currentPlayback(){
    return this.apiService.getPlayback();
  }
}
