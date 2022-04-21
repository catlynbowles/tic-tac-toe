class Game {
  constructor() {
    this.playerOne = new Player(1, '&#129533;', 0);
    this.playerTwo = new Player(2, '&#128025;', 0);
    this.currentPlayer;
    this.defaultGameboard =
    ['', '', '',
     '', '', '',
    '', '', ''];
    this.winningNumbers = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [2, 4, 6],
      [0, 4, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8]
    ]
  }
  setGameBoard() {
    this.currentPlayer = Math.random() < 0.5 ? this.playerOne : this.playerTwo;
  }
  changeTurn() {
    if (this.currentPlayer === this.playerOne) {
      this.currentPlayer = this.playerTwo;
    } else if (this.currentPlayer === this.playerTwo) {
      this.currentPlayer = this.playerOne;
    }
  }

  // needed methods:
  // player turn changes
  // reset game board
  // add event listener to parent element (DOM element?)
  // player needs to be able to select squares... will update on DOM later but the ability to change
  // the squares needs to happen here
  // the game board properties- starting game board is empty // what are the winning combonations> does this
  // need to be an array?
  // what you know about the game board: the parent is 'gameGrid', the children are the boxes. the event listener will
  // be on the game-grid. will the click be captured by event.id.target.closest? and what property will change if it's a
  // match? do the boxes start out as empty strings then they're filled with the icon
}

// this.win = false;
// this.draw = false;
// this.reset = false;
// do these properties belong here, to be updated, or is this unnecessary
