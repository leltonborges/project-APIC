import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private httpClient : HttpClient
  ) { }

  authenticate(userName : string, password : string) {
    return this.httpClient.post(`${ environment.baseUrlAPI }/user/login`, { userName, password });
  }
}

