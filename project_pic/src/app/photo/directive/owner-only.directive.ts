import { Directive, ElementRef, Input, OnInit, Renderer2 } from '@angular/core';
import { Photo } from '../photo';
import { UserService } from '../../core/service/user/user.service';

@Directive({
  selector: '[appOwnerOnly]'
})
export class OwnerOnlyDirective implements OnInit {

  @Input('ownedPhoto')
  ownedPhoto!: Photo;

  constructor(
    private element: ElementRef,
    private render2: Renderer2,
    private userService: UserService
  ){ }

  ngOnInit(): void{
    this.userService.getUser()
      .subscribe(user => {
        if(this.ownedPhoto.userId != user.id || !user)
          this.render2.setStyle(this.element.nativeElement, 'display', 'none');
      });
  }

}
