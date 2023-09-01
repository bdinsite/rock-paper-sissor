// Get user input
function userInput() {
    let response;
    while(!response) {
        let test = prompt('Select your weapon - Rock, Paper or Sissors:').toLowerCase();
        if(test==='rock'||test==='paper'||test==='scissors'){
            response = test;
        }
    } return response;
}

// Generate random RPS -value
function getComputerChoice() {
    let randomNumber = Math.floor((Math.random()/3)*10)+1;
    let computerInput;
    if(randomNumber === 1) {
        computerInput = 'rock';
    } else if(randomNumber === 2) {
        computerInput = 'paper';
    } else {
        computerInput = 'scissors'
    };
    return computerInput;
}

// Store values and run single test round
const playerSelection = userInput();
const computerSelection = getComputerChoice();

console.log(playerSelection);
console.log(computerSelection);

function playRound(player, computer) {
    if(player===computer){
        console.log("It's a tie!")
    } else if(player==='rock' && computer==='paper'){
        console.log("Computer wins!")
    }  else if(player==='paper' && computer==='scissors'){
        console.log("Computer wins!")
    }  else if(player==='scissors' && computer==='rock'){
        console.log("Computer wins!")
    } else if(computer==='rock' && player==='paper'){
        console.log("Player wins!")
    }  else if(computer==='paper' && player==='scissors'){
        console.log("Player wins!")
    }  else {
        console.log("Player wins!")
    }
}

console.log(playRound(playerSelection, computerSelection));