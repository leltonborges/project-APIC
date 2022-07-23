import { Component, OnInit } from '@angular/core';
import { Photos } from '../photo';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-photo-all',
  templateUrl: './photo-all.component.html',
  styleUrls: ['./photo-all.component.scss']
})
export class PhotoAllComponent implements OnInit {

  private _photos! : Photos;

  constructor(
    private activatedRoute : ActivatedRoute
  ) {}

  ngOnInit() : void {
    //Uma forma de fazer
    // this.photos = this.activatedRoute.snapshot.data['photosAllResolver']
    this.activatedRoute.data.subscribe(() =>
      this.photos = this.activatedRoute.snapshot.data['photosAllResolver']);
  }

  get photos() : Photos {
    return this._photos;
  }

  set photos(value : Photos) {
    this._photos = value;
  }
}
