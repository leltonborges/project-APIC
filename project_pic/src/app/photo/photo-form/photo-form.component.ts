import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { FormInputValidator } from '../../core/interface/form/validator/form-input-validator';
import { FormInputControl } from '../../core/interface/form/validator/form-input-control';
import { PhotoService } from '../photo.service';
import { NewPhoto } from '../../core/interface/photo/new-photo';
import { Router } from '@angular/router';

@Component({
  selector: 'app-photo-form',
  templateUrl: './photo-form.component.html',
  styleUrls: [ './photo-form.component.scss' ]
})
export class PhotoFormComponent implements OnInit, FormInputControl {

  private _photoForm!: FormGroup;
  private _fileImg!: File;
  private _preview !: string;

  constructor(
    private formBuilder: FormBuilder,
    private formInputValidator: FormInputValidator,
    private photoService: PhotoService,
    private router: Router
  ){ }

  ngOnInit(): void{
    this._photoForm = this.formBuilder.group({
      file: [ '',
        [
          Validators.required
        ] ],
      description: [ '',
        [
          Validators.required,
          Validators.minLength(5)
        ] ],
      allowComments: [ true ]
    });
  }

  reset(): void{
    this.preview = '';
  }

  upload(){
    let newPhoto = this._photoForm.getRawValue() as NewPhoto;
    newPhoto.file = this.fileImg;
    this.photoService.upload(newPhoto.description, newPhoto.allowComments, this.fileImg)
      .subscribe({
        next: () => this.router.navigate([ '' ]),
        error: err => console.error(err)
      });
  }

  getInput(nameInput: string): AbstractControl | null{
    return this.formInputValidator.getInput(this.photoForm, nameInput);
  }

  isError(nameInput: string, nameError: string): ValidationErrors | undefined | null{
    return this.formInputValidator.isError(this.photoForm, nameInput, nameError);

  }

  isTouched(nameInput: string): boolean | undefined | null{
    return this.formInputValidator.isTouched(this.photoForm, nameInput);
  }

  gravaArquivo(arquivo: any): void{
    const [ file ] = arquivo?.files;
    this.fileImg = file;
    const reader = new FileReader();
    reader.onload = (i: any) => this.preview = i.target.result;
    reader.readAsDataURL(file);
  }

  get photoForm(): FormGroup{
    return this._photoForm;
  }

  get fileImg(): File{
    return this._fileImg;
  }

  set fileImg(value: File){
    this._fileImg = value;
  }

  get preview(): string{
    return this._preview;
  }

  set preview(value: string){
    this._preview = value;
  }
}
