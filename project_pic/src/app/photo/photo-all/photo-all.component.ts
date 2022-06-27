import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Photos } from '../photo';
import { PhotoService } from '../photo.service';

@Component({
  selector: 'app-photo-all',
  templateUrl: './photo-all.component.html',
  styleUrls: ['./photo-all.component.scss']
})
export class PhotoAllComponent implements OnInit {

  private _photos$! : Observable<Photos>;

  constructor(
    private photoService : PhotoService,
  ) {
  }

  ngOnInit() : void {
    this.photos$ = this.photoService.findPhotoAll();
  }

  get photos$() : Observable<Photos> {
    return this._photos$;
  }

  set photos$(value : Observable<Photos>) {
    this._photos$ = value;
  }

}
