const getUserChoice = userInput => {
    userInput = userInput.toLowerCase();
    if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors') { 
      return userInput;
    } else {
      console.log('Get it right!');
  }
  }
  const getComputerChoice = () => {
  const userNumber = Math.floor(Math.random() * 3);
  switch(userNumber) {
    case 0:
      return 'rock';
    case 1:
      return 'paper';
    case 2:
      return 'scissors';
    }
  };
  
  console.log(getComputerChoice());
  
  const determineWinner = (userChoice,computerChoice) => {
    if(userChoice === computerChoice) {
     return 'Tie';
    } else if (userChoice === 'rock') {
        if (computerChoice === 'paper') {
          return 'Computer won because paper beats rock';
        } else {return 'User won because rock beats scissors';}
        }
      else if (userChoice === 'paper') {
        if (computerChoice === 'rock') {
          return 'User won because paper beats rock';
        } else {return 'Computer won because scissors beats paper';}
        }
      else if (userChoice === 'scissors') {
        if (computerChoice === 'paper') {
          return 'User won as scissors beats paper';
         } else {return 'Computer won because scissors beats paper';}
        }
    }
     
    
  
  
  
  