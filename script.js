const gameOptions = ['rock', 'paper', 'scissors'];
let userScore = 0;
let computerScore = 0;

function getComputerChoice(){
    let randomIndex = Math.floor(Math.random() * gameOptions.length);
    let computerChoice = gameOptions[randomIndex];
    return computerChoice
};

function playRound(computerSelection, userSelection){
    let result = "";

    if (computerSelection == userSelection){
        result = 'Tie!'
    }

    else if (computerSelection == 'rock' && userSelection == 'scissors'){
        result = 'You lost! Rock wins scissors!'
        computerScore ++
    }

    else if (computerSelection == 'paper' && userSelection == 'rock'){
        result = 'You lost! Paper wins rock!'
        computerScore ++
    }

    else if (computerSelection == 'scissors' && userSelection == 'paper'){
        result = 'You lost! Scissors wins paper!'
        computerScore ++
    }

    else if (userSelection == 'rock' && computerSelection == 'scissors'){
        result = 'You won!'
        userScore ++
    }

    else if (userSelection == 'paper' && computerSelection == 'rock'){
        result = 'You won!'
        userScore ++
    }

    else if (userSelection == 'scissors' && computerSelection == 'paper'){
        result = 'You won!'
        userScore ++
    }
    
    return result  
};

function playGame(){

    for (i = 0; i <= 4; i++){
        
        let computerSelection = getComputerChoice();
        let userSelection = prompt("Choose between: rock, paper and scissors");
    
        console.log(playRound(computerSelection, userSelection));
        console.log(`Player: ${userScore} | Computer: ${computerScore} `);
    }
    
    userScore > computerScore ? console.log('Player won!'):
    computerScore > userScore ? console.log('Computer won!'):
    console.log('Tie!')
}

playGame()