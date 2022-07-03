import { Component, OnInit } from '@angular/core';
import { UserService } from '../../../core/service/user/user.service';
import { Observable } from 'rxjs';
import { User } from '../../../core/interface/user/user';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: [ './header.component.scss' ]
})
export class HeaderComponent implements OnInit {

  private _user$! : Observable<User>;

  constructor(
    private userService : UserService
  ) {
    this._user$ = this.userService.getUser();
  }

  ngOnInit() : void {
  }

  get user$() : Observable<User> {
    return this._user$;
  }

  set user$(value : Observable<User>) {
    this._user$ = value;
  }
}
