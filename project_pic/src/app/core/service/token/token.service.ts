import { Injectable } from '@angular/core';

const KEY_TOKEN_API = 'man_access_value';

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  constructor() { }

  getToken() : string {
    return localStorage.getItem(KEY_TOKEN_API) ?? '';
  }

  saveToken(token : string) : void {
    localStorage.setItem(KEY_TOKEN_API, token);
  }

  deleteToken() : void {
    localStorage.removeItem(KEY_TOKEN_API);
  }

  isToken() : boolean {
    return !!this.getToken();
  }

}
