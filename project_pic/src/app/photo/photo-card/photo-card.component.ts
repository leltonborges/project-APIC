import { Component, Input, OnInit } from '@angular/core';
import { Photo } from '../photo';

@Component({
  selector: 'app-photo-card',
  templateUrl: './photo-card.component.html',
  styleUrls: ['./photo-card.component.scss']
})
export class PhotoCardComponent implements OnInit {
  private _photo!: Photo;

  constructor() { }

  ngOnInit(): void {
  }

  get photo() : Photo {
    return this._photo;
  }

  @Input('photo')
  set photo(value : Photo) {
    this._photo = value;
  }
}
