import { Component, OnInit } from '@angular/core';
import { Photos } from '../photo';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-photo-list',
  templateUrl: './photo-list.component.html',
  styleUrls: [ './photo-list.component.scss' ]
})
export class PhotoListComponent implements OnInit {

  private _userName! : string;
  private _photos! : Photos;
  private _filter! : string;

  constructor(
    private activatedRoute : ActivatedRoute
  ) {
  }

  ngOnInit() : void {
    this._photos = this.activatedRoute.snapshot.data['photosListResolve'];

    //Outra forma
    // this.activatedRoute
    //   .data.subscribe(() =>
    //   this.photos = this.activatedRoute.snapshot.data['photosListResolve']
    // );
  }

  get photos() : Photos {
    return this._photos;
  }

  set photos(value : Photos) {
    this._photos = value;
  }

  get userName() : string {
    return this._userName;
  }

  set userName(value : string) {
    this._userName = value;
  }

  get filter() : string {
    return this._filter;
  }

  set filter(value : string) {
    this._filter = value;
  }
}
