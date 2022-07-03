import { Injectable } from '@angular/core';
import { Token } from '../../interface/auth-token/token';

const KEY_TOKEN_API = 'man_access_value';

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  constructor() { }

  getToken() : string | null {
    return localStorage.getItem(KEY_TOKEN_API);
  }

  saveToken(token : Token) : void {
    localStorage.setItem(KEY_TOKEN_API, JSON.stringify(token));
  }

  deleteToken() : void {
    localStorage.removeItem(KEY_TOKEN_API);
  }

  hasToken() : boolean {
    return !!this.getToken();
  }

}
