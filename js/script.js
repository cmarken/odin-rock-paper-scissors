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

function isGameOver() {
    if (playerWins >= 5 || computerWins >= 5) {
        document.querySelector('#game-over > h2').textContent = "Game Over!";

        if (playerWins > computerWins) {
            document.querySelector('#game-over > div').textContent = "You Win!";
        } else if (computerWins > playerWins) {
            document.querySelector('#game-over > div').textContent = "Computer Wins!";
        } else {
            alert('Error! Could not determine game winner.');
        }

        return true;
    } else {
        return false;
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

    
    if (isGameOver()) {
        newGame();
    }
}

function newGame() {
    playerWins = 0;
    computerWins = 0;
    draws = 0;

    document.querySelector('#game-over > h2').textContent = "";
    document.querySelector('#game-over > div').textContent = "";
}

const selectionButtons = document.querySelectorAll('.selectionButton');
selectionButtons.forEach(btn => {
    btn.addEventListener('click', playRound);
});

newGame();

/* For testing playRound
const playerSelection = "scissors";
const computerSelection = getComputerSelection();
console.log('Player: ' + playerSelection + ' | Computer: ' + computerSelection + '\n');
console.log(playRound(playerSelection, computerSelection));
*/