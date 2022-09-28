const winners = [];
const choices = ['rock', 'paper', 'scissors'];

//reset game
function resetGame() {

}

//get a random choice from computer
function getComputerChoice() {
  return choices[Math.floor(Math.random() * choices.length)];
}

// let pick;
// const btn = document.querySelectorAll('button').forEach(button => {
//   button.addEventListener('click', () => {
//     pick = button.innerText;
//     console.log('PICK: ', pick)
//   });
// })

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
  playRound();
  logWins();
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

