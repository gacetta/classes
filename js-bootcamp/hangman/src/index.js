import Hangman from './hangman';
import getPuzzle from './requests';

const puzzleEl = document.querySelector('.puzzle');
const statusEl = document.querySelector('#status');
const guessesEl = document.querySelector('#guesses');
const wordDropdown = document.querySelector('#word-count');
const guessDropdown = document.querySelector('#guess-count');

let game1;

window.addEventListener('keypress', (e) => {
  game1.makeGuess(e.key);
  render();
})

const render = () => {
  puzzleEl.innerHTML = '';
  statusEl.textContent = game1.statusMessage;
  guessesEl.textContent = `Guessed letters: `;

  game1.puzzle.split('').forEach((char) => {
    const charSpan = document.createElement('span');
    charSpan.textContent = char;
    charSpan.setAttribute('class', 'puzzle-guess');
    puzzleEl.append(charSpan);
  })

  game1.guessedLetters.forEach((char) => {
    if(char !== ' '){
      const charSpan = document.createElement('span');
      charSpan.textContent = `${char}, `;
      charSpan.setAttribute('class', 'guess');
      guessesEl.append(charSpan);
    }
  })
}

const startGame = async () => {
  
  // set up word count dropdown
  const wordCount = wordDropdown.value ? wordDropdown.value : Math.floor(Math.random() * 5 + 1);;
  
  //set up guesses dropdown
  const numOfGuesses = guessDropdown.value ? guessDropdown.value : Math.floor(Math.random() * 5 + 1);;

  const puzzle = await getPuzzle(wordCount);
  game1 = new Hangman(puzzle, numOfGuesses);
  render();
}

document.querySelector('#reset').addEventListener('click', startGame);

startGame();