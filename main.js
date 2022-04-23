// Global Variables
var game = new Game;

var playerOneBoxes = game.playerOne.playerOneBoxes;
var playerTwoBoxes = game.playerTwo.playerTwoBoxes;
var selectedBoxes = game.selectedBoxes;

var gameGrid = document.getElementById('gameGrid');
var gridBoxes = document.getElementsByClassName('box');
var boxOne = document.getElementById('boxOne');
var turnText = document.getElementById('turnText');
var titleText = document.getElementById('titleText');
var playerOneWins = document.getElementById('playerOneWins');
var playerTwoWins = document.getElementById('playerTwoWins');


// Event Listeners
window.addEventListener('load', pageLoadGame);
gameGrid.addEventListener('click', verifyValidPlay);


// Functions
function pageLoadGame() {
  game.setFirstPlayer();
  updateToken();
}

function resetGameBoard() {
  playerOneBoxes.length = 0;
  playerTwoBoxes.length = 0;
  selectedBoxes.length = 0;
  // ^^ should this be in the Data Model?
  titleText.innerText = `Bikini Bottom Tic-Tac-Toe`;
  gameGrid.addEventListener('click', verifyValidPlay);
  gameGrid.style.cursor = 'pointer';
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
    !game.changeTurn()
  } else {
      checkSelectedBox();
    }
}

function checkSelectedBox() {
  event.target.innerHTML += game.currentPlayer.token;
  storeSelectedChoices();
  game.changeTurn();
  updateToken();
  checkDraw();
  if (selectedBoxes.length >= 5) {
    checkWin();
  }
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
    titleText.innerText = `IT'S A DRAW!`;
    turnText.innerText = `GET READY FOR THE NEXT GAME IN 3... 2... 1...`;
    gameGrid.removeEventListener('click', verifyValidPlay);
    gameGrid.style.cursor = 'not-allowed';
    setTimeout(resetGameBoard, 3000)
  }
}

function checkWin() {
  for (var i = 0; i < game.winningNumbers.length; i++) {
    if (playerOneBoxes.toString().includes(game.winningNumbers[i].toString())) {
      oneWins()
    } else if (playerTwoBoxes.toString().includes(game.winningNumbers[i].toString())) {
      twoWins()
      }
    }
  }

function oneWins() {
  titleText.innerText = `SPONGEBOB WINS!`;
  turnText.innerText = 'GET READY FOR THE NEXT GAME IN 3... 2... 1...'
  game.playerOneWins();
  playerOneWins.innerText = `${game.playerOne.wins} Wins`;
  gameGrid.removeEventListener('click', verifyValidPlay);
  gameGrid.style.cursor = 'not-allowed';
  setTimeout(resetGameBoard, 3000)
}

function twoWins() {
  titleText.innerText = `SQUIDWARD WINS!`;
  turnText.innerText = 'GET READY FOR THE NEXT GAME IN 3... 2... 1...';
  game.playerTwoWins();
  playerTwoWins.innerText = `${game.playerTwo.wins} Wins`
  gameGrid.removeEventListener('click', verifyValidPlay)
  gameGrid.style.cursor = 'not-allowed';
  setTimeout(resetGameBoard, 3000)
}
