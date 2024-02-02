const gameOptions = ['rock', 'paper', 'scissors'];
let userScore = 0;
let computerScore = 0;
let outcome = '';
const computerSelection = getComputerChoice();
const userSelection = prompt("Choose between: rock, paper and scissors");

function getComputerChoice(){
    let randomIndex = Math.floor(Math.random() * gameOptions.length);
    let computerChoice = gameOptions[randomIndex];
    return computerChoice
};

function playRound(computerSelection, userSelection){

    if (computerSelection == userSelection){
        outcome = 'Tie!'
    }

    if (computerSelection == 'rock' && userSelection == 'scissors'){
        outcome = 'You lost! Rock wins scissors!'
    }

    if (computerSelection == 'paper' && userSelection == 'rock'){
        outcome = 'You lost! Paper wins rock!'
    }

    if (computerSelection == 'scissors' && userSelection == 'paper'){
        outcome = 'You lost! Scissors wins paper!'
    }

    if (userSelection == 'rock' && computerSelection == 'scissors'){
        outcome = 'You won!'
    }

    if (userSelection == 'paper' && computerSelection == 'rock'){
        outcome = 'You won!'
    }

    if (userSelection == 'scissors' && computerSelection == 'paper'){
        outcome = 'You won!'
    }
    
};

function playGame(){
    for (i = 0; i < 4; i++){
            console.log(playRound(computerSelection, userSelection))
            console.log(outcome)
    }
    
}

playGame()