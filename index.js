const choices = ['rock', 'paper', 'scissors'];

function getComputerChoice() {
  return choices[Math.floor(Math.random() * choices.length)];
}

function playerChoice () {
  let input = prompt('Type Rock, Paper, or Scissors');
  while (input === null) {
    input = prompt('Type Rock, Paper, or Scissors');
  }
  input =  input.toLowerCase();
  //checking to make sure input is valid
  let check = validateInput(input);
  if (check) {
    console.log(input);
  }
}

function playRound () {
  const playerSelection = playerChoice();
  const computerSelection = getComputerChoice();
}

function game () {
  playRound();
}

//validating input function
function validateInput(choice) {
  if (choices.includes(choice)) {
    return true;
  } else {
    return false;
  }
}

game();

// function playRound (playerSelection, computerSelection) {

//   playerSelection = playerSelection.toLowerCase();
//   console.log('Player: ', playerSelection);
//   let playerScore = 0;
//   computerSelection = computerSelection.toLowerCase();
//   console.log('Computer: ', computerSelection);
//   let computerScore = 0;
//   if (playerSelection === 'rock' && computerSelection === 'paper') {
//     computerScore++;
//   } else if (playerSelection === 'scissors' && computerSelection === 'rock') {
//     computerScore++;
//   } else if (playerSelection === 'paper' && computerSelection === 'scissors') {
//     computerScore++;
//   } else if (playerSelection === computerSelection) {

//   } else {
//     playerScore++;
//   }
//   console.log('PlayerScore: ', playerScore);
//   console.log('ComputerScore: ', computerScore);
// }

// const playerSelection = 'RocK';
// const computerSelection = getComputerChoice();

// //console.log(playRound(playerSelection, computerSelection));

// function game () {
//   //play five rounds of the game
//   for (let i = 0; i < 5; i++) {
//     playRound(playerSelection, computerSelection);
//   }
// }

// console.log(game());