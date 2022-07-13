import { Component } from '@angular/core';
import { UserService } from '../../../core/service/user/user.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: [ './footer.component.scss' ]
})
export class FooterComponent {
  constructor(
    private userService: UserService
  ){ }

  isLogado(): boolean{
    return this.userService.isLogged();
  }
}
