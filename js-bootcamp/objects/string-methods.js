let name = '     Thor of Asgard                 '

// Length property
console.log(name.length)

// Convert to upper case
console.log(name.toUpperCase())

// Convert to lower case
console.log(name.toLowerCase())

// Includes method
let password = `abc123assword`
console.log(password.includes(`password`))

// Trim method
console.log(name.trim())

// Challenge

// isValidPassword
// length is more than 8 - and it doesn't contain the word password
let isValidPassword = function (passWord) {
    return passWord.length > 8 && !passWord.includes(`password`)
}

console.log(isValidPassword(`asdfp`))
console.log(isValidPassword(`abc123!@#$%^&`))
console.log(isValidPassword(`asdfpasdfpoifpassword`))