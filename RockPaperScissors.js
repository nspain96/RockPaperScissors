// User Selects Their Choice
function getHumanChoice(Choice){
    let HumanChoice = prompt("Please Enter Rock, Paper, or Scissors");
    return(HumanChoice.toUpperCase());
}

// Function to Generate the Computers Choice
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

let humanScore = 0;
let computerScore = 0;

function PlayRound(Human,Computer){

    let HumanChoice = getHumanChoice();
    let ComputerChoice = getComputerChoice();

    if (HumanChoice == ComputerChoice){
        return("It's a Tie, Try Again!");

    } if ((HumanChoice == "ROCK") && (ComputerChoice == "SCISSORS")) {
            return ("You Win! Rock Beats Scissors!");
    
    } if ((HumanChoice == "ROCK") && (ComputerChoice == "PAPER")) {
            return ("You Lose... Paper Beats Rock.");

    } if ((HumanChoice == "PAPER") && (ComputerChoice == "ROCK")) {
            return ("You Win! Paper Beats Rock!");

    } if ((HumanChoice == "PAPER") && (ComputerChoice == "SCISSORS")) {
            return ("You Lose... Scissors Beats Paper.");

    } if ((HumanChoice == "SCISSORS") && (ComputerChoice == "PAPER")) {
            return ("You Win! Scissors Beats Paper!");

    } if ((HumanChoice == "SCISSORS") && (ComputerChoice == "ROCK")) {
            return ("You Lose... Rock Beats Scissors.");          
            
    } else {
        return ("Someone won")
    }
}

console.log(PlayRound());

