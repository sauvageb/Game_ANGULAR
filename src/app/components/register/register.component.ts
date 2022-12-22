import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {AuthService} from "../../services/auth.service";


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  submitted: boolean = false;
  registerForm!: FormGroup;

  constructor(private formBuilder: FormBuilder,
              private authService: AuthService) {
  }

  ngOnInit(): void {

    this.registerForm = this.formBuilder.group({
        username: ['', Validators.required],
        password: ['', [Validators.required, Validators.minLength(6)]],
        confirmPassword: ['', Validators.required]
      }
    );
  }

  onSignUp() {
    this.submitted = true;

    this.authService.register(this.registerForm).subscribe({
      next: () => {
        alert('register')
      },
      error: (err) => console.log(err)
    });
  }

  get f() {
    return this.registerForm.controls;
  }

}
