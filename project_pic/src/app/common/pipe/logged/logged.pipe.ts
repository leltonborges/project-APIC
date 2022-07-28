import { Pipe, PipeTransform } from '@angular/core';
import { UserService } from '../../../core/service/user/user.service';

@Pipe({
  name: 'isLogged'
})
export class LoggedPipe implements PipeTransform {

  constructor(
    private userService: UserService
  ){}

  transform(value: boolean): boolean{
    return this.userService.isLogged();
  }

}
