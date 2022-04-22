// Global Variables
var playerOneBoxes = [];
var playerTwoBoxes = [];
var selectedBoxes = [];

var game = new Game;

// Query Selectors
var gameGrid = document.getElementById('gameGrid');
var turnText = document.getElementById('turnText');

// Event Listeners
window.addEventListener('load', pageLoadGame);
gameGrid.addEventListener('click', verifyValidPlay);



// Functions
function pageLoadGame() {
  game.setGameBoard();
  updateToken()
}

function verifyValidPlay() {

  if (selectedBoxes.includes(event.target)) {
    alertBoxSelected();
  }

    else {
    event.target.innerHTML += game.currentPlayer.token;

    selectedBoxes.push(event.target);

    if (game.currentPlayer.token === '&#129533;') {
      playerOneBoxes.push(event.target.id);
    }
      else if (game.currentPlayer.token === '&#128025;') {
      playerTwoBoxes.push(event.target.id);
    }
    checkWin();
  }

    game.changeTurn();
    updateToken();
}

function alertBoxSelected() {
  alert('This play has already been made! Please select available option.');
  !game.changeTurn();
}

function updateToken() {
  if (game.currentPlayer === game.playerOne) {
    turnText.innerHTML = '&#129533;\'s turn!'
  }
    else if (game.currentPlayer === game.playerTwo) {
    turnText.innerHTML = '&#128025;\'s turn!'
  }
}

function checkWin() {
  for (var i = 0; i < game.winningNumbers.length; i++) {
    if (playerOneBoxes.includes(game.winningNumbers[i])) {
      console.log('bob')
      }
    }
  }
