import { Component, OnInit } from '@angular/core';
import { UserService } from './user.service';
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  constructor(private userService: UserService) { }
  username=this.userService.getUsername();
  ngOnInit() {
    console.log("reached");


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
