// This is an array that stores the results from the Rounds
let TournamentResults = Array.from({ length: 5 });
console.log(TournamentResults);

function getHumanChoice(Choice){
    // User Selects Their Choice
    let HumanChoice = prompt("Please Enter Rock, Paper, or Scissors");
    return(HumanChoice.toUpperCase());


}

