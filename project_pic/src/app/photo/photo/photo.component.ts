import { Component, Input, OnInit } from '@angular/core';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-photo',
  templateUrl: './photo.component.html',
  styleUrls: [ './photo.component.scss' ]
})
export class PhotoComponent implements OnInit {
  private _url !: string;
  private _description !: string;

  constructor(){
  }

  ngOnInit(): void{
  }

  get url(): string{
    return this._url;
  }

  @Input('urlImg')
  set url(value: string){
    value.startsWith('data') ?
      this._url = value :
      this._url = `${ environment.baseUrlAPI }/imgs/${ value }`;
  }

  get description(): string{
    return this._description;
  }

  @Input('descriptionImg')
  set description(value: string){
    this._description = value;
  }
}
