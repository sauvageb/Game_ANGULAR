import { Injectable } from '@angular/core';
import {
  MatSnackBar,
  MatSnackBarHorizontalPosition,
  MatSnackBarModule,
  MatSnackBarVerticalPosition,
} from '@angular/material/snack-bar';
import { DialogComponent } from '../components/dialog/dialog.component';
@Injectable({
  providedIn: 'root'
})
export class DialogService {

private durationInSeconds = 3;
 private horizontalPosition: MatSnackBarHorizontalPosition = 'end';
 private verticalPosition: MatSnackBarVerticalPosition = 'top';

  constructor(private _snackBar: MatSnackBar) {}

  openSnackBar() {
    this._snackBar.openFromComponent(DialogComponent, {
      duration: this.durationInSeconds * 1000,
      horizontalPosition: this.horizontalPosition,
      verticalPosition: this.verticalPosition,
      panelClass: ['dialog-success']
    });
  
  }
}