import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {AuthService} from "../../services/auth.service";
import {MustMatch, usernameExistsValidator} from "../../helpers/form-validators";
import {map, Observable} from "rxjs";
import { DialogService } from 'src/app/shared/services/dialog.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerForm!: FormGroup;
  roleForm!: FormGroup;

  showadvancedModeCtrl$!: Observable<boolean>;

  advancedModeCtrl!: FormControl;

  constructor(private formBuilder: FormBuilder,
    private dialogService: DialogService,         
    private authService: AuthService) {
  }

  ngOnInit(): void {
    // SIMPLE REGISTER FORM
    this.registerForm = this.formBuilder.group({
        username: [
          '',
          [Validators.required],
          [usernameExistsValidator(this.authService)]
        ],
        password: ['',
          [Validators.required, Validators.minLength(6)]
        ],
        confirmPassword: ['', Validators.required]
      },
      {
        validators: [MustMatch('password', 'confirmPassword')],
      }
    );

    // https://fireship.io/lessons/rxjs-basic-pro-tips/
    // https://openclassrooms.com/fr/courses/7471281-perfectionnez-vous-sur-angular/7718036-reagissez-aux-changements
    this.advancedModeCtrl = new FormControl('simpleMode');
    this.showadvancedModeCtrl$ = this.advancedModeCtrl.valueChanges.pipe(
      map((preference: any) => preference === 'advancedMode'));

    this.roleForm = this.formBuilder.group({
      user: [{value: 'true', disabled: true}],
      admin: [{value: 'true'}]
    });

  }

  onSignUp() {
      this.authService.register(this.registerForm).subscribe({
      next: () => {
        this.dialogService.openSnackBar();
      },
      error: (err) => console.log(err)
    });
  }

  get f() {
    return this.registerForm.controls;
  }

}
