export class Player {
  public currentTurn: boolean;

  constructor(public name:string, public image:string) {
    this.currentTurn = false;
  }

  public startTurn() {
    this.currentTurn = true;
  }

  public endTurn() {
    this.currentTurn = false;
  }
}
