/* Imports */

/* State */
let gameState = 'results'; // 'results' or 'choice'
let choice = ''; // 'rock' 'paper' 'scissors'
let results = ''; // 'win' 'lose' 'draw'
let computer = 'scissors'; // // 'rock' 'paper' 'scissors'

/* Actions */
function loadPage() {}

/* Components */
const rock = document.getElementById('rock');
const paper = document.getElementById('paper');
const scissors = document.getElementById('scissors');
const playAgain = document.getElementById('play-again');

/* Component */
// get DOM

// display
// event listeners
rock.addEventListener('click', () => {
    choice = 'rock';
    gameState = 'results';
    // console.log('rock pick');
});

paper.addEventListener('click', () => {
    choice = 'paper';
    gameState = 'results';
    // console.log('paper pick');
});

scissors.addEventListener('click', () => {
    choice = 'scissors';
    gameState = 'results';
    // console.log('scissors pick');
});

playAgain.addEventListener('click', () => {
    gameState = 'choice';
    // console.log('reset');
});

/* Run page load code */
loadPage();
