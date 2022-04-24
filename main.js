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
window.addEventListener('load', loadNewGame);
gameGrid.addEventListener('click', verifyValidPlay);


// Functions
function loadNewGame() {
  game.setPlayerTurn();
  updateToken();
};

function resetGameBoard() {
  game.clearGameData();
  titleText.innerText = `Bikini Bottom Tic-Tac-Toe`;
  gameGrid.addEventListener('click', verifyValidPlay);
  gameGrid.style.cursor = 'pointer';
  clearBoxes();
  loadNewGame();
};

function clearBoxes() {
  for (var i = 0; i < gridBoxes.length; i++) {
    gridBoxes[i].innerHTML = '';
  };
};

function verifyValidPlay() {
  if (selectedBoxes.includes(event.target.id)) {
    alertBoxSelected();
    !game.changeTurn();
  } else {
      checkSelectedBox();
    };
};

function checkSelectedBox() {
  event.target.innerHTML += game.currentPlayer.token;
  game.storeSelectedChoices();
  game.changeTurn();
  updateToken();
  checkDraw();
  if (selectedBoxes.length >= 5) {
   game.checkWin();
  };
};

function alertBoxSelected() {
  alert(`Aye, captain! It's been done before. Make a fresh move!`);
  !game.changeTurn();
};

function updateToken() {
  if (game.currentPlayer === game.playerOne) {
    turnText.innerHTML = '&#129533;\'s turn!';
  } else if (game.currentPlayer === game.playerTwo) {
    turnText.innerHTML = '&#128025;\'s turn!';
  };
};

function checkDraw() {
  if (selectedBoxes.length === 9) {
    titleText.innerText = `IT'S A DRAW!`;
    disableGridReset();
  };
};

function oneWins() {
  game.playerOneWins();
  titleText.innerText = `SPONGEBOB WINS!`;
  playerOneWins.innerText = `${game.playerOne.wins} Wins`;
  disableGridReset();
};

function twoWins() {
  game.playerTwoWins();
  titleText.innerText = `SQUIDWARD WINS!`;
  playerTwoWins.innerText = `${game.playerTwo.wins} Wins`;
  disableGridReset();
};

function disableGridReset() {
  turnText.innerText = 'GET READY FOR THE NEXT GAME IN 3... 2... 1...';
  gameGrid.removeEventListener('click', verifyValidPlay);
  gameGrid.style.cursor = 'not-allowed';
  setTimeout(resetGameBoard, 3000);
};
