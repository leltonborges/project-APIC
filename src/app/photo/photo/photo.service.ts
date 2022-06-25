import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { map, Observable } from "rxjs";
import { Photos } from "../photo";
import { environment } from "../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class PhotoService {

  constructor(
    private httpClient : HttpClient
  ) {
  }

  findPhotoToUser(userName : string) : Observable<Photos> {
    return this.httpClient.get<Photos>(`${ environment.baseUrlAPI }/${ userName }/photos`);
  }
}
