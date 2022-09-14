/* Imports */

/* State */
let gameState = ''; // 'results' or 'choice'
let choice = ''; // 'rock' 'paper' 'scissors'
let results = ''; // 'win' 'lose' 'draw'
let computer = 'scissors'; // // 'rock' 'paper' 'scissors'

let wins = 2;
let total = 0;

/* Actions */
function loadPage() {}

/* Components */
const rock = document.getElementById('rock');
const paper = document.getElementById('paper');
const scissors = document.getElementById('scissors');
const playAgain = document.getElementById('play-again');

const winscore = document.getElementById('win-score');
const losescore = document.getElementById('lose-score');
const drawscore = document.getElementById('draw-score');

/* Component */
// get DOM
if (gameState === 'choice') {
    let wins = 0;
    let total = 0;
    let draw = total - wins;
    console.log(choice);
}

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
