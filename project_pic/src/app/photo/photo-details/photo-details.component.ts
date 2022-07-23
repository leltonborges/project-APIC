import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AbstractControl, FormBuilder, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { catchError, delay, finalize, Observable, tap } from 'rxjs';
import { Photo } from '../photo';
import { PhotoService } from '../photo.service';
import { Comments } from '../../core/interface/photo/comment';
import { FormInputControl } from '../../core/interface/form/validator/form-input-control';
import { FormInputValidator } from '../../core/interface/form/validator/form-input-validator';
import { ModalComponent } from '../../common/components/modal/modal.component';

@Component({
  selector: 'app-photo-details',
  templateUrl: './photo-details.component.html',
  styleUrls: [ './photo-details.component.scss' ]
})
export class PhotoDetailsComponent implements OnInit, FormInputControl {

  photo$!: Observable<Photo> | null;
  comments$!: Observable<Comments> | null;
  private _formComment!: FormGroup;
  private idPhoto!: number;

  @ViewChild('modal') modal!: ModalComponent;

  constructor(
    private photoService: PhotoService,
    private activatedRoute: ActivatedRoute,
    private formBuilder: FormBuilder,
    private formInputValidator: FormInputValidator,
    private router: Router
  ){ }

  ngOnInit(): void{
    this._formComment = this.formBuilder.group({
      commentText:
        [ '',
          [
            Validators.required
          ]
        ]
    });
    this.idPhoto = this.activatedRoute.snapshot.params['idPhoto'];
    this.getFindData();
  }

  private getFindData(): void{
    this.comments$ = this.photoService.findCommentsByIdPhoto(this.idPhoto);
    this.photo$ = this.photoService.findPhotoById(this.idPhoto);
  }

  get formComment(): FormGroup{
    return this._formComment;
  }

  getInput(nameInput: string): AbstractControl | null{
    return this.formInputValidator.getInput(this.formComment, nameInput);
  }

  isError(nameInput: string, nameError: string): ValidationErrors | undefined | null{
    return this.formInputValidator.isError(this.formComment, nameInput, nameError);

  }

  isTouched(nameInput: string): boolean | undefined | null{
    return this.formInputValidator.isTouched(this.formComment, nameInput);
  }

  addComment(){
    const commentText = this.getInput('commentText')?.value;

    this.photoService
      .addCommentsByIdPhoto(this.idPhoto, commentText)
      .pipe(
        tap(() => {
          this.formComment.setValue({ commentText: '' });
          this.modal.message = 'Comment successfully added';
          this.modal.icon = 'fa fa-comments fa-5x';
          this.modal.open();
        }),
        catchError((err, caught) => {
          this.formComment.setValue({ commentText: '' });
          this.modal.message = 'Error adding comment';
          this.modal.icon = 'fa fa-comments fa-5x';
          this.modal.open();
          return err;
        }),
        delay(5000),
        finalize(() => {
          this.getFindData();
        })
      ).subscribe();
  }

  deletePhoto(photoId: number){
    this.photoService
      .deletePhotoById(photoId)
      .pipe(
        tap(() => {
          this.modal.message = 'Photo successfully deleted';
          this.modal.icon= 'fa fa-image fa-5x';
          this.modal.open();
        }),
        catchError((err, caught) => {
          this.modal.message = 'Error deleted photo';
          this.modal.icon= 'fa fa-image fa-5x';
          this.modal.open();
          return err;
        }),
        delay(5000),
        finalize(() => this.router.navigate([ '' ]))
      ).subscribe();
  }

  likePhoto(idPhoto: number){
    this.photoService.likePhotoById(idPhoto)
      .subscribe({
        next: like => {
          if(like) this.getFindData();
        },
        error: err => {
          this.modal.message = 'Error like this photo';
          this.modal.icon= 'fa fa-image fa-5x';
          this.modal.open();
        }
      });
  }

}
