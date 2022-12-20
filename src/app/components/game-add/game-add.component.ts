import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {Game} from "../../models/game";
import {GameService} from "../../services/game.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-game-add',
  templateUrl: './game-add.component.html',
  styleUrls: ['./game-add.component.css']
})
export class GameAddComponent implements OnInit {

  gameForm!: FormGroup;

  constructor(private formBuilder: FormBuilder,
              private router: Router,
              private gameService: GameService) {
  }

  ngOnInit(): void {
    this.gameForm = this.formBuilder.group(
      {
        name: [''],
        description: ['']
      });
  }

  onSubmit() {

    const newGame: Game = {
      name: this.gameForm.value.name,
      description: this.gameForm.value.description,
    };

    this.gameService.addGame(newGame).subscribe({
      next: () => this.router.navigate(['games']),
      error: (err) => console.log(err)
    });

  }

}
