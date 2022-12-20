import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {GameListComponent} from "./components/game-list/game-list.component";
import {GameAddComponent} from "./components/game-add/game-add.component";
import {GameDetailsComponent} from "./components/game-details/game-details.component";

const routes: Routes = [

  {path: '', redirectTo: 'games', pathMatch: 'full'},
  {path: 'games', component: GameListComponent},
  {path: 'games/add', component: GameAddComponent},
  {path: 'games/details/:id', component: GameDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
