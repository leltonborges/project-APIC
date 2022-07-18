import { Directive } from '@angular/core';

@Directive({
  selector: '[appOwnerOnly]'
})
export class OwnerOnlyDirective {

  constructor() { }

}
