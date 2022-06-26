import { Component, OnInit } from '@angular/core';
import { Observable } from "rxjs";
import { Photos } from "../photo";
import { PhotoService } from "../photo/photo.service";

@Component({
  selector: 'app-photo-list',
  templateUrl: './photo-list.component.html',
  styleUrls: ['./photo-list.component.scss']
})
export class PhotoListComponent implements OnInit {

  private _photos$! : Observable<Photos>;

  constructor(
    private photoService : PhotoService
  ) {
  }

  ngOnInit() : void {
    this.photos$ = this.photoService.findPhotoToUser('flavio');
  }

  get photos$() : Observable<Photos> {
    return this._photos$;
  }

  set photos$(value : Observable<Photos>) {
    this._photos$ = value;
  }
}
