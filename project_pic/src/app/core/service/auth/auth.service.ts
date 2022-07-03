import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { environment } from '../../../../environments/environment';
import { Observable, tap } from 'rxjs';
import { User } from '../../interface/user/user';
import { TokenService } from '../token/token.service';
import { Token } from '../../interface/auth-token/token';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private httpClient : HttpClient,
    private tokenService : TokenService
  ) { }

  authenticate(userName : string, password : string) : Observable<HttpResponse<User>> {
    return this.httpClient
      .post<User>(
        `${ environment.baseUrlAPI }/user/login`,
        { userName, password },
        { observe: 'response' })
      .pipe(
        tap(resp => {
          const authToken = resp.headers.get('x-access-token') ?? '';
          const user = resp.body as User;
          const token : Token = {
            token: authToken,
            currentTime: new Date(),
            userName: user.name,
            lastViewedMoment: new Date().getTime()
          };
          this.tokenService.saveToken(token);
        })
      );
  }
}

