import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';
import { Signup } from '../core/interface/user/signup';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor(
    private httpClient : HttpClient
  ) { }

  checkUserNameTaken(username : string) : Observable<boolean> {
    return this.httpClient.get<boolean>(`${ environment.baseUrlAPI }/user/exists/${ username }`);
  }

  signUp(newUser : Signup) {
    return this.httpClient.post(`${ environment.baseUrlAPI }/user/signup`, newUser);
  }
}
