import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatCardModule} from "@angular/material/card";
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";
import {MatListModule} from "@angular/material/list";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {MatCheckboxModule} from "@angular/material/checkbox";
import {MatRadioModule} from "@angular/material/radio";
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';


@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule
  ],
  exports: [
    MatToolbarModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatListModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatCheckboxModule,
    MatRadioModule,
    MatSnackBarModule
  ]
})
export class SharedModule {
}
