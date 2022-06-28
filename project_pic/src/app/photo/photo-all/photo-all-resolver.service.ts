import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Photos } from '../photo';
import { Observable, of } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PhotoAllResolver implements Resolve<Photos> {
  resolve(route : ActivatedRouteSnapshot, state : RouterStateSnapshot) : Observable<Photos> {
      return;
  }

}
