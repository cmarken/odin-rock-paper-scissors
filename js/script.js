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
        return 'Player wins!';
    } else {
        return 'Something went wrong. I don\'t know who won!?';
    }
}

// Used to contain playRound. Should make us play 5 games in a row. Keep score of
// winner.
// Display each round's winner.
// Display the winner after all games.
function game() {
    // Set up array to keep track of winner
    let winner = [];

    // Loop until we have played 5 games
    for (let i = 1; i <= 5; i++) {
        // Ask player for the selection and store it in playerSelection
        const playerSelection = prompt('What is your slection?');
        
        // get the computerSelection and store it
        const computerSelection = getComputerSelection();

        // evaluate who won and store it in winner array
        winner[i] = playRound(playerSelection, computerSelection);

        // Display the winner of the round
        console.log(winner[i]); 
    }

    // Count number of wins for player and computer
    const playerWins = winner.filter(w => w === 'Player wins!').length;
    const computerWins = winner.filter(w => w === 'Computer wins!').length;
    const draws = winner.filter(w => w === 'It is a draw!').length;


    // Count the number of player wins and computer wins and draws and print it
    console.log('Game Over!\nPlayer Wins: ' + playerWins + 
        '\nComputer Wins: ' + computerWins +
        '\nDraws: ' + draws);

    // Find out who the total winner is
    let totalWinner;
    if (playerWins > computerWins) {
        totalWinner = 'Player';  
    } else if (playerWins < computerWins) {
        totalWinner = 'Computer';
    } else {
        totalWinner = 'Noone';
    }

    // Display the total winner
    console.log('\nTotal winner is: ' + totalWinner);
}

game();

/* For testing playRound
const playerSelection = "scissors";
const computerSelection = getComputerSelection();
console.log('Player: ' + playerSelection + ' | Computer: ' + computerSelection + '\n');
console.log(playRound(playerSelection, computerSelection));
*/