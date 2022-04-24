class Game {
  constructor() {
    this.playerOne = new Player(1, '&#129533;', 0);
    this.playerTwo = new Player(2, '&#128025;', 0);
    this.currentPlayer;
    this.selectedBoxes = [];
    this.isAWin = false;
    this.winningNumbers = [
      ['1','2','3'],

      ['4','5','6'],

      ['7','8','9'],

      ['3','5','7'],

      ['1','5','9'],

      ['1','4','7'],

      ['2','5','8'],

      ['3','6','9'],
    ];
  };
  setFirstPlayer() {
    this.currentPlayer = Math.random() < 0.5 ? this.playerOne : this.playerTwo;
  };

  changeTurn() {
    if (this.currentPlayer === this.playerOne) {
      this.currentPlayer = this.playerTwo;
    } else if (this.currentPlayer === this.playerTwo) {
      this.currentPlayer = this.playerOne;
    }
  };

  playerOneWins() {
    this.playerOne.wins += 1;
  };

  playerTwoWins() {
    this.playerTwo.wins += 1;
  };

  clearGameData() {
    game.playerOne.playerOneBoxes.length = 0;
    game.playerTwo.playerTwoBoxes.length = 0;
    this.selectedBoxes.length = 0;
  };
};
