class Hangman {
    constructor(word, remainingGuesses) {
      this.word = word.toLowerCase().split('');
      this.guessedLetters = [];
      this.remainingGuesses = remainingGuesses;
      this.status = 'playing';
    }
    get puzzle() {
      let puzzle = '';
  
      this.word.forEach((letter) => {
        if (this.guessedLetters.includes(letter) || letter === ' ') {
          puzzle += letter;
        } else {
          puzzle += '*';
        }
      })
  
      return puzzle;
    }
    makeGuess(guess) {
      if (this.status === 'playing') {
        guess = guess.toLowerCase();
        const isUnique = !this.guessedLetters.includes(guess);
        const isBadGuess = !this.word.includes(guess);
      
        if (isUnique) {
          this.guessedLetters.push(guess);
          this.guessedLetters.sort();
          if (isBadGuess) {
            this.remainingGuesses--;
          }
        }
        this.checkStatus();
      }
    }
    checkStatus() {
      const finished = this.puzzle === this.word.join('');
      if (this.remainingGuesses === 0) {
        this.status = 'failed';
      } else if (finished) {
        this.status = 'finished';
      } else {
        this.status = 'playing';
      }
      console.log(`Updated status to: ${this.status}`);
    }
    get statusMessage() {
      if (this.status === 'playing') {
        return `Guesses left: ${this.remainingGuesses}`;
      } else if (this.status === 'failed') {
        return `Nice try!  The word was "${this.word.join('')}".`;
      } else if (this.status === 'finished') {
        return `Great work!  You guessed the word with ${this.remainingGuesses} guess remaining!`
      }
    }
    get alreadyGuessedLetters() {
      return `Already guessed: ${this.guessedLetters.join(', ')}`;
    }
  }