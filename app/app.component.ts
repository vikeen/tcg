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
    this.player1 = new Player({
      name: "George D. Tubs",
      image: "https://s-media-cache-ak0.pinimg.com/236x/a7/c7/25/a7c7259ef6050e967a93aa799d2d685d.jpg"
    });
    this.player2 = new Player({
      name: "Elizabeth Jacobs",
      image: "https://s-media-cache-ak0.pinimg.com/736x/ef/9c/87/ef9c876b0495c1f2263a8b79c7a6fd56.jpg"
    });
  }
}
