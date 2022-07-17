import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AbstractControl, FormBuilder, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
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
    private formInputValidator: FormInputValidator
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
    this.photo$ = this.photoService.findPhotoById(this.idPhoto);
    this.comments$ = this.getFindCommentsByIdPhoto();
  }

  private getFindCommentsByIdPhoto(){
    return this.photoService.findCommentsByIdPhoto(this.idPhoto);
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

    this.photoService.addCommentsByIdPhoto(this.idPhoto, commentText)
      .subscribe({
        next: () => {
          this.comments$ = this.getFindCommentsByIdPhoto();
          this.formComment.setValue({ commentText: '' });
          this.modal.message = 'Comment successfully added';
          this.modal.open();
        },
        error: () => {
          this.modal.message = 'Error adding comment';
          this.formComment.setValue({ commentText: '' });
          this.modal.open();
        }
      });
  }
}
