import { Injectable } from '@angular/core';
import {SpotifyAPIService} from '../spotify-api.service';

@Injectable()
export class UserService {

  constructor(private apiService: SpotifyAPIService) {
  }
  getUsername(){
    if(localStorage.getItem("username")==null)
      this.apiService.getUsername();
    return localStorage.getItem("username");
}


}
