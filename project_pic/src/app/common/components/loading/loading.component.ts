import { Component, OnInit } from '@angular/core';
import { LoadingService } from '../../../core/service/loading/loading.service';
import { Observable } from 'rxjs';
import { LoadingType } from '../../../core/enum/loading/loading-type';

@Component({
  selector: 'app-loading',
  templateUrl: './loading.component.html',
  styleUrls: [ './loading.component.scss' ]
})
export class LoadingComponent implements OnInit {

  private _loading$!: Observable<LoadingType>;

  constructor(
    private loadingService: LoadingService
  ){ }

  ngOnInit(): void{
    this._loading$ = this.loadingService
                         .getLoading();
  }

  get loading$(): Observable<string>{
    return this._loading$;
  }
}
