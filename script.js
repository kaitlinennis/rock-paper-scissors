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
        return "You Lose! Paper covers Rock.";
    } else if (playerSelection.toLowerCase() === "paper" && computerSelection.toLowerCase() === "rock") {
        return "You Win! Paper covers Rock.";
    } else if (playerSelection.toLowerCase() === "scissors" && computerSelection.toLowerCase() === "rock") {
        return "You Lose! Rock beats Scissors.";
    } else if (playerSelection.toLowerCase() === "rock" && computerSelection.toLowerCase() === "scissors") {
        return "You Win! Rock beats Scissors.";
    } else if (playerSelection.toLowerCase() === "paper" && computerSelection.toLowerCase() === "scissors") {
        return "You Lose! Scissors cuts Paper.";
    } else if (playerSelection.toLowerCase() === "scissors" && computerSelection.toLowerCase() === "paper") {
        return "You Win! Scissors cuts Paper.";
    } 
}
/*
//Retrieve the user's input (rock, paper, or scissors)
const playerSelection = prompt("Please enter one of the choices: Rock, Paper, or Scissors.", "");
console.log("Your choice is: " + playerSelection.toLowerCase());

//Retrieve computer's selection
computerSelection = getComputerChoice(); 
console.log("Computer's choice is: " + computerSelection.toLowerCase());

//Testing function output
console.log(playRound(playerSelection, computerSelection));
*/



//Plays a 5-round game that keeps score and reports the final winner/loser
function game() {

    let playerScore = 0;
    let computerScore = 0;

    for(let i = 0; i < 5; i++) {
        //Retrieve the user's input (rock, paper, or scissors)
        const playerSelection = prompt("Please enter one of the choices: Rock, Paper, or Scissors.", "");
        console.log("Your choice is: " + playerSelection.toLowerCase());

        //Retrieve computer's selection
        computerSelection = getComputerChoice(); 
        console.log("Computer's choice is: " + computerSelection.toLowerCase());

        //Play a round, store result in variable
        let roundResult = playRound(playerSelection, computerSelection);

        //Keep and update scores for each player
        if(roundResult.includes("Win")) {
            playerScore++;
        } else if(roundResult.includes("Lose")) {
            computerScore++;
        }
        console.log("Round " + parseInt(i+1) + " result: " + roundResult + " You: " + playerScore + ", Computer: " + computerScore);
    }

    console.log("Your score: " + playerScore);
    console.log("Computer's score: " + computerScore);
    
    if(playerScore > computerScore) {
        return "You're the game WINNER! You earned " + playerScore + " points! Your opponent earned: " + computerScore + " points.";
    } else {
        return "You're the game LOSER :( You earned " + playerScore + " points. Your opponent earned " + computerScore + " points.";
    }
}

console.log("Final Game Results: " + game());