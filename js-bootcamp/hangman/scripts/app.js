const puzzleEl = document.querySelector('.puzzle');
const statusEl = document.querySelector('#status');
const guessesEl = document.querySelector('#guesses');
let game1;

// puzzleEl.textContent = game1.puzzle;
// statusEl.textContent = game1.statusMessage;

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
  const puzzle = await getPuzzle('5');
  game1 = new Hangman(puzzle, 9);
  render();
}

document.querySelector('#reset').addEventListener('click', startGame);

startGame();

// getPuzzle('5').then((puzzle) => {
//   console.log(puzzle)
// }, (err) => {
//   console.log(`Error: ${err}`)
// })

// getPokemon(903).then((pokemon) => {
//   console.log(pokemon)
// }, (err) => {
//   console.log(`Error: ${err}`)
// })

// getLocation().then((location) => {
//   console.log(location);
//   console.log('city: ', location.city);
//   console.log('region: ', location.region);
//   console.log('country: ', location.country);
// }).catch((err) => {
//   console.log(err);
// })