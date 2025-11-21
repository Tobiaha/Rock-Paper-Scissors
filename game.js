"use strict";

// 1 rock 2 paper 3 scissors

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
  console.log(choice);
  return choice;
}
function getHumanChoice(choice) {
  choice = prompt("Type Rock, Paper or Scissors");
  choice = choice.toLowerCase();
  if (choice === "rock") {
    choice = "rock";
  } else if (choice === "paper") {
    choice = "paper";
  } else if (choice === "scissors") {
    choice = "scissors";
  } else {
    console.log("Error wrong input");
    return null;
  }
  console.log(choice);
  return choice;
}

function gameRound(computerChoice, humanChoice) {
  if (computerChoice === humanChoice) {
    console.log("Tie!");
  } else if (computerChoice === "rock" && humanChoice === "paper") {
    console.log("Human wins! Paper Beats rock");
    humanScore++;
  } else if (computerChoice === "rock" && humanChoice === "scissors") {
    console.log("Computer wins!, Rock beats scissors!");
    computerScore++;
  } else if (computerChoice === "paper" && humanChoice === "scissors") {
    console.log("Human wins! Scissors beat paper!");
    humanScore++;
  } else if (computerChoice === "paper" && humanChoice === "rock") {
    console.log("Computer wins! Paper beats rock!");
    computerScore++;
  } else if (computerChoice === "scissors" && humanChoice === "rock") {
    console.log("Human wins! Rocks beat scissors!");
    humanScore++;
  } else if (computerChoice === "scissors" && humanChoice === "paper") {
    console.log("Human wins!, Scissors beats paper");
    computerScore++;
  }

  return {
    humanScore,
    computerScore,
  };
}

let humanScore = 0;
let computerScore = 0;

const computerTurn = getComputerChoice();
const humanTurn = getHumanChoice();

gameRound(computerTurn, humanTurn);
console.log("Computer", computerScore, "Human", humanScore);
