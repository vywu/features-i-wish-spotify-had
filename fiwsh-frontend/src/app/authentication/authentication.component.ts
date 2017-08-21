import { Component, OnInit } from '@angular/core';
import { Http, Headers,Response,URLSearchParams} from '@angular/http';
import {AuthenticationService} from './authentication.service';

import 'rxjs/RX';
import {Observable} from "rxjs";

@Component({
  selector: 'app-authentication',
  templateUrl: './authentication.component.html',
  styleUrls: ['./authentication.component.css']
})
export class AuthenticationComponent implements OnInit {

  constructor(private AuthService: AuthenticationService) {
  }

  login(){
    return this.AuthService.login()
  }
  ngOnInit() {
  }



}
