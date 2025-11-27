"use strict";

// 1 rock 2 paper 3 scissors

const rockButton = document.getElementById("rock-button");
const paperButton = document.getElementById("paper-button");
const scissorsButton = document.getElementById("scissors-button");

const restartButton = document.getElementById("reset-button");

const roundResult = document.getElementById("round-result");
const scoreBoard = document.getElementById("scoreboard");
const finalResult = document.getElementById("final-result");

function playGame() {
  let humanScore = 0;
  let computerScore = 0;

  rockButton.addEventListener("click", () => gameRound("rock"));
  paperButton.addEventListener("click", () => gameRound("paper"));
  scissorsButton.addEventListener("click", () => gameRound("scissors"));

  restartButton.addEventListener("click", () => resetGame());

  function getComputerChoice(choice) {
    choice = Math.floor(Math.random() * 3) + 1;
    if (choice === 1) {
      choice = "rock";
    } else if (choice === 2) {
      choice = "paper";
    } else if (choice === 3) {
      choice = "scissors";
    } else {
      console.log("Error");
    }
    return choice;
  }

  function gameRound(humanChoice) {
    const computerChoice = getComputerChoice();
    if (computerChoice === humanChoice) {
      roundResult.innerText = `Round Result: Tie! Both chose ${humanChoice}`;
    } else if (computerChoice === "rock" && humanChoice === "paper") {
      humanScore++;
      roundResult.innerText = `Round Result: Human wins! Paper Beats rock`;
    } else if (computerChoice === "rock" && humanChoice === "scissors") {
      computerScore++;
      roundResult.innerText = `Round Result: Computer wins!, Rock beats scissors!`;
    } else if (computerChoice === "paper" && humanChoice === "scissors") {
      roundResult.innerText = `Round Result: Human wins! Scissors beat paper!`;
      humanScore++;
    } else if (computerChoice === "paper" && humanChoice === "rock") {
      roundResult.innerText = `Round Result: Computer wins! Paper beats rock!`;
      computerScore++;
    } else if (computerChoice === "scissors" && humanChoice === "rock") {
      roundResult.innerText = `Round Result: Human wins! Rocks beat scissors!`;
      humanScore++;
    } else if (computerChoice === "scissors" && humanChoice === "paper") {
      roundResult.innerText = `Round Result: Computer wins! Scissors beats paper!`;
      computerScore++;
    }

    scoreBoard.innerText = `Human: ${humanScore} - Computer: ${computerScore}`;
    // Game ends after five points
    if (humanScore === 5) {
      endGame();
      finalResult.innerText = "Game Result: Human wins the game!";
    } else if (computerScore === 5) {
      endGame();
      finalResult.innerText = "Game Result: Computer wins the game!";
    }
    return {
      humanScore,
      computerScore,
    };
  }
  // after game ends all buttons get disabled except reset
  function endGame() {
    rockButton.disabled = true;
    paperButton.disabled = true;
    scissorsButton.disabled = true;
  }

  function resetGame() {
    humanScore = 0;
    computerScore = 0;
    roundResult.innerText = "Rock...paper...scissors!";
    scoreBoard.innerText = `Human: ${humanScore} - Computer: ${computerScore}`;
    finalResult.innerText = "";

    rockButton.disabled = false;
    paperButton.disabled = false;
    scissorsButton.disabled = false;
  }
}

playGame();
