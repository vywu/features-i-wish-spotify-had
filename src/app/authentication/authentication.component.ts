import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Http, Headers,Response,URLSearchParams} from '@angular/http';
import {AuthenticationService} from './authentication.service';



@Component({
  selector: 'app-authentication',
  templateUrl: './authentication.component.html',
  styleUrls: ['./authentication.component.css']
})
export class AuthenticationComponent implements OnInit {
  @Output() userLoggedIn=new EventEmitter<boolean>();
  constructor(private AuthService: AuthenticationService,private http:Http) {

  }

  login(){
    // return this.AuthService.login();
    console.log("login");
    window.open("http://localhost:3000/login",'_self');


  }
  getAccessToken(){

  }
  ngOnInit() {
      if(this.AuthService.getAccessToken()){
       localStorage.setItem("loggedin","true");
      }
      // this.AuthService.getUsername();

  }







}
