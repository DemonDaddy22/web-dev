const select = document.querySelector('#select-rounds');
const playerOne = document.querySelector('.button-one');
const playerTwo = document.querySelector('.button-two');
const reset = document.querySelector('.button-reset');
let playerOneScore = document.querySelector('#player-one-score');
let playerTwoScore = document.querySelector('#player-two-score');

let rounds = select.value;
let [scoreOne, scoreTwo] = [0, 0];

select.addEventListener('change', e => {
    rounds = e.target.value;
    resetGame();
});

playerOne.addEventListener('click', e => {
    if (scoreOne === parseInt(rounds) || scoreTwo === parseInt(rounds)) return;

    scoreOne += 1;
    playerOneScore.textContent = scoreOne;
    setResults(scoreOne, scoreTwo);
});

playerTwo.addEventListener('click', e => {
    if (scoreOne === parseInt(rounds) || scoreTwo === parseInt(rounds)) return;

    scoreTwo += 1;
    playerTwoScore.textContent = scoreTwo;
    setResults(scoreOne, scoreTwo);
});

reset.addEventListener('click', () => resetGame());

const setResults = (scoreOne, scoreTwo) => {
    if (scoreOne === parseInt(rounds)) {
        playerOneScore.classList.add('winner');
        playerTwoScore.classList.add('loser');
        playerOne.disabled = true;
        playerTwo.disabled = true;
    } else if (scoreTwo === parseInt(rounds)) {
        playerOneScore.classList.add('loser');
        playerTwoScore.classList.add('winner');
        playerOne.disabled = true;
        playerTwo.disabled = true;
    }
}

const setPlayerOneScore = score => playerOneScore.textContent = score;

const setPlayerTwoScore = score => playerTwoScore.textContent = score;

const resetGame = () => {
    scoreOne = 0;
    scoreTwo = 0;
    playerOne.disabled = false;
    playerTwo.disabled = false;
    playerOneScore.textContent = scoreOne;
    playerTwoScore.textContent = scoreTwo;
    playerOneScore.classList.remove('winner', 'loser');
    playerTwoScore.classList.remove('winner', 'loser');
}
