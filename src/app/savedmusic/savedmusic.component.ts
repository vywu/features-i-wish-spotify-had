import { Component, OnInit } from '@angular/core';
import {SpotifyAPIService} from '../spotify-api.service';
import {TracklistComponent} from '../tracklist/tracklist.component';
import {TrackComponent} from '../track/track.component';
import {Track} from '../track/track.model';
import {ExplicitPipe} from '../explicit.pipe'
@Component({
  selector: 'app-savedmusic',
  templateUrl: './savedmusic.component.html',
  styleUrls: ['./savedmusic.component.css'],

})
export class SavedmusicComponent implements OnInit {
  // savedMusic:Track[]=[];
  savedMusic:any[]=[];
  constructor(private apiService:SpotifyAPIService) {
  }
  // parseTracks(data:any){
  //   console.log(data);
  //   var tracks=data.items;
  //   for (let track of tracks)
  //   {
  //     var artists:string[]=[];
  //     for(let artist of track.track.artists)
  //     {
  //       artists.push(artist.name)
  //     }
  //     var newtrack=new Track(track.track.name,artists,track.track.duration_ms,track.track.id);
  //
  //     this.savedMusic.push(newtrack);
  //     console.log(newtrack);
  //
  //  }
  //   return data.next;
  // }
  parseTracks(data:any){
    var tracks=data.items;
    for (let track of tracks)
    {

      this.savedMusic.push(track);
      console.log(track);

    }
    return data.next;
  }
  getSavedMusicInit(next:string){
      if(next!==null){
      this.apiService.getSavedTracks(next).subscribe(data=>{this.getSavedMusicInit(data.next);this.parseTracks(data)});}
      }

  ngOnInit(){
    if (this.savedMusic.length===0){
      var next="https://api.spotify.com/v1/me/tracks?offset=0&limit=50";
    this.getSavedMusicInit(next);}

  }



  print(){
    console.log(this.savedMusic.length);
  }

}
