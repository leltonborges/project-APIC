import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Photos } from '../photo';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { PhotoService } from '../photo.service';

@Injectable({
  providedIn: 'root'
})
export class PhotoAllResolver implements Resolve<Photos> {

  constructor(
    private photoService : PhotoService
  ) {}

  resolve(route : ActivatedRouteSnapshot, state : RouterStateSnapshot) : Observable<Photos> {
    return this.photoService.findPhotoAll();
  }

}
