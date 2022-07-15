import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Photo } from '../photo';
import { PhotoService } from '../photo.service';
import { Observable } from 'rxjs';
import { Comments } from '../../core/interface/photo/comment';

@Component({
  selector: 'app-photo-details',
  templateUrl: './photo-details.component.html',
  styleUrls: [ './photo-details.component.scss' ]
})
export class PhotoDetailsComponent implements OnInit {

  photo$!: Observable<Photo> | null;
  comments$!: Observable<Comments> | null;

  constructor(
    private photoService: PhotoService,
    private activatedRoute: ActivatedRoute
  ){ }

  ngOnInit(): void{
    const idPhoto = this.activatedRoute.snapshot.params['idPhoto'];
    this.photo$ = this.photoService.findPhotoById(idPhoto);
    this.comments$ = this.photoService.findCommentsByIdPhoto(idPhoto);
  }

}
