import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-photo',
  templateUrl: './photo.component.html',
  styleUrls: [ './photo.component.scss' ]
})
export class PhotoComponent implements OnInit {
  private _url = '';
  private _description = 'posto de gasolina';

  constructor() {
  }

  ngOnInit() : void {
  }


  get url() : string {
    return this._url;
  }

  @Input('urlImg')
  set url(value : string) {
    this._url = value;
  }

  get description() : string {
    return this._description;
  }

  @Input('descriptionImg')
  set description(value : string) {
    this._description = value;
  }
}
