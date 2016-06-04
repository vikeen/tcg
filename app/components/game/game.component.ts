import { Component, Input } from '@angular/core';

interface Player {
  name: string;
}

@Component({
  selector: 'tcg-game',
  templateUrl: "app/components/game/game.html"
})
export class GameComponent {
  @Input() player1: Player;
  @Input() player2: Player;

  constructor() {
  }
}
