const puzzleEl = document.querySelector('#puzzle');
const statusEl = document.querySelector('#status');

const game1 = new Hangman('Cat in the hat', 2);

puzzleEl.textContent = game1.puzzle;
statusEl.textContent = game1.statusMessage;

window.addEventListener('keypress', (e) => {
  game1.makeGuess(e.key);
  puzzleEl.textContent = game1.puzzle;
  statusEl.textContent = game1.statusMessage;
})