// Primitive value: string, number, boolean, Big Int, undefined, null 
// Object: myObject --> Object.prototype --> null
// Array: myArray --> Array.prototype --> Object.prototype --> null
// Function: myFunction --> Function.prototype --> Object.prototype --> null
// String: myString --> String.prototype --> Object.prototype --> null
// Number: myNumber --> Number.prototype --> Object.prototype --> null
// Boolean: myBoo --> Boolean.prototype --> Object.prototype --> null

const puzzleEl = document.querySelector('#puzzle')
const statusEl = document.querySelector('#status')
const guessedLettersEl = document.querySelector('#guessedLetters')

const game1 = new Hangman('hula hoop', 10);

puzzleEl.textContent = game1.puzzle;
statusEl.textContent = game1.statusMessage;
guessedLettersEl.textContent = game1.alreadyGuessedLetters;

window.addEventListener('keypress', (e) => {
  const guess = e.key;
  game1.makeGuess(guess);
  puzzleEl.textContent = game1.puzzle;
  statusEl.textContent = game1.statusMessage;
  guessedLettersEl.textContent = game1.alreadyGuessedLetters;
})

getPuzzle('2').then((puzzle) => {
  console.log(puzzle);
}).catch((err) => {
  console.log(`Error: ${err}`);
})

// getLocation().then((location) => {
//   return getCountry(location.country);
// }).then((country) => {
//   console.log(country.name.official);
// }).catch((err) => {
//   console.log(`Error: ${err}`)
// })

getCurrentCountry().then((country) => {
  console.log(country.name.official);
}).catch((err) => {
  console.log(`Error: ${err}`)
})