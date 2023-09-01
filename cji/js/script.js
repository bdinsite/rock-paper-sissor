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
/* const playerSelection = userInput();
const computerSelection = getComputerChoice();

console.log(playerSelection);
console.log(computerSelection); */

function playRound(player, computer) {
    if(player===computer){
        return "It's a tie!";
    } else if(player==='rock' && computer==='paper'){
        return "Computer wins!";
    }  else if(player==='paper' && computer==='scissors'){
        return "Computer wins!";
    }  else if(player==='scissors' && computer==='rock'){
        return "Computer wins!";
    } else if(computer==='rock' && player==='paper'){
        return "Player wins!";
    }  else if(computer==='paper' && player==='scissors'){
        return "Player wins!";
    }  else {
        return "Player wins!";
    }
}

// console.log(playRound(playerSelection, computerSelection));

// Add game variables
let rounds = 0;
let battles = 0;
let playerWins = 0;
let computerWins = 0;
let totalVictories = 0;
let totalLosses = 0;
let battleResult;
let endResult;

// The Game - rounds
function game() {
    rounds = playerWins = computerWins = 0;
    battles++;
    console.log(`Battle round: ${battles}`);
    while(rounds < 5){
        const player = userInput();
        const computer = getComputerChoice();
        //console.log(player);
        //console.log(computer);
        let fight = playRound(player, computer);
        if(fight==="It's a tie!"){
            rounds++;
        } else if(fight==="Computer wins!"){
            rounds++;
            computerWins++;
        } else {
            rounds++;
            playerWins++;
        }
    } console.log(`Rounds: ${rounds}, Player: ${playerWins}, Computer: ${computerWins} Tie: ${rounds-playerWins-computerWins}`);

    if(playerWins>computerWins){
        totalVictories++;
        battleResult = 'Player wins this battle!';
    } else if(playerWins<computerWins){
        totalLosses++;
        battleResult = 'Computer wins this battle!';
    } else if(playerWins===computerWins && playerWins !=0){
        battleResult = 'This battle ends in a tie!';
    } else {
        battleResult = 'Game on!';
    }
    console.log(battleResult);
} 


// The Game - battles
function battle() {
    totalVictories = totalLosses = battles = 0;
    battleResult = endResult = "";
    while(battles < 3){
        game();
    }
    if(totalVictories>totalLosses){
        endResult = 'Yeee-haaa!! Player defeats computer!';
    } else if(totalVictories<totalLosses){
        endResult = 'Oh crap!? Computer defeats player!';
    } else {
        endResult = "it's a bloody tie!?!";
    }
    console.log(endResult);
}

battle();