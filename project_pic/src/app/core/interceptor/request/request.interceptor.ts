import { Injectable } from '@angular/core';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
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
      const token = this.tokenService.getToken() as unknown as Token;

      request = request.clone({
        setHeaders: { 'x-access-token': token?.token }
      });
    }
    return next.handle(request);
  }
}
