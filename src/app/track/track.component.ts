import { Component, OnInit, Input } from '@angular/core';
import { Track } from './track.model';


@Component({
  selector: 'app-track',
  templateUrl: './track.component.html',
  styleUrls: ['./track.component.css']
})
export class TrackComponent implements OnInit {

  constructor() { }
  @Input() track:any;

  ngOnInit() {
  }

}
