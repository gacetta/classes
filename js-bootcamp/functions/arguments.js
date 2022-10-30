//Multiple arguments

let add = function (a, b, c) {
    return a + b + c
}

let result = add(10, 1, 5)
console.log(result)

//Default arguments
let getScoreText = function (name = 'Thor', score = 0) {
    return `Name: ${name} - Score: ${score}`
}

let scoreText = getScoreText(undefined, 99)
console.log(scoreText)

let tipCalculator = function (total, tipPercent = .2) {
    let percent = tipPercent *100
    let tipAmount = total * tipPercent
    return `A ${percent}% tip on $${total} would be $${tipAmount}`
}

let tipText = tipCalculator(1000, .15)
console.log (tipText)