let playerWins, computerWins, draws;

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

function determineWinner (playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        return 'It is a draw!';
    } else if (playerSelection === 'rock' && computerSelection === 'paper') {
        return 'Computer wins!';
    } else if (playerSelection === 'rock' && computerSelection === 'scissors') {
        return 'Player Wins!';
    } else if (playerSelection === 'paper' && computerSelection === 'rock') {
        return 'Player Wins!';
    } else if (playerSelection === 'paper' && computerSelection === 'scissors') {
        return 'Computer Wins!';
    } else if (playerSelection === 'scissors' && computerSelection === 'rock') {
        return 'Computer Wins!';
    } else if (playerSelection === 'scissors' && computerSelection === 'paper') {
        return 'Player Wins!';
    } else {
        return 'Something went wrong. I don\'t know who won!?';
    }
}

function playRound (e) {
    const playerSelection = e.srcElement.value.toLocaleLowerCase();
    const computerSelection = getComputerSelection();

    roundWinner = determineWinner(playerSelection, computerSelection);
    if (roundWinner === 'Player Wins!') {
        playerWins++;
    } else if (roundWinner === 'Computer Wins!') {
        computerWins++;
    } else if (roundWinner === 'It is a draw!') {
        draws++;
    } else {
        alert('Could not find out winner. Return was:' +roundWinner);
    }

    document.querySelector('#your-selection').textContent = "Your Selection: " + playerSelection;
    document.querySelector('#computer-selection').textContent = "Computer Selection: " + computerSelection;
    document.querySelector('#round-winner').textContent = roundWinner;

    document.querySelector('#player-wins').textContent = "Player Wins: " + playerWins;
    document.querySelector('#computer-wins').textContent = "Computer Wins: " + computerWins;
    document.querySelector('#draws').textContent = "Draws: " + draws;
/*    document.querySelector('#rounds-played').textContent = "Rounds Played: " + toString.(playerWins + computerWins + draws);*/
}

function game() {
    playerWins = 0;
    computerWins = 0;
    draws = 0;

    /*
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
    }*/

    // Count number of wins for player and computer
/*    const playerWins = winner.filter(w => w === 'Player wins!').length;
    const computerWins = winner.filter(w => w === 'Computer wins!').length;
    const draws = winner.filter(w => w === 'It is a draw!').length;

*/
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

const selectionButtons = document.querySelectorAll('.selectionButton');
selectionButtons.forEach(btn => {
    btn.addEventListener('click', playRound);
});

game();

/* For testing playRound
const playerSelection = "scissors";
const computerSelection = getComputerSelection();
console.log('Player: ' + playerSelection + ' | Computer: ' + computerSelection + '\n');
console.log(playRound(playerSelection, computerSelection));
*/