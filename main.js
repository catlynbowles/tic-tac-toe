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
  game.playerOne.wins = 0;
  game.playerTwo.wins = 0;
  game.setFirstPlayer();
  updateToken();
}

function resetDraw() {
  playerOneBoxes.length = 0;
  playerTwoBoxes.length = 0;
  selectedBoxes.length = 0;
  titleText.innerText = `Bikini Bottom Tic-Tac-Toe`
  resetButton.classList.add('hidden')
  clearBoxes();
  pageLoadGame();
}

function clearBoxes() {
  for (var i = 0; i < gridBoxes.length; i++) {
    gridBoxes[i].innerHTML = '';
  }
}

function verifyValidPlay() {
  if (selectedBoxes.includes(event.target.id)) {
    alertBoxSelected();
  } else {
      checkSelectedBox()
    }
}

function checkSelectedBox() {
  event.target.innerHTML += game.currentPlayer.token;
  storeSelectedChoices();
  game.changeTurn();
  updateToken();
  checkDraw();
  checkWin();
}

function alertBoxSelected() {
  alert(`Aye, captain! It's been done before. Make a fresh move!`);
  !game.changeTurn();
}

function storeSelectedChoices() {
  selectedBoxes.push(event.target.id);
  if (game.currentPlayer.token === '&#129533;') {
    playerOneBoxes.push(event.target.id);
  } else if (game.currentPlayer.token === '&#128025;') {
    playerTwoBoxes.push(event.target.id);
  }
}

function updateToken() {
  if (game.currentPlayer === game.playerOne) {
    turnText.innerHTML = '&#129533;\'s turn!'
  } else if (game.currentPlayer === game.playerTwo) {
    turnText.innerHTML = '&#128025;\'s turn!'
  }
}

function checkDraw() {
  if (selectedBoxes.length === 9) {
    titleText.innerText = `IT'S A DRAW!`
    turnText.innerText = `I'M READY FOR A NEW GAME!`
    resetButton.classList.remove('hidden')
  }
}

function checkWin() {
  for (var i = 0; i < game.winningNumbers.length; i++) {
    if (playerOneBoxes.toString().includes(game.winningNumbers[i].toString())) {
      console.log('Player One Wins')
      playerOneWins()
    } else if (playerTwoBoxes.toString().includes(game.winningNumbers[i].toString())) {
      console.log('Player Two Wins')
      playerTwoWins()
      }
    }
  }

function playerOneWins() {
  titleText.innerText = 'SpongeBob Wins!'
}

function playerTwoWins() {
  titleText.innerText = 'Squidward Wins!'
}
