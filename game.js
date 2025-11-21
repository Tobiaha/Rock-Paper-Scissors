"use strict";

// 1 rock 2 paper 3 scissors

function computerChoice(result) {
  result = Math.floor(Math.random() * 3) + 1;
  console.log(result);
  if (result === 1) {
    result = "Rock";
  } else if (result === 2) {
    result = "Paper";
  } else if (result === 3) {
    result = "Scissors";
  } else {
    console.log("Error");
  }
  console.log(result);
  return result;
}

const computerTurn = computerChoice();
