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

// Takes the Human and Computer Choices and generates a Outcome (Win, Lose, Tie)

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
