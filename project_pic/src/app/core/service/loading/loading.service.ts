import { Injectable } from '@angular/core';
import { Observable, startWith, Subject } from 'rxjs';
import { LoadingType } from '../../enum/loading/loading-type';

@Injectable({
  providedIn: 'root'
})
export class LoadingService {

  private _loading$: Subject<LoadingType> = new Subject<LoadingType>();

  constructor(){ }

  getLoading(): Observable<LoadingType>{
    return this._loading$
               .asObservable()
               .pipe(startWith(LoadingType.STOPPED));
  }

  star(): void{
    this._loading$.next(LoadingType.LOADING);
  }

  stop(): void{
    this._loading$.next(LoadingType.STOPPED);
  }
}
