import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';

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
}
