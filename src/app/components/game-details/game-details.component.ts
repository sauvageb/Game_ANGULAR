import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {Game} from "../../models/game";
import {GameService} from "../../services/game.service";
import {map, mergeMap} from "rxjs";

@Component({
  selector: 'app-game-details',
  templateUrl: './game-details.component.html',
  styleUrls: ['./game-details.component.css']
})
export class GameDetailsComponent implements OnInit {

  game!: Game;

  constructor(private activatedRoute: ActivatedRoute,
              private gameService: GameService) {
  }

  ngOnInit(): void {
    this.activatedRoute.params
      .pipe(
        map(params => params['id']),
        mergeMap(id => this.gameService.fetchGameById(id))
      ).subscribe({
      next: (game) => {
        this.game = game;
      },
      error: (err) => console.log(err)
    });

    // this.activatedRoute.params.subscribe(params => {
    //
    //   this.gameService.fetchGameById(params['id']).subscribe({
    //     next:(game)=> {
    //       this.game = game;
    //     },
    //     error: (err)=> console.log(err)
    //   });
    //
    // });
  }

}
