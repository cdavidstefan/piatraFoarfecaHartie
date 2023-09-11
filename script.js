import { startConfetti, stopConfetti, removeConfetti } from "./confetti";

const playerScoreEl = document.getElementById('playerScore');
const playerChoiceEl = document.getElementById('playerChoice');
const computerScoreEl = document.getElementById('computerScore');
const computerChoiceEl = document.getElementById('computerChoice');
const resultText = document.getElementById('resultText');

const playerRock = document.getElementById('playerRock');
const playerPaper = document.getElementById('playerPaper');
const playerScissors = document.getElementById('playerScissors');

const computerRock = document.getElementById('computerRock');
const computerPaper = document.getElementById('computerPaper');
const computerScissors = document.getElementById('computerScissors');

const allGameIcons = document.querySelectorAll('.far');

const choices = {
  rock: { name: 'Rock', defeats: ['scissors', 'lizard'] },
  paper: { name: 'Paper', defeats: ['rock', 'spock'] },
  scissors: { name: 'Scissors', defeats: ['paper', 'lizard'] },
  lizard: { name: 'Lizard', defeats: ['paper', 'spock'] },
  spock: { name: 'Spock', defeats: ['scissors', 'rock'] },
};

let playerScoreNumber = 0;
let computerScoreNumber = 0;
let computerChoice = '';


// Reset all 'selected' icons
function resetSelected() {
  allGameIcons.forEach((icon) => {
      icon.classList.remove('selected');
  });
  stopConfetti();
  removeConfetti();
};

// Reset Score & Player Choice / Computer Choice

function resetAll(e) {
  playerScoreNumber = 0;
  playerScoreEl.textContent = playerScoreNumber;
  playerChoiceEl.textContent = '';
  computerScoreNumber = 0;
  computerScoreEl.textContent = computerScoreNumber;
  computerChoiceEl.textContent = '';
  resultText.textContent = 'Start Joc!';
  stopConfetti();
  resetSelected();
  console.log(playerScoreNumber, computerScoreNumber);
};


// Random computer choice
function computerRandomChoice() {
  const computerChoiceNumber = Math.random();
  console.log(computerChoiceNumber);
  if (computerChoiceNumber < 0.33) {
    computerChoice = 'rock';
  } else if (computerChoiceNumber <= 0.67) {
    computerChoice = 'paper';
  } else {
    computerChoice = 'scissors';
  };
};


// Add 'selected' styling and computer choice
function displayComputerChoice() {
switch (computerChoice) {
    case 'rock':
      computerRock.classList.add('selected');
      computerChoiceEl.textContent = ' --- Piatra';
      break;
    case 'paper':
      computerPaper.classList.add('selected');
      computerChoiceEl.textContent = ' --- Hartie';
      break;
    case 'scissors':
      computerScissors.classList.add('selected');
      computerChoiceEl.textContent = ' --- Foarfeca';
    default:
      break;
  };
};

// Check result, increase scores, update resultText
function updateScore(playerChoice) {
  console.log(playerChoice, computerChoice);
  if (playerChoice === computerChoice) {
    resultText.textContent = "Egalitate.";
  } else {
    const choice = choices[playerChoice];
    console.log(choice.defeats.indexOf(computerChoice));
    if (choice.defeats.indexOf(computerChoice) > -1) {
      resultText.textContent = "Ai castigat!";
      playerScoreNumber++;
      playerScoreEl.textContent = playerScoreNumber;
      startConfetti();
    } else {
      resultText.textContent = "Ai pierdut!";
      computerScoreNumber++;
      computerScoreEl.textContent = computerScoreNumber;
    }
  }
};

// Call functions to process the turn
function checkResult(playerChoice) {
  resetSelected();
  computerRandomChoice();
  displayComputerChoice();
  updateScore(playerChoice);
};

// Passing player selection value and styling icons

function select(playerChoice) {
    checkResult(playerChoice);
  // Add 'selected' styling & playerChoice
  switch (playerChoice) {
    case 'rock':
      playerRock.classList.add('selected');
      playerChoiceEl.textContent = ' --- Piatra';
      break;
    case 'paper':
      playerPaper.classList.add('selected');
      playerChoiceEl.textContent = ' --- Hartie';
      break;
    case 'scissors':
      playerScissors.classList.add('selected');
      playerChoiceEl.textContent = ' --- Foarfeca';
    default:
      break;
  };
};




// ce am invatat : order of priority of css(if you use id that will override any class !important),

startConfetti();