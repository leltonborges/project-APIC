import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { FormInputValidator } from '../../core/interface/form/validator/form-input-validator';
import { FormInputControl } from '../../core/interface/form/validator/form-input-control';

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
    private formInputValidator: FormInputValidator
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
      comments: [ true ]
    });
  }

  reset(): void{
    this.preview = ''
  }

  upload(){
    console.log(this._photoForm.getRawValue());
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
