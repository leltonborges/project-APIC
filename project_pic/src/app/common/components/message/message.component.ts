import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: [ './message.component.scss' ]
})
export class MessageComponent implements OnInit {
  private _mensagem : string = '';

  constructor() { }

  ngOnInit() : void {
  }

  get mensagem() : string {
    return this._mensagem;
  }

  @Input('msg')
  set mensagem(value : string) {
    this._mensagem = value;
  }
}
