import { Component, OnInit } from '@angular/core';
import { UserService } from './user.service';
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  constructor(private userService: UserService) { }
  username=localStorage.getItem("username");
  ngOnInit() {
    console.log("reached");


  }
  getTracks(){
    this.userService.getTracks();
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
  greetUser(){
    var date = new Date();
    var hours = date.getHours();
    var greeting;
    if (hours > 6 && hours < 12) {
      greeting = "Morning, " + this.username + "!";
    }
    else if (hours >= 12 && hours <= 17) {
      greeting = "Good afternoon, " + this.username + "!";
    }
    else if (hours > 17 && hours < 23) {
      greeting = "Good evening, " + this.username + ". How's your day?";
    }
    else {
      greeting = "Go to bed " + this.username + "!";
    }

    return greeting;
  }

}
