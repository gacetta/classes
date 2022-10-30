// // write a function called **objectSearcher**
// // it takes two arguments - **myObject** - an object and **property**, which is a string
// // when invoked it will return the value at the property that matches the property

// const testObject = {
//     firstName: "Michael",
//     lastName: "Gacetta"
// }

// const testString = 'firstName';
// const testString2 = 'lastName';

// const objectSearcher = (objectArg, propertyArg) => objectArg[propertyArg];

// console.log(objectSearcher(testObject, testString2));

//Complete the function `holidays` that accepts an array of strings and iterates through the array.  
//If the array contains the string `"October"`, return `"Happy Halloween"`.  
//Otherwise, return the string `"Have a great day!"`.  
//Do not use a variable to store the result that you are returning.

const holidays = (array) => array.includes('October') ? 'Happy Halloween' : 'Have a great day!';


testArray = ['October', 'Sept'];
console.log(holidays(testArray));

const holidays = (arrayArg, stringArg) => array.includes(`${stringArg.toLowerCase()}`) ? 'yep!' : 'No cigar, castro';

const nonArrow = function (arrayArg, stringArg) {
    if (array.includes(`${stringArg.toLowerCase()}`)) {
        return 'Yes bob sir';
    } else {
        return 'no jalapenos in the pool';
    }
}

// the function holidays is given an array of strings as an argument
function holidays(arr) {

    // use a for loop to look at each item of the array
    for (let i = 0; 0 < arr.length; i++) {

        // check if that item equals "October"
        if (arr[i] === "October") {
            // if the item equals "October" return "Happy Halloween"
            return "Happy Halloween";
        }
    }
    // if none of the items equal "October" return "have a great day"
}