const getUserChoice = userInput => {
    userInput = userInput.toLowerCase();
    if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors') {
        return userInput;
    } else {
        console.log('Please say rock, paper, scissors');
    }
}

const getComputerChoice = () => {
    const randomNumber = Math.floor(Math.random() * 3);
    switch(randomNumber) {
        case 0:
            return 'rock';
        case 1:
            return 'paper';
        case 2:
            return 'scissors';
    }
}

const determineWinner = (userChoice, computerChoice) => {
    if (userChoice === computerChoice) {
        return 'Tie!';
    }





    if (userChoice === 'rock')  {
        if (computerChoice === 'paper') {
            return 'Computer wins!';
        } else {
            return 'User wins!';
        }
    }

    if (userChoice === 'paper') {
        if (computerChoice === 'rock') {
            return 'User wins!';
        } else {
            return 'Computer wins!';
        }
    }

    if (userChoice === 'scissors') {
        if (computerChoice === 'paper') {
            return 'User wins!';
        } else {
            return 'Computer wins!';
        }
    }
}

const playgame = () => {
const userChoice = getUserChoice('rock');
const computerChoice = getComputerChoice();
console.log('You threw: ' + userChoice);
console.log('Computer threw: ' + computerChoice);
console.log(determineWinner(userChoice, computerChoice));
}

playGame();