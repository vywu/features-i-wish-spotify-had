import { Component, OnInit, Input } from '@angular/core';
import { TrackComponent } from '../track/track.component';
import { Track } from '../track/track.model'

@Component({
  selector: 'app-tracklist',
  templateUrl: './tracklist.component.html',
  styleUrls: ['./tracklist.component.css']
})
export class TracklistComponent implements OnInit {

  constructor() { }
  @Input() tracklist:Track[];
  ngOnInit() {
  }


}
