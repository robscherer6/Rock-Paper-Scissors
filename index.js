const choices = ['rock', 'paper', 'scissors'];
const winners = [];

//get a random choice from computer
function getComputerChoice() {
  return choices[Math.floor(Math.random() * choices.length)];
}

let pick;
const btn = document.querySelectorAll('button').forEach(button => {
  button.addEventListener('click', () => {
    pick = button.innerText;
    console.log('PICK: ', pick)
  });
})

//use prompt to get player choice
function playerChoice () {
  let input = pick;
  //let input = prompt('Type Rock, Paper, or Scissors');
  //console.log('Player: ', input);
  // while (input === null) {
  //   input = prompt('Type Rock, Paper, or Scissors');
  // }
  input =  input.toLowerCase();
  //checking to make sure input is valid
  let check = validateInput(input);
  while (check === false) {
    input = prompt('Type Rock, Paper, or Scissors. Spelling must be exact, but capitalization does not matter.');
    while (input === null) {
      input = prompt('Type Rock, Paper, or Scissors');
    }
    input = input.toLowerCase();
    check = validateInput(input);
  }
  return input;
}


//play a single round of rps
function playRound (round) {
  // console.log(btn.innerText.toLowerCase());
  const playerSelection = btn.innerText.toLowerCase();
  const computerSelection = getComputerChoice();
  //console.log('Computer: ', computerSelection);
  const winner = determineWinner(playerSelection, computerSelection);
  //console.log('Winner: ', winner);
  winners.push(winner);
  logRound(playerSelection, computerSelection, winner, round);
}

function game () {
  // for (var i = 1; i <= 5; i++) {
  //   playRound(i);
  // }
  playRound();
  document.querySelector('button').textContent = 'Play New Game';
  logWins();
}

//validating input function
function validateInput(choice) {
  return choices.includes(choice);
}

function determineWinner (choiceP, choiceC) {
  if (choiceP === choiceC) {
    return 'Tie';
  } else if ((choiceP === 'rock' && choiceC === 'scissors') ||
  (choiceP === 'paper' && choiceC === 'rock') ||
  (choiceP === 'scissors' && choiceC === 'paper')) {
    return 'Player';
  } else {
    return 'Computer';
  }
}

function logWins() {
  let playerWins = winners.filter(item => item === 'Player').length;
  let computerWins = winners.filter(item => item === 'Computer').length;
  let ties = winners.filter(item => item === 'Tie').length;
  console.log('Results: ');
  console.log('Player Wins: ', playerWins);
  console.log('Computer Wins: ', computerWins);
  console.log('Ties: ', ties);

  if (playerWins > computerWins) {
    alert('You win!!!');
  } else if (playerWins < computerWins) {
    alert('The Computer wins, better luck next time teeHee.')
  } else {
    alert('Its a tie, please play again...')
  }
}

function logRound(playerChoice, computerChoice, winner, round) {
  console.log('Round: ', round);
  console.log('Player Chose: ', playerChoice);
  console.log('Computer Chose: ', computerChoice);
  console.log(winner, 'won the round');
  console.log('-------------------------------')
}

//initiate game/prompt upon page load
//game();

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