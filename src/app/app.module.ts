import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AuthenticationComponent } from './authentication/authentication.component';
import {HttpModule} from '@angular/http';
import {AuthenticationService} from "./authentication/authentication.service";
import { UserComponent } from './user/user.component';
import {UserService} from './user/user.service';
import {SpotifyAPIService} from './spotify-api.service';
import {routing} from "./app.routing";
import { LyricsComponent } from './lyrics/lyrics.component';
import { TrackComponent } from './track/track.component';
import { TracklistComponent } from './tracklist/tracklist.component';
@NgModule({
  declarations: [
    AppComponent,
    AuthenticationComponent,
    UserComponent,
    LyricsComponent,
    TrackComponent,
    TracklistComponent
  ],
  imports: [
    BrowserModule,HttpModule,routing
  ],
  providers: [AuthenticationService,UserService,SpotifyAPIService],
  bootstrap: [AppComponent]
})
export class AppModule { }
