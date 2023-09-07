// ADD GAME VARIABLES
let rounds = 0;
let playerWins = 0;
let computerWins = 0;
let tieRounds = 0;

// GENERATE RANDOM COMPUTER WEAPON
function getComputerChoice() {
    let randomNumber = Math.floor((Math.random()/3)*10)+1;
    let computerInput;
    const computerImg = document.querySelector('.computer');
    if(randomNumber === 1) {
        computerInput = 'rock';
        computerImg.src = "./cji/img/rock.png";
        computerImg.alt = "rock";
    } else if(randomNumber === 2) {
        computerInput = 'paper';
        computerImg.src = "./cji/img/paper.png";
        computerImg.alt = "paper";
    } else {
        computerInput = 'scissors';
        computerImg.src = "./cji/img/scissors.png";
        computerImg.alt = "scissors";
    };
    return computerInput;
}


// SELECTING WEAPONS
const rock = document.querySelector('.rock');
const paper = document.querySelector('.paper');
const scissors = document.querySelector('.scissors');
const weaponSelection = document.querySelector('.weaponSelection');

const scorePlayer = document.querySelector('.playerScore');
const scoreComputer = document.querySelector('.computerScore');
const scoreTie = document.querySelector('.tieScore');
const fightMessage = document.querySelector('.fight');

const playerImage = document.querySelector('.player');
const computerImg = document.querySelector('.computer');
const resetGame = document.querySelector('.reset');

rock.addEventListener('click', rockAction);
paper.addEventListener('click', paperAction);
scissors.addEventListener('click', scissorsAction);
resetGame.addEventListener('click', reset);

function reset(){
    rounds = 0;
    playerWins = 0;
    computerWins = 0;
    tieRounds = 0;
    playerImage.src = "";
    computerImg.src = "";
    computerImg.alt = "";
    fightMessage.textContent = "";
    scoreComputer.textContent = "Computer Score:";
    scorePlayer.textContent = "Player Score:";
    scoreTie.textContent = "Ties:";
    weaponSelection.style.display = 'block';
    rock.style.display = 'block';
    paper.style.display = 'block';
    scissors.style.display = 'block';
    resetGame.style.display = 'none';
}

function endGame(){
    resetGame.style.display = 'block';
    weaponSelection.style.display = 'none';
    rock.style.display = 'none';
    paper.style.display = 'none';
    scissors.style.display = 'none';
    if(playerWins<computerWins){
        fightMessage.textContent = "Computer is KING!"
    } else if(playerWins>computerWins){
        fightMessage.textContent = "VICTO-freakin'-RY!!!"
    } else {
        fightMessage.textContent = "It's a TIE?!?"
    }
}

function rockAction(evt){
    playerImage.src = "./cji/img/rock.png";
    getComputerChoice();
    if(playRound('rock', computerImg.getAttribute('alt'))=="Computer wins!"){
        computerWins++;
        scoreComputer.textContent = `Computer Score: ${computerWins}`;
        fightMessage.textContent = "Computer wins!";
        rounds++;

    } else if(playRound('rock', computerImg.getAttribute('alt'))=="Player wins!"){
        playerWins++;
        scorePlayer.textContent = `Player Score: ${playerWins}`;
        fightMessage.textContent = "Player wins!";
        rounds++;
    } else {
        tieRounds++;
        scoreTie.textContent = `Ties: ${tieRounds}`;
        fightMessage.textContent = "It's a bloody tie!?!";
        rounds++;
    };
    if(rounds==5){
        endGame();
    }
}

function paperAction(evt){
    playerImage.src = "./cji/img/paper.png";
    getComputerChoice();
    if(playRound('paper', computerImg.getAttribute('alt'))=="Computer wins!"){
        computerWins++;
        scoreComputer.textContent = `Computer Score: ${computerWins}`;
        fightMessage.textContent = "Computer wins!";
        rounds++;
    } else if(playRound('paper', computerImg.getAttribute('alt'))=="Player wins!"){
        playerWins++;
        scorePlayer.textContent = `Player Score: ${playerWins}`;
        fightMessage.textContent = "Player wins!";
        rounds++;
    } else {
        tieRounds++;
        scoreTie.textContent = `Ties: ${tieRounds}`;
        fightMessage.textContent = "It's a bloody tie!?!";
        rounds++;
    };
    if(rounds==5){
        endGame();
    }
}

function scissorsAction(evt){
    playerImage.src = "./cji/img/scissors.png";
    getComputerChoice();
    if(playRound('scissors', computerImg.getAttribute('alt'))=="Computer wins!"){
        computerWins++;
        scoreComputer.textContent = `Computer Score: ${computerWins}`;
        fightMessage.textContent = "Computer wins!";
        rounds++;
    } else if(playRound('scissors', computerImg.getAttribute('alt'))=="Player wins!"){
        playerWins++;
        scorePlayer.textContent = `Player Score: ${playerWins}`;
        fightMessage.textContent = "Player wins!";
        rounds++;
    } else {
        tieRounds++;
        scoreTie.textContent = `Ties: ${tieRounds}`;
        fightMessage.textContent = "It's a bloody tie!?!";
        rounds++;
    };
    if(rounds==5){
        endGame();
    };
}

// FIGHT SCORE
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
    };
}