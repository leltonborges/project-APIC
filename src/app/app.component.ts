import { Component } from '@angular/core';
import { Photos } from "./photo/photo";
import { Observable } from "rxjs";
import { PhotoService } from "./photo/photo/photo.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.scss' ]
})
export class AppComponent {

  private _photos$! : Observable<Photos>;

  constructor(
    private photoService : PhotoService
  ) {
    this.photos$ = this.photoService.findPhotoToUser('flavio');
  }

  get photos$() : Observable<Photos> {
    return this._photos$;
  }

  set photos$(value : Observable<Photos>) {
    this._photos$ = value;
  }
}
