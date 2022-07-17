import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Photo, Photos } from './photo';
import { environment } from '../../environments/environment';
import { Comments } from '../core/interface/photo/comment';

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

  upload(description: string, allowComments: boolean, file: File | string){
    const formData = new FormData();
    formData.append('description', description);
    formData.append('allowComments', allowComments ? 'true' : 'false');
    formData.append('imageFile', file);


    return this.httpClient.post(
      `${ environment.baseUrlAPI }/photos/upload`, formData);
  }

  findPhotoById(idPhoto: number): Observable<Photo> | null{
    return this.httpClient.get<Photo>(`${ environment.baseUrlAPI }/photos/${ idPhoto }`);
  }

  findCommentsByIdPhoto(idPhoto: number): Observable<Comments>{
    return this.httpClient.get<Comments>(`${ environment.baseUrlAPI }/photos/${ idPhoto }/comments`);
  }

  addCommentsByIdPhoto(idPhoto: number, commentText: string){
    return this.httpClient.post(
      `${ environment.baseUrlAPI }/photos/${ idPhoto }/comments`,
      { commentText });
  }
}
