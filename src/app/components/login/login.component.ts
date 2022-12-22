import {Component, OnInit} from '@angular/core';
import {AuthService} from "../../services/auth.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private authService: AuthService) {
  }

  ngOnInit(): void {
  }

  onSignIn() {
    const username = 'boris';
    const password = 'qwerty';
    this.authService.login(username, password).subscribe({
      next: (isConnected: boolean) => {
        console.log('CONNECTED : ' + isConnected);
      },
      error: (err) => {
        console.log(err)
      }
    });



  }
}
