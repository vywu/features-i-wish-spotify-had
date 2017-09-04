import { Component, OnInit } from '@angular/core';
import { UserService } from './user.service';
import {TracklistComponent} from '../tracklist/tracklist.component';
import {TrackComponent} from '../track/track.component';
import {Track} from '../track/track.model';
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  constructor(private userService: UserService) { }
  ngOnInit() {
   this.userService.getUsername().subscribe(data=>this.greetUser(data.display_name));
  }
  public recentTracks:Track[]=[];
  parseTracks(tracks:any){

    for (let track of tracks)
    {
      var artists:string[]=[];
      for(let artist of track.track.artists)
      {
        artists.push(artist.name)
      }
      var newtrack=new Track(track.track.name,artists,track.track.duration_ms);
      this.recentTracks.push(newtrack);}

  }
  getTracks(){
    this.userService.getTracks().subscribe(data=>this.parseTracks(data.items));
  }
  pauseTrack(){
    this.userService.pauseTrack();
  }
  startTrack(){
    this.userService.startTrack();
  }
  nextTrack(){
    this.userService.skipTrack();
  }
  currentTrack(){
    this.userService.currentTrack();
  }
  greetUser(username:string){
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
