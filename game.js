class Game {
  constructor() {
    this.playerOne = new Player(1, '&#129533;', 0);
    this.playerTwo = new Player(2, '&#128025;', 0);
    this.currentPlayer;
    this.selectedBoxes = [];
    this.isAWin = false;
    this.winningNumbers = [
      ['1','2','3'],
      // ['1','3','2'],
      // ['2','1','3'],
      // ['2','3','1'],
      // ['3','1','2'],
      // ['3','2','1'],

      ['4','5','6'],
      // ['4','6','5'],
      // ['5','4','6'],
      // ['5','6','4'],
      // ['6','5','4'],
      // ['6','4','5'],

      ['7','8','9'],
      // ['7','9','8'],
      // ['8','9','7'],
      // ['8','7','9'],
      // ['9','8','7'],
      // ['9','7','8'],

      ['3','5','7'],
      // ['3','7','5'],
      // ['5','7','3'],
      // ['5','3','7'],
      // ['7','3','5'],
      // ['7','5','3'],

      ['1','5','9'],
      // ['1','9','5'],
      // ['5','9','1'],
      // ['5','1','9'],
      // ['9','5','1'],
      // ['9','1','5'],

      ['1','4','7'],
      // ['1','7','4'],
      // ['4','7','1'],
      // ['4','1','7'],
      // ['7','4','1'],
      // ['7','1','4'],

      ['2','5','8'],
      // ['2','8','5'],
      // ['5','2','8'],
      // ['5','8','2'],
      // ['8','5','2'],
      // ['8','2','5'],

      ['3','6','9'],
      // ['3','9','6'],
      // ['6','3','9'],
      // ['6','9','3'],
      // ['9','6','3'],
      // ['9','3','6']
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

  // checkWin() {
  //   for (var i = 0; i < game.winningNumbers.length; i++) {
  //     let resultOne = playerOneBoxes.every(i => game.winningNumbers[i].includes(i))
  //     let resultTwo = game.winningNumbers[i].every(i => playerTwoBoxes.includes(i))
  //       if (resultOne === true) {
  //         oneWins();
  //     }
  //       if (resultTwo === true) {
  //         twoWins();
  //     }
  //   }
  // }

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
