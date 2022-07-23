import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { UserService } from '../../../core/service/user/user.service';
import { Observable } from 'rxjs';
import { User } from '../../../core/interface/user/user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: [ './header.component.scss' ]
})
export class HeaderComponent implements OnInit, OnChanges {

  private _user$! : Observable<User>;

  constructor(
    private userService : UserService,
    private router : Router
  ) {
    this._user$ = this.userService.getUser();
  }

  ngOnInit() : void {
  }

  ngOnChanges(changes : SimpleChanges) : void {
    this._user$ = this.userService.getUser();
  }

  get user$() : Observable<User> {
    return this._user$;
  }

  set user$(value : Observable<User>) {
    this._user$ = value;
  }

  logout() : void {
    this.userService.logout();
    this.router.navigate([ '' ]);
  }
}
