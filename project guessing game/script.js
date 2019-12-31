let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:

const generateTarget = () => {
    return Math.floor(Math.random() * 10);
}

const computerGuess = () => {
    return Math.floor(Math.random() * 9);
}

const humanGuess = 3;

console.log('Auto: ' + generateTarget());

console.log('Computer: ' + computerGuess());

console.log('Human: ' + humanGuess);

const compareGuesses = (humanGuess, computerGuess, generateTarget) => {
    if (humanGuess === generateTarget) {
        return console.log('Match');
    } else if (Math.abs(humanGuess - generateTarget) < Math.abs(computerGuess - generateTarget)) {
        return true;
    } else {return false;}
}

console.log(compareGuesses());
