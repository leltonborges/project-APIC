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


  get photoForm(): FormGroup{
    return this._photoForm;
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
}
