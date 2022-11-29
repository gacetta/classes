const puzzleEl = document.querySelector('.puzzle');
const statusEl = document.querySelector('#status');
const guessesEl = document.querySelector('#guesses');
const wordDropdown = document.querySelector('#word-count');
const guessDropdown = document.querySelector('#guess-count');

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

// event listener for drop down
// document.querySelector('#word-count').addEventListener('change', (e) => {
//   wordCount = e.target.value
// })

// const startGame = async (wordCount, guesses) => {
const startGame = async () => {
  
  // set up word count dropdown
  const wordCount = wordDropdown.value ? wordDropdown.value : Math.floor(Math.random() * 5 + 1);;
  console.log('wordCount in startGame: ', wordCount);
  
  //set up guesses dropdown
  const numOfGuesses = guessDropdown.value ? guessDropdown.value : Math.floor(Math.random() * 5 + 1);;
  console.log('number of guesses in startGame: ', numOfGuesses);

  const puzzle = await getPuzzle(wordCount);
  game1 = new Hangman(puzzle, numOfGuesses);
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