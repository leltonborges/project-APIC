import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Photos } from './photo';
import { environment } from '../../environments/environment';

@Injectable()
export class PhotoService {

  constructor(
    private httpClient: HttpClient
  ){
  }

  findPhotoToUser(userName: string): Observable<Photos>{
    return this.httpClient.get<Photos>(`${ environment.baseUrlAPI }/${ userName }/photos`);
  }

  findPhotoToUserWithPage(userName: string, page: number){
    const params = new HttpParams().append('page', page.valueOf());
    return this.httpClient.get<Photos>(`${ environment.baseUrlAPI }/${ userName }/photos`,
      { params });
  }

  findPhotoAll(): Observable<Photos>{
    return this.httpClient.get<Photos>(`${ environment.baseUrlAPI }/photos/all`);
  }

  upload(description: string, allowComments: boolean, file: File){
    const formData = new FormData();
    formData.append('description', description);
    formData.append('allowComments', allowComments ? 'true' : 'false');
    formData.append('imageFile', file);

    return this.httpClient.post(
      `${ environment.baseUrlAPI }/photos/upload`,
      formData,
      {
        observe: 'events',
        reportProgress: true
      });
  }
}
