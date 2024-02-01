// Create a random choice for the computer between rock paper and scissors
// Prompt the user to make a choice between rock paper and scissors 
// Compare 1 and 2 with if logic 
// Output the result 
// Prompt to start again - back to step 1

const gameOptions = ['Rock', 'Paper', 'Scissors']

function getComputerChoice(){
    let randomIndex = Math.floor(Math.random() * gameOptions.length);
    let computerChoice = gameOptions[randomIndex];
    return computerChoice
}
