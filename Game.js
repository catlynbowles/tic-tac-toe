class Game {
  constructor() {
    this.playerOne = new Player(1, '&#129533;', 0);
    this.playerTwo = new Player(2, '&#128025;', 0);
    this.currentPlayer;
    this.gameCount = 0;
    this.selectedBoxes = [];
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

  setPlayerTurn() {
    this.gameCount += 1;
    if (this.gameCount % 2 == 0) {
      this.currentPlayer = this.playerOne;
    } else {
      this.currentPlayer = this.playerTwo;
    };
  };

  changeTurn() {
    if (this.currentPlayer === this.playerOne) {
      this.currentPlayer = this.playerTwo;
    } else if (this.currentPlayer === this.playerTwo) {
      this.currentPlayer = this.playerOne;
    }
  };

  storeSelectedChoices() {
    selectedBoxes.push(event.target.id);
    if (this.currentPlayer.token === '&#129533;') {
      playerOneBoxes.push(event.target.id);
    } else if (this.currentPlayer.token === '&#128025;') {
      playerTwoBoxes.push(event.target.id);
    };
  };

  checkWin() {
    for (var i = 0; i < this.winningNumbers.length; i++) {
      let resultOne = this.winningNumbers[i].every(i => playerOneBoxes.includes(i));
      let resultTwo = this.winningNumbers[i].every(i => playerTwoBoxes.includes(i));
        if (resultOne === true) {
          oneWins();
      }
        if (resultTwo === true) {
          twoWins();
      };
    };
  };

  playerOneWins() {
    this.playerOne.wins += 1;
  };

  playerTwoWins() {
    this.playerTwo.wins += 1;
  };

  clearGameData() {
    this.playerOne.playerOneBoxes.length = 0;
    this.playerTwo.playerTwoBoxes.length = 0;
    this.selectedBoxes.length = 0;
  };
};
