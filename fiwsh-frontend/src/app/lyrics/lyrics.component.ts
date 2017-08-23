import { Component, OnInit } from '@angular/core';
import { Http, Headers, Response} from "@angular/http";

@Component({
  selector: 'app-lyrics',
  templateUrl: './lyrics.component.html',
  styleUrls: ['./lyrics.component.css']
})
export class LyricsComponent implements OnInit {

  constructor(private http:Http) { }
  token="zvoBFlDTMgtPGdCyzJf5vFKkvjqXsc21g7V_aImNmCBtBJh4VbvpU7c58B7zVWAb";
  apiUrl="http://api.genius.com";
  ngOnInit() {
  }
  getSongId(name:string,artist:string){
    this.http.get(this.apiUrl+"/search"+"q="+encodeURIComponent(name)+"%20"+encodeURIComponent(artist)).map((response:Response)=>{response.json()}).subscribe(data=>{console.log(data)});

  }

}
