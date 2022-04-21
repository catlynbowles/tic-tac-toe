// Global Variables
var playerOneGuesses = [];
var playerTwoGuesses = [];
var selectedBoxes = [];

var game = new Game;

// Query Selectors
var gameGrid = document.getElementById('gameGrid')

// Event Listeners
window.addEventListener('load', game.setGameBoard())
gameGrid.addEventListener('click', verifyValidPlay)

function verifyValidPlay() {

  if (selectedBoxes.includes(event.target)) {
    alertBoxSelected();
  }

    else {
    event.target.innerHTML += game.currentPlayer.token;

    selectedBoxes.push(event.target);

    if (game.currentPlayer.token === '&#129533;') {
      playerOneGuesses.push(event.target);
    }
      else if (game.currentPlayer.token === '&#128025;') {
      playerTwoGuesses.push(event.target);
    }

  }

    game.changeTurn();
}

function alertBoxSelected() {
  alert('This play has already been made! Please select available option.');
  !game.changeTurn();
}
