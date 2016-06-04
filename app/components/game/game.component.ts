import {Component, Input} from '@angular/core';
import {Player} from '../player/player.component';

@Component({
  selector: 'tcg-game',
  templateUrl: "app/components/game/game.html"
})
export class Game {
  @Input() player1:Player;
  @Input() player2:Player;

  constructor() {
  }
}
