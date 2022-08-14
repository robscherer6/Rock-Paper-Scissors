function getComputerChoice() {
  let random = Math.floor(Math.random() * 3);
  if (random === 0) {
    return 'rock';
  } else if (random === 1) {
    return 'paper';
  } else {
    return'scissors';
  }
}

function playRound (playerSelection, computerSelection) {
  playerSelection = playerSelection.toLowerCase();
  console.log(playerSelection);
  computerSelection = computerSelection.toLowerCase();
  console.log(computerSelection);
  if (playerSelection === 'rock' && computerSelection === 'paper') {
    return 'You Lose! Paper beats Rock';
  } else if (playerSelection === 'scissors' && computerSelection === 'rock') {
    return 'You Lose! Rock beats scissors';
  } else if (playerSelection === 'paper' && computerSelection === 'scissors') {
    return 'You Lose! Scissors beats paper';
  } else if (playerSelection === computerSelection) {
    return 'You tie! Play again!';
  } else {
    return 'You win! Congrats!';
  }
}

const playerSelection = 'RocK';
const computerSelection = getComputerChoice();

//console.log(playRound(playerSelection, computerSelection));

function game () {
  let playerScore = 0;
  let computerScore = 0;
  for (let i = 0; i < 5; i++) {
    let result = playRound(playerSelection, computerSelection);
    console.log(result);
  }
}

console.log(game());