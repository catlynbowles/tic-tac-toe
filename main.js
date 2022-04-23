// Global Variables

// Variables
var game = new Game;

var playerOneBoxes = game.playerOne.playerOneBoxes
var playerTwoBoxes = game.playerTwo.playerTwoBoxes
var selectedBoxes = game.selectedBoxes;

var gameGrid = document.getElementById('gameGrid');
var gridBoxes = document.getElementsByClassName('box')
var boxOne = document.getElementById('boxOne')
var turnText = document.getElementById('turnText');
var resetButton = document.getElementById('resetButton');
var titleText = document.getElementById('titleText')

// Event Listeners
window.addEventListener('load', pageLoadGame);
gameGrid.addEventListener('click', verifyValidPlay);
resetButton.addEventListener('click', resetDraw)


// Functions
function pageLoadGame() {
  game.setFirstPlayer();
  updateToken();
}

function resetDraw() {
  playerOneBoxes.length = 0;
  playerTwoBoxes.length = 0;
  selectedBoxes.length = 0;
  titleText.innerText = `Bikini Bottom Tic-Tac-Toe`
  clearBoxes();
  pageLoadGame();
}

function clearBoxes() {
  for (var i = 0; i < gridBoxes.length; i++) {
    gridBoxes[i].innerHTML = '';
  }
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
  }
    game.changeTurn();
    updateToken();
    checkDraw();
    checkWin();
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

function checkDraw() {
  if (selectedBoxes.length === 9) {
    titleText.innerText = `IT'S A DRAW!`
    turnText.innerText = `Press reset to start a new game. I'M READY!`
  }
}

function checkWin() {
  for (var i = 0; i < game.winningNumbers.length; i++) {
    if (playerOneBoxes.includes(game.winningNumbers[i])) {
      console.log('bob')
      }
    }
  }
