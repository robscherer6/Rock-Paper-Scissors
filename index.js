const winners = [];
const choices = ['rock', 'paper', 'scissors'];

//reset game
function resetGame() {

}

//get a random choice from computer
function getComputerChoice() {
  return choices[Math.floor(Math.random() * choices.length)];
}


//play a single round of rps
function playRound (playerChoice) {
  let wins = checkWins();
  if (wins >= 5) {
    return;
  }
  const computerChoice = getComputerChoice();

  const winner = determineWinner(playerChoice, computerChoice);

  winners.push(winner);
  tallyWins();
  displayRound(playerChoice, computerChoice, winner);
  wins = checkWins();
  if (wins === 5) {
    displayEnd();
  }
}

function displayEnd() {
  let playersWins = winners.filter(item => item === 'Player').length;
  if (playerWins === 5) {
    document.querySelector('.winner').textContent = 'You won 5 times!!!';
  } else {
    document.querySelector('.winner').textContent = 'Sorry, the computer won 5 times!!!';
  }
  document.querySelector('.reset').style.display = 'flex'
}

function displayRound(playerChoice, computerChoice, winner) {
  document.querySelector('.playerChoice').textContent = `You Chose: ${playerChoice.charAt(0).toUpperCase() + playerChoice.slice(1)}`;
  document.querySelector('.computerChoice').textContent = `The Computer Chose: ${computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1)}`;
  document.querySelector('.winner').textContent = `Winner: ${winner}`;
}

function tallyWins() {
  let playerWins = winners.filter(item => item === 'Player').length;
  let computerWins = winners.filter(item => item === 'Computer').length;
  let ties = winners.filter(item => item === 'Tie').length;
  document.querySelector('.playerScore').textContent = `Score: ${playerWins}`;
  document.querySelector('.computerScore').textContent = `Score: ${computerWins}`;
  document.querySelector('.ties').textContent = `Ties: ${ties}`;
}

function startGame () {
  let imgs = document.querySelectorAll('img');
  imgs.forEach((img) => {
    img.addEventListener(('click'), () => {
      if (img.id) {
        playRound(img.id);
      }
    })
  })
}

function checkWins () {
  let playerWins = winners.filter(item => item === 'Player').length;
  let computerWins = winners.filter(item => item === 'Computer').length;
  return Math.max(playerWins, computerWins);
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

function setWins() {
  let playerWins = winners.filter(item => item === 'Player').length;
  let computerWins = winners.filter(item => item === 'Computer').length;
  let ties = winners.filter(item => item === 'Tie').length;
}

startGame();



