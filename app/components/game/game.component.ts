import {Component, Input, OnInit} from '@angular/core';
import {Player} from '../player/player.component';

@Component({
  selector: 'tcg-game',
  templateUrl: "app/components/game/game.html"
})
export class Game implements OnInit{
  @Input() player1:Player;
  @Input() player2:Player;
  private currentPlayer:Player;
  private notCurrentPlayer:Player;

  constructor() {
  }

  ngOnInit() {
    this.currentPlayer = this.player1;
    this.notCurrentPlayer = this.player2;
    console.log("starting game", this.player1, this.player2);
  }

  endCurrentPlayerTurn() {
    this.currentPlayer.endTurn();
    this.notCurrentPlayer.startTurn();
  }
}
