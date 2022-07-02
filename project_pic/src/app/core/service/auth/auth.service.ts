import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../environments/environment';
import { User } from '../../interface/user/user';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private httpClient : HttpClient
  ) { }

  authenticate(userName : string, password : string) : Observable<User>{
    return this.httpClient.post<User>(`${ environment.baseUrlAPI }/user/login`, { userName, password });
  }
}

