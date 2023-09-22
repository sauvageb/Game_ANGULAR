import { Component, OnInit, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatSnackBarModule, MatSnackBarRef } from '@angular/material/snack-bar';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css'],
  standalone: true,
  imports: [MatButtonModule, MatSnackBarModule],
})

export class DialogComponent implements OnInit {

  snackBarRef = inject(MatSnackBarRef);

  constructor() { }

  ngOnInit(): void {
  }

}
