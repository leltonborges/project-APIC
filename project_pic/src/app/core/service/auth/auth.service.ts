import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { environment } from '../../../../environments/environment';
import { Observable, tap } from 'rxjs';
import { User } from '../../interface/user/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private httpClient : HttpClient
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
          console.log(authToken);
        })
      );
  }
}

