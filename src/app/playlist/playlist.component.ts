import { Component, OnInit } from '@angular/core';
import {SpotifyAPIService} from '../spotify-api.service';
import {TracklistComponent} from '../tracklist/tracklist.component';
import {TrackComponent} from '../track/track.component';
import {Track} from '../track/track.model';

@Component({
  selector: 'app-playlist',
  templateUrl: './playlist.component.html',
  styleUrls: ['./playlist.component.css']
})
export class PlaylistComponent implements OnInit {

  constructor(private apiService:SpotifyAPIService) { }

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

}
