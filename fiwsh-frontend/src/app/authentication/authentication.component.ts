import { Component, OnInit } from '@angular/core';
import { Http, Headers,Response,URLSearchParams} from '@angular/http';
import 'rxjs/RX';
import {Observable} from "rxjs";

@Component({
  selector: 'app-authentication',
  templateUrl: './authentication.component.html',
  styleUrls: ['./authentication.component.css']
})
export class AuthenticationComponent implements OnInit {

  constructor(private http:Http) {
  }


  ngOnInit() {
  }



}
