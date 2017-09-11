import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AuthenticationComponent } from './authentication/authentication.component';
import {HttpModule} from '@angular/http';
import {AuthenticationService} from "./authentication/authentication.service";
import {SpotifyAPIService} from './spotify-api.service';
import {routing} from "./app.routing";
import { LyricsComponent } from './lyrics/lyrics.component';
import { TrackComponent } from './track/track.component';
import { TracklistComponent } from './tracklist/tracklist.component';
import { InfiniteScrollerDirective } from './infinite-scroller.directive';
import { PlaybackComponent } from './playback/playback.component';
import { PlaylistComponent } from './playlist/playlist.component';
import { SavedmusicComponent } from './savedmusic/savedmusic.component';
import { FormsModule} from '@angular/forms';

import { SearchPipe } from './search.pipe';
@NgModule({
  declarations: [
    AppComponent,
    AuthenticationComponent,
    LyricsComponent,
    TrackComponent,
    TracklistComponent,
    InfiniteScrollerDirective,
    PlaybackComponent,
    PlaylistComponent,
    SavedmusicComponent,
    SearchPipe

  ],
  imports: [
    BrowserModule,HttpModule,routing,FormsModule
  ],
  providers: [AuthenticationService,SpotifyAPIService],
  bootstrap: [AppComponent]
})
export class AppModule { }
