import { Directive, ElementRef, OnInit, Renderer2 } from '@angular/core';
import { UserService } from '../../../core/service/user/user.service';

@Directive({
  selector: '[appShowLogged]'
})
export class ShowLoggedDirective implements OnInit {

  constructor(
    private element: ElementRef,
    private render2: Renderer2,
    private userService: UserService
  ){ }

  ngOnInit(): void{
    !this.userService.isLogged() &&
    this.render2.setStyle(this.element.nativeElement, 'display', 'none');
  }

}
