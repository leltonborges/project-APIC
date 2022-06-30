import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { debounceTime, Subject } from 'rxjs';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: [ './search.component.scss' ]
})
export class SearchComponent implements OnInit, OnDestroy {
  private _debounce$ : Subject<string> = new Subject<string>();

  @Output() onFilter = new EventEmitter<string>();
  @Input() value : string = '';

  constructor() { }

  ngOnInit() : void {
    this.debounce$
      .pipe(debounceTime(300))
      .subscribe(filter => this.onFilter.emit(filter));
  }

  ngOnDestroy() : void {
    this.debounce$.unsubscribe();
  }

  get debounce$() : Subject<string> {
    return this._debounce$;
  }
}
