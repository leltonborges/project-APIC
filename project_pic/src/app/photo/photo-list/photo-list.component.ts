import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Photos } from '../photo';
import { PhotoService } from '../photo.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-photo-list',
  templateUrl: './photo-list.component.html',
  styleUrls: [ './photo-list.component.scss' ]
})
export class PhotoListComponent implements OnInit {

  private _userName! : string;
  private _photos$! : Observable<Photos>;

  constructor(
    private photoService : PhotoService,
    private activatedRoute : ActivatedRoute
  ) {
  }

  ngOnInit() : void {
    this.userName = this.activatedRoute.snapshot.params?.['userName'];
    this.photos$ = this.photoService.findPhotoToUser(this.userName == 'photo' ? 'aba' : this._userName);
  }

  get photos$() : Observable<Photos> {
    return this._photos$;
  }

  set photos$(value : Observable<Photos>) {
    this._photos$ = value;
  }

  get userName() : string {
    return this._userName;
  }

  set userName(value : string) {
    this._userName = value;
  }
}
