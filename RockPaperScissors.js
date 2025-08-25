// Function Purpose - to generate a Human Choice for Rock Paper Scissors
function getHumanChoice(Choice){
    let HumanChoice = prompt("Please Enter Rock, Paper, or Scissors");
    return(HumanChoice.toUpperCase());
}

// Function Purpose - to generate a Computer Choice for Rock Paper Scissors
function getComputerChoice(ComputerChoice){
    let RandNum = Math.random();
    if (RandNum <= .333333){
        return "ROCK";
    } if (RandNum <= .6666666) {
        return "PAPER";
    } else {
        return "SCISSORS"; 
    }
    }

// Function Purpose - Takes The Human Choice and Computer Choice and generates a result (Win, Lose, Tie)

function PlayRound(HumanChoice,ComputerChoice){

    if (HumanChoice == ComputerChoice){
        return "Tie" ;

    } else if (
        (HumanChoice == "ROCK") && (ComputerChoice == "SCISSORS") ||
        (HumanChoice == "PAPER") && (ComputerChoice == "ROCK") ||
        (HumanChoice == "SCISSORS") && (ComputerChoice == "PAPER")) {
        return "Win";
    
    } else {
        return "Lose";
    }
}

// ForLoop to find the winner 

let HumanScore = 0;
let ComputerScore = 0;

for (let Round = 1; Round < 6; Round++) {
  // Run Functions to get variables
  let HumanChoice = getHumanChoice();
  let ComputerChoice = getComputerChoice();
  let Result = PlayRound(HumanChoice,ComputerChoice);

  if (Result == "Win"){
    HumanScore++;
    console.log(`You ${Result} Round ${Round}! ${HumanChoice} beats ${ComputerChoice}`);
  } else if (Result == "Lose") {
    ComputerScore++;
    console.log(`You ${Result} Round ${Round}... ${ComputerChoice} beats ${HumanChoice}`);
  }

  else {
    console.log(`Round ${Round} is a Tie. Both of you chose ${HumanChoice}`);
  }
}

// Logs the final score of the 5 Rounds
console.log(`Final Score: Human ${HumanScore}  Computer: ${ComputerScore}`)