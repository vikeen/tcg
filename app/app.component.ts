import {Component} from '@angular/core';
import {Header} from "./components/header/header.component";
import {Game} from "./components/game/game.component";
import {Player} from "./components/player/player.component";

@Component({
  selector: 'tcg-app',
  directives: [Header, Game],
  templateUrl: "app/app.html"
})
export class AppComponent {
  player1: Player;
  player2: Player;

  constructor() {
    this.player1 = new Player("George D. Tubs");
    this.player2 = new Player("Elizabeth Jacobs");
  }
}
