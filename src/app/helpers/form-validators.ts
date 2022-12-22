import {AbstractControl, AsyncValidatorFn} from '@angular/forms';
import {AuthService} from "../services/auth.service";
import {map} from "rxjs";

// custom validator to check that two fields match
export function MustMatch(controlName: string, matchingControlName: string) {
  return (group: AbstractControl) => {
    const control = group.get(controlName);
    const matchingControl = group.get(matchingControlName);

    if (!control || !matchingControl) {
      return null;
    }

    // return if another validator has already found an error on the matchingControl
    if (matchingControl.errors && !matchingControl.errors['mustMatch']) {
      return null;
    }

    // set error on matchingControl if validation fails
    if (control.value !== matchingControl.value) {
      matchingControl.setErrors({mustMatch: true});
    } else {
      matchingControl.setErrors(null);
    }
    return null;
  }
}

export function usernameExistsValidator(authService: AuthService): AsyncValidatorFn {
  return (control: AbstractControl) => {
    return authService.checkUsernameAlreadyExist(control.value)
      .pipe(
        map(isExist => isExist ? {userExists: true} : null)
      );
  }
}
