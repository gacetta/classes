

let greetUser = function () {
    console.log('Welcome user!')
}

greetUser()
greetUser()
greetUser()

let square = function (num) {
    let result = num * num
    return result
}

let value = square(3)
let otherValue = square(10)
console.log(value)
console.log(otherValue)

//convertFahrenheitToCelsius

//call a couple of times (32 -> 0) (68 -> 20)

//print the converted values

let convertFahrenheitToCelsius = function (fahrenheit) {
    let celsius = (fahrenheit - 32) * 5 / 9
    return celsius
}

let v1 = convertFahrenheitToCelsius(32)
let v2 = convertFahrenheitToCelsius(68)

console.log(v1)
console.log(v2)
