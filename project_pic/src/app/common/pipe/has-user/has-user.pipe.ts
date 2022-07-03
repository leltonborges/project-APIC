import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'hasUser'
})
export class HasUserPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
