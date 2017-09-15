import { Component, OnInit } from '@angular/core';
import {SpotifyAPIService} from '../spotify-api.service';
import {TracklistComponent} from '../tracklist/tracklist.component';
import {TrackComponent} from '../track/track.component';
import {Track} from '../track/track.model';

@Component({
  selector: 'app-playback',
  templateUrl: './playback.component.html',
  styleUrls: ['./playback.component.css']
})
export class PlaybackComponent implements OnInit {
  constructor(private apiService:SpotifyAPIService){}
  ngOnInit() {
    this.apiService.getUsername().subscribe(data=>{localStorage.setItem("username",data.display_name)});
    this.apiService.getUserId();
  }
  public paused=true;
  public recentTracks:Track[]=[];
  public savedTracks:Track[]=[];

  playAndPause(){
    this.apiService.getPlayback().subscribe(data=>{

      if(!data.device.is_active){console.log("can't find the device");}
      else if (data.is_playing){this.pauseTrack();}
      else{this.startTrack();}});
  }


  pauseTrack(){
    this.apiService.pauseCurrentTrack().subscribe(data=>this.paused=true);
  }
  startTrack(){
    this.apiService.startCurrentTrack().subscribe(data=>this.paused=false);
  }
  nextTrack(){
    this.apiService.skipCurrentTrack();
  }
  currentTrack(){
    this.apiService.getPlayback();
  }
  previousTrack(){
    this.apiService.previousTrack();
  }
  greetUser(){
    var username=localStorage.getItem("username");
    var date = new Date();
    var hours = date.getHours();
    var greeting;
    if (hours > 6 && hours < 12) {
      greeting = "Morning, " + username + "!";
    }
    else if (hours >= 12 && hours <= 17) {
      greeting = "Good afternoon, " + username + "!";
    }
    else if (hours > 17 && hours < 23) {
      greeting = "Good evening, " + username + ". How's your day?";
    }
    else {
      greeting = "Go to bed " + username + "!";
    }

    return greeting;
  }


}
