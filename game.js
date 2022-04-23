class Game {
  constructor() {
    this.playerOne = new Player(1, '&#129533;', 0);
    this.playerTwo = new Player(2, '&#128025;', 0);
    this.currentPlayer;
    this.defaultGameboard =
    ['', '', '',
     '', '', '',
    '', '', ''];
    this.selectedBoxes = [];
    this.winningNumbers = [
      ['1','2','3'],
      ['boxFour', 'boxFive', 'boxSix'],
      ['boxSeven', 'boxEight', 'boxNine'],
      ['boxThree', 'boxFive', 'boxSeven'],
      ['boxOne', 'boxFive', 'boxNine'],
      ['boxOne', 'boxFour', 'boxSeven'],
      ['boxTwo', 'boxFive', 'boxEight'],
      ['boxThree', 'boxSix', 'boxNine']
    ]
  }
  setFirstPlayer() {
    this.currentPlayer = Math.random() < 0.5 ? this.playerOne : this.playerTwo;
  }
  changeTurn() {
    if (this.currentPlayer === this.playerOne) {
      this.currentPlayer = this.playerTwo;
    } else if (this.currentPlayer === this.playerTwo) {
      this.currentPlayer = this.playerOne;
    }
  }
}

// this.win = false;
