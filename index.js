const choices = ['rock', 'paper', 'scissors'];

function getComputerChoice() {
  return choices[Math.floor(Math.random() * choices.length)];
}

function playRound (playerSelection, computerSelection) {
  playerSelection = playerSelection.toLowerCase();
  console.log('Player: ', playerSelection);
  let playerScore = 0;
  computerSelection = computerSelection.toLowerCase();
  console.log('Computer: ', computerSelection);
  let computerScore = 0;
  if (playerSelection === 'rock' && computerSelection === 'paper') {
    computerScore++;
  } else if (playerSelection === 'scissors' && computerSelection === 'rock') {
    computerScore++;
  } else if (playerSelection === 'paper' && computerSelection === 'scissors') {
    computerScore++;
  } else if (playerSelection === computerSelection) {

  } else {
    playerScore++;
  }
  console.log('PlayerScore: ', playerScore);
  console.log('ComputerScore: ', computerScore);
}

const playerSelection = 'RocK';
const computerSelection = getComputerChoice();

//console.log(playRound(playerSelection, computerSelection));

function game () {
  //play five rounds of the game
  for (let i = 0; i < 5; i++) {
    playRound(playerSelection, computerSelection);
  }
}

console.log(game());