import { Injectable } from '@angular/core';
import { TokenService } from '../token/token.service';
import { Token } from '../../interface/auth-token/token';
import { BehaviorSubject, Observable } from 'rxjs';
import { User } from '../../interface/user/user';
import jwtDecode from 'jwt-decode';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private userSubject = new BehaviorSubject<User>({ email: '', name: '' });
  private username! : string;

  constructor(
    private tokenService : TokenService
  ) {
    this.tokenService.getToken() && this.decodificaJWT();
  }

  private decodificaJWT() {
    const token = this.tokenService.getToken();
    if(token) {
      const auth = JSON.parse(token) as Token;
      const user = jwtDecode(auth.token) as User;
      this.username = user.name;
      this.userSubject.next(user);
    }
  }

  setToken(token : Token) : void {
    this.tokenService.saveToken(token);
    this.decodificaJWT();
  }

  getUser() : Observable<User> {
    return this.userSubject.asObservable();
  }

  logout() : void {
    this.tokenService.deleteToken();
    this.userSubject.next({ email: '', name: '' });
  }

  isLogged() : boolean {
    return this.tokenService.hasToken();
  }

  getUserName() : string {
    return this.username;
  }
}
