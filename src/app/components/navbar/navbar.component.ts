import { Component, OnInit } from '@angular/core';
import {Observable} from "rxjs";
import {AuthService} from "../../services/auth.service";
import { DialogService } from 'src/app/shared/services/dialog.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent  {

  isLoggedIn$: Observable<boolean> = this.authService.isLoggedIn;

  constructor(private authService: AuthService) {}

  onLogout() {
    this.authService.logout();
  }

}
