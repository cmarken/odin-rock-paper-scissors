// randomly return 'Rock', 'Paper', 'Scissors'
function getComputerSelection() {
    // Set up dictionary for the type of choices
    const selections = {
        1: "rock",
        2: "paper",
        3: "scissors"
    };

    // Randomise between 1 and 3
    const randomNumber = Math.floor(Math.random() * 3) + 1;

    // Translate number to choice and return it
    return selections[randomNumber];
}

// play a round and compare choices from player and computer, return a string
// that declares a winner. Player selection needs to be case insenitive.
// Replay round if tie.
function playRound(playerSelection, computerSelection) {

    // Make it case insensetive
    playerSelection = playerSelection.toLocaleLowerCase();

    // Compare choices
    if (playerSelection === computerSelection) {
        return 'It is a draw!';
    } else if (playerSelection === 'rock' && computerSelection === 'paper') {
        return 'Computer wins!';
    } else if (playerSelection === 'rock' && computerSelection === 'scissors') {
        return 'Player wins!';
    } else if (playerSelection === 'paper' && computerSelection === 'rock') {
        return 'Player wins!';
    } else if (playerSelection === 'paper' && computerSelection === 'scissors') {
        return 'Computer wins!';
    } else if (playerSelection === 'scissors' && computerSelection === 'rock') {
        return 'Computer wins!';
    } else if (playerSelection === 'scissors' && computerSelection === 'paper') {
        return 'Player wins';
    } else {
        return 'Something went wrong. I don\'t know who won!?';
    }
}

/*
const playerSelection = "scissors";
const computerSelection = getComputerSelection();
console.log('Player: ' + playerSelection + ' | Computer: ' + computerSelection + '\n');
console.log(playRound(playerSelection, computerSelection));
*/

// Used to contain playRound. Should make us play 5 games in a row. Keep score of
// winner.
// Display each round's winner.
// Display the winner after all games.
function game() {
    // Set up array to keep track of winner

    // Loop until we have played 5 games
        // Ask player for the selection and store it in playerSelection
        // get the computerSelection and store it
        // Display the winner of the round

    // Count the number of player wins and print it
    // Count the number of computer wins and print it
    // Display the total winner
}