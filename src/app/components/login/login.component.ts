import {Component, OnInit} from '@angular/core';
import {AuthService} from "../../services/auth.service";
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DialogService } from 'src/app/shared/services/dialog.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm!: FormGroup;

  constructor(private formBuilder: FormBuilder,
    private router: Router,
    private dialogService: DialogService,
    private authService: AuthService) {
  }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      username: [
        '',
        [Validators.required],
      ],
      password: ['',
        [Validators.required, Validators.minLength(6)]
      ],
    }
  );
  }

  onSignIn() {
    this.authService.login(this.loginForm).subscribe({
      next: (isConnected: boolean) => {
        this.dialogService.openSnackBar();
        this.router.navigate(['/']);
      },
      error: (err) => {
        console.log(err)
      }
    });
  }

  onSignUp() {
    this.router.navigate(['/register']);
  }

  get f() {
    return this.loginForm.controls;
  }

}
