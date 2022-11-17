const puzzleEl = document.querySelector('#puzzle')
const statusEl = document.querySelector('#status')
const guessedLettersEl = document.querySelector('#guessedLetters')

let game1;

window.addEventListener('keypress', (e) => {
  const guess = e.key;
  game1.makeGuess(guess);
  render();
})

const render = () => {
  puzzleEl.textContent = game1.puzzle;
  statusEl.textContent = game1.statusMessage;
  guessedLettersEl.textContent = game1.alreadyGuessedLetters;
}

const startGame = async () => {
    const puzzle = await getPuzzle('3');
    game1 = new Hangman(puzzle, 5);
    game1.checkStatus()
    render();
}

document.querySelector('#reset').addEventListener('click', startGame);

startGame();

// getPuzzle('2').then((puzzle) => {
//   console.log(puzzle);
// }).catch((err) => {
//   console.log(`Error: ${err}`);
// })
