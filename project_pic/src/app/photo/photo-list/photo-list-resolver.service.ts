import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { Photos } from './photo';
import { PhotoService } from './photo.service';

@Injectable({
  providedIn: 'root'
})
export class PhotoResolver implements Resolve<Photos> {

  constructor(
    private photoService : PhotoService
  ) {
  }

  resolve(route : ActivatedRouteSnapshot, state : RouterStateSnapshot) : Observable<Photos> {
    const userName : string = route.params?.['userName'];
    return this.photoService.findPhotoToUser(userName);
  }
}
