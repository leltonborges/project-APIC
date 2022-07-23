import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appBoxHover]'
})
export class BoxHoverDirective {

  constructor(
    private element: ElementRef,
    private render2: Renderer2
  ){ }

  @HostListener('mouseover')
  boxHoverOn(){
    // this.render2.setStyle(this.element.nativeElement, 'box-shadow', 'rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px')
    this.render2.setStyle(this.element.nativeElement,
      'box-shadow', 'rgba(50, 50, 93, 0.25) 0px 30px 60px -12px inset, rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset');
    // 'box-shadow', 'rgba(0, 0, 0, 0.35) 0px 3px 8px');
    this.render2.setStyle(this.element.nativeElement, 'transition-timing-function', 'ease-in-out');
  }

  @HostListener('mouseleave')
  boxHoverOff(){
    this.render2.setStyle(this.element.nativeElement, 'box-shadow', '');
  }

}
