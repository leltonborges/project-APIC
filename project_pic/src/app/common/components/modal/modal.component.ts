import { Component, ElementRef, Input, OnInit, Renderer2, ViewChild } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: [ './modal.component.scss' ]
})
export class ModalComponent implements OnInit {
  private _message!: string;
  private _icon!: string;

  @ViewChild('activeModal')
  private activeModal!: ElementRef;
  @ViewChild('modalContainer')
  private modalContainer!: ElementRef;

  constructor(
    private render2: Renderer2
  ){ }

  ngOnInit(): void{}

  open(){
    this.render2.addClass(this.modalContainer.nativeElement, 'show-modal');
  }

  close(){
    this.render2.removeClass(this.modalContainer.nativeElement, 'show-modal');
  }

  get message(): string{
    return this._message;
  }

  @Input('msg')
  set message(value: string){
    this._message = value;
  }

  get icon(): string{
    return this._icon;
  }

  @Input('icon')
  set icon(value: string){
    this._icon = value;
  }
}
