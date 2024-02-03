const GAME_OPTIONS = ['rock', 'paper', 'scissors'];
let userScore = 0;
let computerScore = 0;

function getComputerChoice(){
    let randomIndex = Math.floor(Math.random() * GAME_OPTIONS.length);
    let computerChoice = GAME_OPTIONS[randomIndex];
    return computerChoice
};

function playRound(computerSelection, userSelection){
    let result = "";

    if (computerSelection == userSelection){
        result = 'Tie!'
    }

    else if (
        (computerSelection == 'rock' && userSelection == 'scissors') ||
        (computerSelection == 'paper' && userSelection == 'rock') || 
        (computerSelection == 'scissors' && userSelection == 'paper')
        ){
            result = `You lost! ${computerSelection} beats ${userSelection}`
            computerScore ++;
        }

    else if (
        (userSelection == 'rock' && computerSelection == 'scissors') ||
        (userSelection == 'paper' && computerSelection == 'rock') || 
        (userSelection == 'scissors' && computerSelection == 'paper')
        ){
            result = `You won! ${userSelection} beats ${computerSelection}`
            userScore ++;
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