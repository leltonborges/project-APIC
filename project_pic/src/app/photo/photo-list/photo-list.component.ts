import { Component, OnDestroy, OnInit } from '@angular/core';
import { Photos } from '../photo';
import { ActivatedRoute } from '@angular/router';
import { debounceTime, Subject } from 'rxjs';
import { PhotoService } from '../photo.service';

@Component({
  selector: 'app-photo-list',
  templateUrl: './photo-list.component.html',
  styleUrls: [ './photo-list.component.scss' ]
})
export class PhotoListComponent implements OnInit, OnDestroy {

  private _userName! : string;
  private _photos! : Photos;
  private _filter! : string;

  private _debounce$ : Subject<string> = new Subject<string>();
  private _hasMore : boolean = false;
  private _currentPage : number = 1;

  constructor(
    private activatedRoute : ActivatedRoute,
    private photoService : PhotoService
  ) {
  }

  ngOnInit() : void {
    this.debounce$
      .pipe(debounceTime(300))
      .subscribe(value => this.filter = value);

    this.userName = this.activatedRoute.snapshot.params?.['userName'];

    this._photos = this.activatedRoute.snapshot.data['photosListResolve'];

    if(this.photos.length) this.hasMore = true;
    //Outra forma
    // this.activatedRoute
    //   .data.subscribe(() =>
    //   this.photos = this.activatedRoute.snapshot.data['photosListResolve']
    // );
  }

  loadPage() {
    this.photoService.findPhotoToUserWithPage(this.userName, ++this.currentPage)
      .subscribe(pts => {
        this.photos.push(...pts);
        if(!pts.length) this.hasMore = false;
      });
  }

  ngOnDestroy() : void {
    this.debounce$.unsubscribe();
  }

  get photos() : Photos {
    return this._photos;
  }

  set photos(value : Photos) {
    this._photos = value;
  }

  get userName() : string {
    return this._userName;
  }

  set userName(value : string) {
    this._userName = value;
  }

  get filter() : string {
    return this._filter;
  }

  set filter(value : string) {
    this._filter = value;
  }

  get debounce$() : Subject<string> {
    return this._debounce$;
  }

  get hasMore() : boolean {
    return this._hasMore;
  }

  set hasMore(value : boolean) {
    this._hasMore = value;
  }

  get currentPage() : number {
    return this._currentPage;
  }

  set currentPage(value : number) {
    this._currentPage = value;
  }
}
