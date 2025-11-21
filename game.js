"use strict";

// 1 rock 2 paper 3 scissors

function getComputerChoice(result) {
  result = Math.floor(Math.random() * 3) + 1;
  if (result === 1) {
    result = "Rock!";
  } else if (result === 2) {
    result = "Paper!";
  } else if (result === 3) {
    result = "Scissors!";
  } else {
    console.log("Error");
  }
  console.log(result);
  return result;
}
function getHumanChoice(result) {
  result = prompt("Type Rock, Paper or Scissors");
  result = result.toLowerCase();
  if (result === "rock") {
    result = "Rock!";
  } else if (result === "paper") {
    result = "Paper!";
  } else if (result === "scissors") {
    result = "Scissors!";
  } else {
    console.log("Error wrong input");
    return null;
  }
  console.log(result);
  return result;
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
  } else if (computerChoise === "scissors" && humanChoice === "rock") {
    console.log("Human wins! Rocks beat scissors!");
    humanScore++;
  } else if (computerChoise === "scissors " && humanChoice === "paper") {
    console.log("Human wins!, Scissors beats paper");
    computerScore++;
  }
}
let humanScore = 0;
let computerScore = 0;

const computerTurn = getComputerChoice();
const humanTurn = getHumanChoice();

gameRound(computerTurn, humanTurn);
console.log(humanScore, computerScore);
