import { Component, OnInit } from '@angular/core';
import {SpotifyAPIService} from '../spotify-api.service';
import {TracklistComponent} from '../tracklist/tracklist.component';
import {TrackComponent} from '../track/track.component';
import {Track} from '../track/track.model';
import {SavedmusicService} from '../savedmusic.service';

@Component({
  selector: 'app-playlist',
  templateUrl: './playlist.component.html',
  styleUrls: ['./playlist.component.css']
})
export class PlaylistComponent implements OnInit {

  constructor(private apiService:SpotifyAPIService,private SavedmusicService:SavedmusicService ) { }

  ngOnInit() {
  }
  recentTracks:Track[]=[];

  getRecentTracks(){
    this.apiService.getRecentTracks().subscribe(data=>this.parseTracks(data.items,true));
  }
  parseTracks(tracks:any,type:boolean) {

    for (let track of tracks) {
      var artists: string[] = [];
      for (let artist of track.track.artists) {
        artists.push(artist.name)
      }

      var newtrack = new Track(track.track.name, artists, track.track.duration_ms, track.track.id);

      this.recentTracks.push(newtrack)

    }
  }
  getUri(data:any){
    return data.track.uri;
  }
  generateInexplicit(){
    var inexplicit:any[]=[];
    console.log("called");
    for (let item of this.SavedmusicService.savedMusic){
      if(item.track.explicit===false){
        inexplicit.push(item);
      }
    }
    let uris=inexplicit.map(this.getUri);
    console.log(uris);
    this.apiService.createPlaylist("").subscribe(data=>this.addTracks(uris,data.id));
    }

  addTracks(uris:any[],id:string){
    for(let batch=0;batch<uris.length/100;batch++){
      var uri=uris.slice(batch*100,100+batch*100);
      console.log(uri);

      setTimeout(this.apiService.addTrackToPlaylist(id,uri),1000);
    }
  }

}
