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

// // Get references to the selection buttons
const rockBtn = document.getElementById('rock');
const paperBtn = document.getElementById('paper');
const scissorsBtn = document.getElementById('scissors');

let HumanScore = 0;
let ComputerScore = 0;

// Handle click event for the Rock button
rockBtn.addEventListener('click', function() {

    const HumanChoice = "ROCK";
    const ComputerChoice = getComputerChoice();
    const Result = PlayRound(HumanChoice,ComputerChoice);   

    if (Result == "Win"){
        HumanScore++;
        if (HumanScore === 5){
            console.log(`That's Game. Congrats! You Won! Final Score - Human ${HumanScore} vs Computer ${ComputerScore}`);
            HumanScore = 0;
            ComputerScore = 0;
        } else {
            console.log(`You ${Result}! ${HumanChoice} beats ${ComputerChoice}. Your Score ${HumanScore} Computer Score ${ComputerScore}`);
        }
  } else if (Result == "Lose") {
        ComputerScore++;
        if (ComputerScore === 5){
            console.log(`That's Game. Sorry, You Lost... Final Score - Human ${HumanScore} vs Computer ${ComputerScore}`);
            HumanScore = 0;
            ComputerScore = 0;
        } else {
            console.log(`You ${Result}... ${ComputerChoice} beats ${HumanChoice}. Your Score ${HumanScore} Computer Score ${ComputerScore}`);
        }
   
  } else {
    console.log(`Tie. Both of you chose ${HumanChoice}. Your Score ${HumanScore} Computer Score ${ComputerScore}`);
  }

});





