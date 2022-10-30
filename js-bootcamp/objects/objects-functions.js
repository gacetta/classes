let myBook = {
    title: '1984',
    author: 'George Orwell',
    pageCount: 326
}

let otherBook = {
    title: 'A Peoples History',
    author: 'Howard Zinn',
    pageCount: 723
}

let getSummary = function (book) {
    return {
        summary: `${book.title} by ${book.author}`,
        pageCountSummary: `${book.title} is ${book.pageCount} pages long.`
    }
}

let bookSummary = getSummary(myBook)
let otherBookSummary = getSummary(otherBook)

console.log(bookSummary.pageCountSummary)

//Create Function - take fahrenheit in - return object with all three values

let getTemp = function(temp) {
    return {
        fahrenheit: temp,
        celsius: (temp-32) * 5 / 9,
        kelvin: (temp + 459.67) * 5 / 9
    }
}

let wedTemp = getTemp(32)
let thursTemp = getTemp(85)

console.log(wedTemp)
console.log(wedTemp.fahrenheit)
console.log(wedTemp.celsius)
console.log(wedTemp.kelvin)

console.log(thursTemp)
console.log(thursTemp.fahrenheit)
console.log(thursTemp.celsius)
console.log(thursTemp.kelvin)
