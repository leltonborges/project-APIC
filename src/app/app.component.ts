import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.scss' ]
})
export class AppComponent {
  title = 'PIC Project';

  private _photos = [
    {
      url: 'https://images.unsplash.com/photo-1575729089845-6524fb9516f3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
      description: 'Yogara'
    },
    {
      url: 'https://images.unsplash.com/photo-1575729089845-6524fb9516f3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
      description: 'Yogara'
    },
    {
      url: 'https://images.unsplash.com/photo-1575729089845-6524fb9516f3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
      description: 'Yogara'
    },
    {
      url: 'https://images.unsplash.com/photo-1575729089845-6524fb9516f3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
      description: 'Yogara'
    },
    {
      url: 'https://images.unsplash.com/photo-1575729089845-6524fb9516f3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
      description: 'Yogara'
    },
    {
      url: 'https://images.unsplash.com/photo-1575729089845-6524fb9516f3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
      description: 'Yogara'
    },
    {
      url: 'https://images.unsplash.com/photo-1575729089845-6524fb9516f3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
      description: 'Yogara'
    },
    {
      url: 'https://images.unsplash.com/photo-1575729089845-6524fb9516f3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
      description: 'Yogara'
    }
  ]

  get photos() : ({ description : string, url : string })[] {
    return this._photos;
  }

  set photos(value : ({ description : string, url : string })[]) {
    this._photos = value;
  }
}
