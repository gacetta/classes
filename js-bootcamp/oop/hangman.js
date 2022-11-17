const Hangman = function(word, remainingGuesses) {
  this.word = word.toLowerCase().split(''),
  this.guessedLetters = [' ', 'c', 'n'],
  this.remainingGuesses = remainingGuesses
}

Hangman.prototype.getPuzzle = function() {
  let puzzle = '';
  this.word.forEach((letter) => {
    puzzle += this.guessedLetters.includes(letter) ? letter : '*';
  })
  return puzzle;
}

const game1 = new Hangman('Cat', 2);
console.log(game1.getPuzzle())

const game2 = new Hangman('New Jersey', 4);
console.log(game2.getPuzzle())
