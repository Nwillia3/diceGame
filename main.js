let scores, roundScore, activePlayer;
scores = [0, 0];
roundScore = 0;
activePlayer = 0;

const button = document.querySelector("#btn");
const newBtn = document.querySelector("#new");
const dices = document.querySelector("#dice");
const test = document.querySelector(".player-1");
const test1 = document.querySelector(".player-0");
const holdBtn = document.querySelector("#hold");

button.addEventListener("click", rollDice);
newBtn.addEventListener("click", newGame);

function newGame() {
  roundScore = [0, 0];
  document.getElementById("tot-0").textContent = 0;
  document.getElementById("tot-1").textContent = 0;
  document.getElementById("current-0").textContent = 0;
  document.getElementById("current-1").textContent = 0;
  button.disabled = false;

  document.querySelector("#player-0").textContent = "Player 1";
  document.querySelector("#player-1").textContent = "Player 2";
}

function rollDice() {
  let dice = Math.floor(Math.random() * 6 + 1);
  dices.src = "images/dice-" + dice + ".png";

  if (dice !== 1) {
    roundScore += dice;
    document.getElementById("current-" + activePlayer).textContent = roundScore;
  } else {
    nextPlayer();
  }
  holdBtn.disabled = false;
}

function nextPlayer() {
  activePlayer === 0 ? (activePlayer = 1) : (activePlayer = 0);
  roundScore = 0;

  document.querySelector("#current-0").textContent = 0;
  document.querySelector("#current-1").textContent = 0;
}

//Hold button
holdBtn.addEventListener("click", checkWinner);

function checkWinner() {
  // Add current score to global score
  scores[activePlayer] += roundScore;
  console.log(roundScore);

  // update ui to show score
  document.querySelector("#tot-" + activePlayer).textContent =
    scores[activePlayer];

  // check if player won the game

  if (scores[activePlayer] >= 10) {
    console.log(activePlayer);
    document.querySelector("#player-" + activePlayer).textContent = "Winner!";
    // console
    button.disabled = true;
    document.querySelector("#hold").disabled = true;
  } else {
    nextPlayer();
  }
}
