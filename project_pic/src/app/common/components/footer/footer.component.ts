import { Component, OnInit } from '@angular/core';
import { UserService } from '../../../core/service/user/user.service';
import { Observable } from 'rxjs';
import { User } from '../../../core/interface/user/user';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: [ './footer.component.scss' ]
})
export class FooterComponent implements OnInit {
  private _user$!: Observable<User>;

  constructor(
    private userService: UserService
  ){ }

  ngOnInit(): void{
    this._user$ = this.userService.getUser();
  }

  get user$(): Observable<User>{
    return this._user$;
  }
}
