import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {
  private _hasMore: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  get hasMore() : boolean {
    return this._hasMore;
  }

  @Input('hasMore')
  set hasMore(value : boolean) {
    this._hasMore = value;
  }
}
