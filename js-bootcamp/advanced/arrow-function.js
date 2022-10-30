const square = (num) => num * num;

const squareLong = (num) => {
    return num * num;
}

console.log(square(5));

const people = [{
    name: 'Michael',
    age: 37
}, {
    name: 'Molly',
    age: 35
}, {
    name: 'Gretchen',
    age: 65
}, {
    name: 'David',
    age: 66
}]

const under40 = people.filter(function (person) {
    return person.age < 40;
})

const under65 = people.filter((person) => person.age <= 65);

console.log(under65);

//1. find the person with age equal to 66
// 2. Print that persons name

const personSixtySix = people.find((element) => element.age === 66);
console.log(personSixtySix.name);