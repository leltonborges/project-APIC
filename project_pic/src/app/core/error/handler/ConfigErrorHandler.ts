import { ErrorHandler, Injectable, Injector } from '@angular/core';
import StackTrace from 'stacktrace-js';
import { LocationStrategy, PathLocationStrategy } from '@angular/common';
import { UserService } from '../../service/user/user.service';
import { ServerLogService } from '../../service/error/server-log.service';
import { Router } from '@angular/router';


@Injectable()
export class ConfigErrorHandler implements ErrorHandler {

  constructor(
    private injector: Injector
  ){}

  handleError(error: any): void{
    const location = this.injector.get(LocationStrategy);
    const serverLogService = this.injector.get(ServerLogService);
    const userService: UserService = this.injector.get(UserService);
    const router: Router = this.injector.get(Router);

    const url = location instanceof PathLocationStrategy ? location.path() : '';
    const message = error.message ? error.message : error.toString();

    if(error.status != '404') router.navigate([ 'error', 'error' ]);
    StackTrace
      .fromError(error)
      .then(stack => {
        const stackAsString = stack
          .map(s => s.toString())
          .join('\n');
        serverLogService.sendLog({ message, url, userName: userService.getUserName(), stack: stackAsString })
                        .subscribe({
                          next: value => console.log(`Successuful ${ value }`),
                          error: error => {
                            console.error('Erro ao enviar os logs');
                            console.error(error);
                          }
                        });
      });
    throw error;
  }

}
