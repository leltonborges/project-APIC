import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-icon',
  templateUrl: './icon.component.html',
  styleUrls: [ './icon.component.scss' ]
})
export class IconComponent implements OnInit {
  @Input('classIcon')
  private _icon! : string;

  private _context!: string| number ;

  constructor() { }

  ngOnInit() : void {
  }

  get icon() : string {
    return this._icon;
  }

  set icon(value : string) {
    this._icon = value;
  }

  get context() : string | number {
    return this._context;
  }
  @Input('context')
  set context(value : string| number) {
    this._context = value;
  }
}
