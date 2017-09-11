import { Component, OnInit, Input, Output } from '@angular/core';
import { TrackComponent } from '../track/track.component';
import { Track } from '../track/track.model'

@Component({
  selector: 'app-tracklist',
  templateUrl: './tracklist.component.html',
  styleUrls: ['./tracklist.component.css']
})
export class TracklistComponent implements OnInit {
  scrollCallback;
  constructor() {}
  @Input() tracklist:any[];


  ngOnInit() {
  }
  callParent(){

  }

}
