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

@NgModule({
  declarations: [
    AppComponent,
    GameListComponent,
    GameDetailsComponent,
    GameAddComponent,
    GameComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
