import { Injectable } from '@angular/core';
import { HttpEvent, HttpHandler, HttpHeaders, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TokenService } from '../../service/token/token.service';
import { Token } from '../../interface/auth-token/token';

@Injectable()
export class RequestInterceptor implements HttpInterceptor {

  constructor(
    private tokenService: TokenService
  ){
  }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>>{
    if(this.tokenService.hasToken()) {
      let storageToken = this.tokenService.getToken();
      if(typeof storageToken === 'string') {
        const auth = JSON.parse(storageToken) as Token;
        const headers = RequestInterceptor.addHeader(auth.token, 'x-access-token');
        request = request.clone({ headers });
      }
    }
    return next.handle(request);
  }

  private static addHeader(token: string, nameHeader: string){
    return new HttpHeaders().append(nameHeader, token);
  }
}
