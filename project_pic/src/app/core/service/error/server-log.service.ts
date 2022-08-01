import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ServerLog } from '../../interface/error/server-log';
import { environment } from '../../../../environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServerLogService {

  constructor(
    private httpClient: HttpClient
  ){ }

  sendLog(serverLog: ServerLog): Observable<boolean>{
    return this.httpClient.post<boolean>(`${ environment.baseUrlLog }/infra/log`, serverLog);
  }
}
