let num = 123.456

console.log(num.toFixed(2))

console.log(Math.round(num))
console.log(Math.floor(num))
console.log(Math.ceil(num))

let min = 0
let max = 1
let randomNum = Math.floor(Math.random() * (max - min + 1)) + min

// Challenge Area
// 1- 5 true if correct - false if not correct
let guessingGame = function (guess) {
    let min = 1
    let max = 5
    let randomNum = Math.floor(Math.random() * (max - min + 1)) + min   
    
    return guess === randomNum
}

console.log(guessingGame(2))