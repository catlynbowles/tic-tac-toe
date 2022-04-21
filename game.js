class Game {
  constructor() {
    this.playerOne = new Player(1, 'sponge', 0);
    this.playerTwo = new Player(2, 'star', 0);
    this.turn = this.playerOne;
    this.win = false;
    this.draw = false;
    this.reset = false;
  }
  setGameBoard() {
    var playerOne = this.playerOne;
    var playerTwo = this.playerTwo;
    // will this be more convenient on page load?
  }
}
