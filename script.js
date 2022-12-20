"use strict";

//Secret number, randomization and display
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

const displayMessage = function (message) {
  document.querySelector(".message").textContent = message;
};

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);

  //All cases of invalid guesses
  if (!guess) {
    displayMessage("No input number!");
  } else if (guess > 20 || guess < 0) {
    displayMessage("Invalid input! Input must be from 0-20!");
  }

  //Correct guess
  else if (guess === secretNumber) {
    displayMessage("Correct Guess!");

    document.querySelector(".number").textContent = secretNumber;

    document.querySelector("body").style.backgroundColor = "#60b347";

    document.querySelector(".number").style.width = "30rem";

    //Highscore implementation
    if (score > highscore) {
      highscore = score;
    }
    document.querySelector(".highscore").textContent = highscore;
  }

  //Incorrect guess
  else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? "Too High!" : "Too Low!");
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      displayMessage("Game Over!");
      document.querySelector(".score").textContent = 0;
      document.querySelector("body").style.backgroundColor = "#ff0000";
    }
  }
});

document.querySelector(".again").addEventListener("click", function () {
  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".number").style.width = "15rem";

  //Resetting score
  score = 20;
  document.querySelector(".score").textContent = score;

  //Resetting the ?
  document.querySelector(".number").textContent = "?";

  //Resetting the guessing text
  //   document.querySelector('.message').textContent = 'Start guessing...';
  displayMessage("Start guessing...");

  //New secret number
  secretNumber = Math.trunc(Math.random() * 20) + 1;

  //For emptying the input space
  document.querySelector(".guess").value = "";
});
