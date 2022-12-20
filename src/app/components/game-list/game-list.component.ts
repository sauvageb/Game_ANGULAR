import {Component, OnDestroy, OnInit} from '@angular/core';
import {Game} from "../../models/game";
import {GameService} from "../../services/game.service";
import {Observable, Subscription} from "rxjs";

@Component({
  selector: 'app-game-list',
  templateUrl: './game-list.component.html',
  styleUrls: ['./game-list.component.css']
})
export class GameListComponent implements OnInit, OnDestroy {

  private subscription!: Subscription;

  games!: Game[];

  games$!: Observable<Game[]>;

  constructor(private gameService: GameService) {
  }

  ngOnInit(): void {

    this.games$ = this.gameService.fetchAll();


    this.subscription = this.gameService.fetchAll()
      .subscribe({
        next: (data) => {
          this.games = data;
        },
        error: (err) => {
          console.log(err)
        }
      });

  }

  ngOnDestroy(): void {

    if(this.subscription != null){
      this.subscription.unsubscribe();
    }

  }




}
