import { Component, OnInit } from '@angular/core';
import { Http, Headers, Response} from "@angular/http";
import { Observable } from 'rxjs/Observable';
import {SpotifyAPIService} from '../spotify-api.service';

@Component({
  selector: 'app-lyrics',
  templateUrl: './lyrics.component.html',
  styleUrls: ['./lyrics.component.css']
})
export class LyricsComponent implements OnInit {

  constructor(private http:Http,private apiService:SpotifyAPIService) { }
  token="zvoBFlDTMgtPGdCyzJf5vFKkvjqXsc21g7V_aImNmCBtBJh4VbvpU7c58B7zVWAb";
  apiUrl="https://api.genius.com";
  // headers=new Headers({"Authorization":"Bearer "+this.token,"Content-Type":"text/plain"});


  ngOnInit() {
  }
  getCurrentSong(){
      return this.apiService.getCurrentTrack().subscribe(data=>{
        let currentSongName=data.item.name;
      var artistarray=data.item.artists;
      console.log(artistarray);
      let artists="";
      for (let i in artistarray){
        artists=artistarray[i].name+" ";
      }
      this.getSongList(currentSongName,artists).subscribe(
        data=>{
          let id=data.response.hits[0].result.id;
          this.getLyrics(id);

        }
      )
      });
  }

  getSongList(name:string,artist:string){
    return this.http.get(this.apiUrl+"/search?"+"q="+encodeURIComponent(name)+"%20"+encodeURIComponent(artist)+"&access_token="+this.token).map((response:Response)=> {
      return response.json();
    })

  }

  getSongId()
  {
    this.getCurrentSong();
    this.getSongList(localStorage.getItem("currentSongArtist"),localStorage.getItem("currentSongName")).subscribe(data=>localStorage.setItem("id",data.response.hits[0].result.id));
  }

  getLyrics(id:string)
  {

    return this.http.get(this.apiUrl+"/songs/"+id+"?access_token="+this.token).map((response:Response)=> {
     return response.json();
    }).subscribe(data=>{let url="https://genius.com"+data.response.song.path;
              return window.open(url)});

  }
}
