import {Component} from '@angular/core';
import {HeaderComponent} from "./components/header/header.component";
import {GameComponent} from "./components/game/game.component";

interface Player {
  name:string;
}

@Component({
  selector: 'tcg-app',
  directives: [HeaderComponent, GameComponent],
  templateUrl: "app/app.html"
})
export class AppComponent {
  player1: Player;
  player2: Player;
  
  constructor() {
    this.player1 = {
      name: "George D. Tubs"
    };

    this.player2 = {
      name: "Fred Bonk"
    };
  }
}
