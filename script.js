//Acts as the computer's play - randomly returns ‘Rock’, ‘Paper’ or ‘Scissors’
function getComputerChoice() {
    let randNum = Math.floor(Math.random() * 3); //generates a random whole number (between 0 and 2)

    console.log(randNum); //testing that the number matches with desired return value

    if(randNum === 0) {
        return "Rock";
    } else if(randNum === 1) {
        return "Paper";
    } else {
        return "Scissors";
    }
}
console.log(getComputerChoice()); //testing function output
