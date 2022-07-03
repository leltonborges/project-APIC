import { Pipe, PipeTransform } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../../../core/interface/user/user';

@Pipe({
  name: 'hasUser'
})
export class HasUserPipe implements PipeTransform {

  transform(user : Observable<User>) : string | null {
    let name = null;
    user
      .subscribe({
        next: user => name = user.name
      });
    return name;
  }

}
