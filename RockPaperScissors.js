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

// Lets interact with the buttons!
const btn = document.querySelectorAll('button')

// Add event listener if the button is clicked

