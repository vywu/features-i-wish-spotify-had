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
  constructor(private AuthService: AuthenticationService) {

  }

  login(){
    return this.AuthService.login();

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
