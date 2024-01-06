// randomly return 'Rock', 'Paper', 'Scissors'
function getComputerChoice() {
    // Set up dictionary for the type of choices
    const choices = {
        1: "rock",
        2: "paper",
        3: "scissors"
    };

    // Randomise between 1 and 3
    const randomNumber = Math.floor(Math.random() * 3) + 1;

    // Translate number to choice and return it
    return choices[randomNumber];
}

// play a round and compare choices from player and computer, return a string
// that declares a winner. Player selection needs to be case insenitive.
// Replay round if tie.
// playRound()

// Used to contain playRound. Should make us play 5 games in a row. Keep score of
// winner.
// Display each round's winner.
// Display the winner after each round.
// game()