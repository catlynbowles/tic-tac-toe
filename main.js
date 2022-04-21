var playerOneGuesses = [];
var playerTwoGuesses = [];

var selectedBoxes = [];

var game = new Game;

var gameGrid = document.getElementById('gameGrid')

window.addEventListener('load', game.setGameBoard())
gameGrid.addEventListener('click', playerClaimBox)

function playerClaimBox() {
  event.target.innerHTML += game.currentPlayer.token;
  game.changeTurn();
  console.log(game.currentPlayer)
}
