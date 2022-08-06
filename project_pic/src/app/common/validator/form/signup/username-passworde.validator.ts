import { FormGroup, ValidationErrors } from '@angular/forms';

export function usernamePasswordeValidator(form: FormGroup): ValidationErrors | null{
  const userName = form.get('userName')?.value ?? '';
  const password = form.get('password')?.value ?? '';
  if(userName.trim() + password.trim()) {
    return userName != password ? null : { userEqualsPassword: true };
  }
  return null;
}
