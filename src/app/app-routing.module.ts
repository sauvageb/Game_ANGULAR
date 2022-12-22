import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {GameListComponent} from "./components/game-list/game-list.component";
import {GameAddComponent} from "./components/game-add/game-add.component";
import {GameDetailsComponent} from "./components/game-details/game-details.component";
import {LoginComponent} from "./components/login/login.component";
import {IsSignGuardService} from "./helpers/is-sign-guard.service";
import {RegisterComponent} from "./components/register/register.component";

const routes: Routes = [

  {path: '', redirectTo: 'games', pathMatch: 'full'},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'games', component: GameListComponent, canActivate: [IsSignGuardService]},
  {path: 'games/add', component: GameAddComponent, canActivate: [IsSignGuardService]},
  {path: 'games/details/:id', component: GameDetailsComponent, canActivate: [IsSignGuardService]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
