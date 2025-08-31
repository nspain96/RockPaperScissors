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
};

let HumanScore = 0;
let ComputerScore = 0;

// Interact with the Button that contains the ID Rock
const rockBtn = document.getElementById('rock');

// Handle click event for the Rock button
rockBtn.addEventListener('click', function() {

    const HumanChoice = "ROCK";
    const ComputerChoice = getComputerChoice();
    const Result = PlayRound(HumanChoice,ComputerChoice);   

    if (Result == "Win"){
    HumanScore++;
    console.log(`You ${Result}! ${HumanChoice} beats ${ComputerChoice}`);
  } else if (Result == "Lose") {
    ComputerScore++;
    console.log(`You ${Result}... ${ComputerChoice} beats ${HumanChoice}`);
  }else {
    console.log(`Tie. Both of you chose ${HumanChoice}`);
  }
});





