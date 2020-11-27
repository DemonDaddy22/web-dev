const select = document.querySelector('#select-rounds');
const playerOne = document.querySelector('.button-one');
const playerTwo = document.querySelector('.button-two');
const reset = document.querySelector('.button-reset');
let playerOneScore = document.querySelector('#player-one-score');
let playerTwoScore = document.querySelector('#player-two-score');

let rounds = select.value;
let [scoreOne, scoreTwo] = [0, 0];

select.addEventListener('change', e => rounds = e.target.value);

playerOne.addEventListener('click', e => {
    if (scoreOne + scoreTwo === parseInt(rounds)) return;
    
    scoreOne += 1;
    playerOneScore.textContent = scoreOne;
    setResults(scoreOne, scoreTwo);
});

playerTwo.addEventListener('click', e => {
    if (scoreOne + scoreTwo === parseInt(rounds)) return;
    
    scoreTwo += 1;
    playerTwoScore.textContent = scoreTwo;
    setResults(scoreOne, scoreTwo);
});

reset.addEventListener('click', e => {
    playerOneScore.classList.remove('winner');
    playerOneScore.classList.remove('loser');
    playerTwoScore.classList.remove('winner');
    playerTwoScore.classList.remove('loser');
    scoreOne = 0;
    scoreTwo = 0;
    playerOneScore.textContent = scoreOne;
    playerTwoScore.textContent = scoreTwo;
})

const setResults = (scoreOne, scoreTwo) => {
    if (scoreOne + scoreTwo === parseInt(rounds)) {
        if (scoreOne > scoreTwo) {
            playerOneScore.classList.add('winner');
            playerTwoScore.classList.add('loser');
        } else {
            playerOneScore.classList.add('loser');
            playerTwoScore.classList.add('winner');
        }
    }
}

const setPlayerOneScore = score => playerOneScore.textContent = score;

const setPlayerTwoScore = score => playerTwoScore.textContent = score;