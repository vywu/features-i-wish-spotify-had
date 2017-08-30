import { Component } from '@angular/core';
import {AuthenticationComponent} from './authentication/authentication.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  constructor()
  {
  }
  isLoggedIn(){
    return (localStorage.getItem("loggedin")=="true")
  }



}
