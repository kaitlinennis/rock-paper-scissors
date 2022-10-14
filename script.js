//Acts as the computer's play - randomly returns ‘Rock’, ‘Paper’ or ‘Scissors’
function getComputerChoice() {
    let randNum = Math.floor(Math.random() * 3); //generates a random whole number (between 0 and 2)

    //console.log(randNum); //testing that the number matches with desired return value

    if(randNum === 0) {
        return "Rock";
    } else if (randNum === 1) {
        return "Paper";
    } else {
        return "Scissors";
    }
}
//console.log(getComputerChoice()); //testing function output


//Plays a single round of Rock Paper Scissors
function playRound(playerSelection, computerSelection) {

    //Possible combinations:
        //Tied
        //Rock and Paper (and vice-versa)
        //Rock and Scissors (and vice-versa)
        //Paper and Scissors (and vice-versa)

    //Make both selections case insensitive for all comparisons (by converting both to lowercase strings)
    if(playerSelection.toLowerCase() === computerSelection.toLowerCase()) {
        return "You tied!";
    } else if (playerSelection.toLowerCase() === "rock" && computerSelection.toLowerCase() === "paper") {
        return "You Lose! Paper beats Rock.";
    } else if (playerSelection.toLowerCase() === "paper" && computerSelection.toLowerCase() === "rock") {
        return "You Win! Paper beats Rock.";
    } else if (playerSelection.toLowerCase() === "scissors" && computerSelection.toLowerCase() === "rock") {
        return "You Lose! Rock beats Scissors.";
    } else if (playerSelection.toLowerCase() === "rock" && computerSelection.toLowerCase() === "scissors") {
        return "You Win! Rock beats Scissors.";
    } else if (playerSelection.toLowerCase() === "scissors" && computerSelection.toLowerCase() === "paper") {
        return "You Lose! Paper beats Scissors.";
    } else if (playerSelection.toLowerCase() === "paper" && computerSelection.toLowerCase() === "scissors") {
        return "You Win! Paper beats Scissors.";
    } 
}

//Retrieve the user's input (rock, paper, or scissors)
const playerSelection = prompt("Please enter one of the choices: Rock, Paper, or Scissors.", "");
console.log("Your choice is: " + playerSelection.toLowerCase());

//Retrieve computer's selection
computerSelection = getComputerChoice(); 
console.log("Computer's choice is: " + computerSelection.toLowerCase());

//Testing function output
console.log(playRound(playerSelection, computerSelection));