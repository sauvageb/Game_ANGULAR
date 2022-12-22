import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {GameListComponent} from './components/game-list/game-list.component';
import {GameDetailsComponent} from './components/game-details/game-details.component';
import {GameAddComponent} from './components/game-add/game-add.component';
import {HttpClientModule} from "@angular/common/http";
import {GameComponent} from './components/game/game.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import {AuthInterceptorProviders} from "./helpers/auth.interceptor";
import { NavbarComponent } from './components/navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    GameListComponent,
    GameDetailsComponent,
    GameAddComponent,
    GameComponent,
    RegisterComponent,
    LoginComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [AuthInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule {
}
