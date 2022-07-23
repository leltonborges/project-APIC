import { Injectable } from '@angular/core';
import { HomeService } from './home.service';
import { AbstractControl } from '@angular/forms';
import { debounceTime, first, map, switchMap, tap } from 'rxjs';

@Injectable()
export class UserNotTakenValidatorService {

  constructor(
    private homeService : HomeService
  ) { }

  isExistsUser() {
    return (control : AbstractControl) => {
      return control.valueChanges
        .pipe(
          debounceTime(300),
          switchMap(user => this.homeService.checkUserNameTaken(user)),
          map(result => result ? { isExitsUser: true } : null),
          first()
        );

    };
  }
}
