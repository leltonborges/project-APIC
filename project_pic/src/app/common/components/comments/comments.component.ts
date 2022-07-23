import { Component, Input, OnInit } from '@angular/core';
import { Comment } from '../../../core/interface/photo/comment';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: [ './comments.component.scss' ]
})
export class CommentsComponent implements OnInit {

  private _comment!: Comment;

  constructor(){ }

  ngOnInit(): void{
  }

  @Input('comment')
  set comment(value: Comment){
    this._comment = value;
  }

  get comment(): Comment{
    return this._comment;
  }
}
