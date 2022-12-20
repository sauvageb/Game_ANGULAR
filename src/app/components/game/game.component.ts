import {Component, Input, OnInit} from '@angular/core';
import {Game} from "../../models/game";

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {

  @Input()
  game!: Game;

  constructor() { }

  ngOnInit(): void {
  }

}
