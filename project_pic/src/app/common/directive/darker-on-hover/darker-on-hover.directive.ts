import { Directive, ElementRef, HostListener, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appDarkerOnHover]'
})
export class DarkerOnHoverDirective {

  private _brightness = '70%';

  constructor(
    private el : ElementRef,
    private render : Renderer2
  ) { }

  @HostListener('mouseover')
  darkenOn() {
    this.render.setStyle(this.el.nativeElement, 'filter', `brightness(${ this.brightness })`);
  }

  @HostListener('mouseleave')
  darkenOff() {
    this.render.setStyle(this.el.nativeElement, 'filter', 'brightness(100%)');
  }

  get brightness() : string {
    return this._brightness;
  }

  @Input()
  set brightness(value : string) {
    this._brightness = value;
  }
}
