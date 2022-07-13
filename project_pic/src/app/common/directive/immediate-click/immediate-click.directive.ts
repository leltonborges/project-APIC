import { Directive, ElementRef, OnInit, Renderer2 } from '@angular/core';
import { PlatformDetectorService } from '../../../core/platform/platform-detector.service';

@Directive({
  selector: '[appImmediateClick]'
})
export class ImmediateClickDirective implements OnInit {

  constructor(
    private element: ElementRef,
    private reder: Renderer2,
    private platform: PlatformDetectorService
  ){}

  ngOnInit(): void{
    this.platform.isPlatformBrowser() &&
    this.element.nativeElement.click();

  }

}
