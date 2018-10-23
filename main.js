let scores, roundScore, activePlayer;
scores = [0, 0];
roundScore = 0;
activePlayer = 0;

// const score1 = document.querySelector("#current-0");
// const score2 = document.querySelector("#current-1");
// const totScore0 = document.querySelector("#tot-0");
// const totScore1 = document.querySelector("#tot-1");
const button = document.querySelector("#btn");
const newBtn = document.querySelector("#new");
const dices = document.querySelector("#dice");

button.addEventListener("click", rollDice);
// newBtn.addEventListener("click", newGame);

// function newGame() {
//   roundScore = [0, 0];
//   document.getElementById("tot-0").textContent = roundScore[0];
//   document.getElementById("tot-1").textContent = roundScore[1];
//   document.getElementById("current-0").textContent = roundScore[0];
//   document.getElementById("current-1").textContent = roundScore[1];
// }

function rollDice() {
  let dice = Math.floor(Math.random() * 6 + 1);
  dices.src = "images/dice-" + dice + ".png";

  if (dice !== 1) {
    roundScore += dice;
    document.getElementById("current-" + activePlayer).textContent = roundScore;
  } else {
    nextPlayer();
  }
}

function nextPlayer() {
  activePlayer === 0 ? (activePlayer = 1) : (activePlayer = 0);
  roundScore = 0;

  document.querySelector("#current-0").textContent = 0;
  document.querySelector("#current-1").textContent = 0;
}

document.querySelector("#hold").addEventListener("click", () => {
  // Add current score to global score
  scores[activePlayer] += roundScore;

  // update ui to show score
  document.querySelector("#tot-" + activePlayer).textContent =
    scores[activePlayer];

  // check if player won the game

  if (scores[activePlayer] >= 10) {
    document.querySelector("#player-" + activePlayer).innerHTML = "Winner!";
  } else {
    nextPlayer();
  }
});
