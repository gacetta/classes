class Hangman {
  constructor(word, remainingGuesses) {
    this.word = word.toLowerCase().split(''),
    this.guessedLetters = [' '],
    this.remainingGuesses = remainingGuesses,
    this.status = 'playing';
  }
  get puzzle() {
    let puzzle = '';
    this.word.forEach((letter) => {
      puzzle += this.guessedLetters.includes(letter) ? letter : '*';
    })
    return puzzle;
  }
  get statusMessage() {
    if (this.status === 'playing') {
      return `Guesses left: ${this.remainingGuesses}`;
    } else if (this.status === 'failed') {
      return `Nice try!  The word was "${this.word.join('').toUpperCase()}"`;
    } else {
      return `Great work!  You guessed the word correctly!`
    }
  }
  makeGuess(guess) {
    const isLetterRegex = /[a-zA-Z]/;
    if (this.status === 'playing' && isLetterRegex.test(guess)) {
      guess = guess.toLowerCase();
      const isUnique = !this.guessedLetters.includes(guess);
      const isBadGuess = (!this.word.includes(guess));
  
      if (isUnique) {
        this.guessedLetters.push(guess);
        insertionSort(this.guessedLetters);
        
      }
      if (isUnique && isBadGuess) {
        this.remainingGuesses--;
      }

      this.calculateStatus();
    }
  }
  calculateStatus() {
    const isFailed = this.remainingGuesses <= 0;
    const isFinished = this.word.every((letter) => this.guessedLetters.includes(letter));
  
    if (isFailed) {
      this.status = 'failed';
    } else if (isFinished) {
      this.status = 'finished';
    } else {
      this.status = 'playing';
    }
  }
}

function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    const currEl = arr[i];
    for (let j = i - 1; j >= 0 && arr[j] > currEl; j--) {
      const sortedEl = arr[j];
      arr[j + 1] = sortedEl;
      arr[j] = currEl;
    }
  }
  return arr;
}

// Hangman.prototype.getPuzzle = function() {
//   let puzzle = '';
//   this.word.forEach((letter) => {
//     puzzle += this.guessedLetters.includes(letter) ? letter : '*';
//   })

//   return puzzle;
// }

// Hangman.prototype.makeGuess = function(guess) {
//   if (this.status === 'playing') {
//     guess = guess.toLowerCase();
//     const isUnique = !this.guessedLetters.includes(guess);
//     const isBadGuess = !this.word.includes(guess);

//     if (isUnique) {
//       this.guessedLetters.push(guess);
//     }
  
//     if (isUnique && isBadGuess) {
//       this.remainingGuesses--;
//     }
  
//     this.calculateStatus();
//   }
// }

// Hangman.prototype.calculateStatus = function() {
//   const isFailed = this.remainingGuesses <= 0;
//   const isFinished = this.word.every((letter) => this.guessedLetters.includes(letter));

//   if (isFailed) {
//     this.status = 'failed';
//   } else if (isFinished) {
//     this.status = 'finished';
//   } else {
//     this.status = 'playing';
//   }
// }

// Hangman.prototype.getStatusMessage = function() {
//   const status = this.status;
//   // return status message
//   if (status === 'playing') {
//     return `Guesses left: ${this.remainingGuesses}`;
//   } else if (status === 'failed') {
//     return `Nice try!  The word was "${this.word.join('')}`;
//   } else {
//     return `Great work!  You guessed the word correctly!`
//   }
// }