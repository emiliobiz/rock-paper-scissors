// Create a random choice for the computer between rock paper and scissors
// Prompt the user to make a choice between rock paper and scissors 
// Compare 1 and 2 with if logic 
// Output the result 
// Prompt to start again - back to step 1

const gameOptions = ['rock', 'paper', 'scissors'];

function getComputerChoice(){
    let randomIndex = Math.floor(Math.random() * gameOptions.length);
    let computerChoice = gameOptions[randomIndex];
    return computerChoice
};

function getUserChoice (){
    let userChoice = prompt("Choose between: Rock, paper or scissors")
    return userChoice.toLowerCase()
};

function compareChoices(computerSelection, userSelection){
    if (computerSelection == userSelection){
        return 'Tie!'
    }

    else if (computerSelection == 'rock' && userSelection == 'scissors'){
        return 'You lost! Rock wins scissors!'
    }

    else if (computerSelection == 'paper' && userSelection == 'rock'){
        return 'You lost! Paper wins rock!'
    }

    else if (computerSelection == 'scissors' && userSelection == 'paper'){
        return 'You lost! Scissors wins paper!'
    }

    else {return 'You won!'}
    
};

const computerSelection = getComputerChoice();
const userSelection = getUserChoice();

console.log(compareChoices(computerSelection, userSelection))