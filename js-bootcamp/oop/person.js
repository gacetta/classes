const person = function () {

}


const me = new person();

console.log(me);

// // // Prototypal Inheritance
// // // myPerson -> Person.prototype -> Object.prototype -> null

// class Person {
//     constructor(firstName, lastName, age, likes = []) {
//         this.firstName = firstName;
//         this.lastName = lastName;
//         this.age = age;
//         this.likes = likes
//     }
//     getBio() {
//         let bio = `${this.firstName} is ${this.age}.`;
    
//         this.likes.forEach((like) => {
//             bio += ` ${this.firstName} likes ${like}.`
//         })

//         return bio;
//     }
//     set fullName(fullName) {
//         const splitName = fullName.split(' ');
//         this.firstName = splitName[0];
//         this.lastName = splitName[1];
//     }

//     get fullName() {
//         return `${this.firstName} ${this.lastName}`
//     }
// }

// class Employee extends Person {
//     constructor(firstName, lastName, age, position, likes = []) {
//         super(firstName, lastName, age, likes);
//         this.position = position;
//     }
//     getBio() {
//         return `${this.fullName} is a ${this.position}.`;
//     }
//     getYearsLeft() {
//         return 65 - this.age;
//     }
// }

// class Student extends Person {
//     constructor(firstName, lastName, age, grade, likes) {
//         super(firstName, lastName, age, likes);
//         this.grade = grade;
//     }
//     getBio() {
//         const status = this.grade >= 70 ? 'passing' : 'failing'
//         return `${this.firstName} is ${status} the class.`

//     }
//     updateGrade(change) {
//         this.grade += change;
//     }
// }

// const student1 = new Employee('Gregory', 'Hines', 27, 'master commander', ['tap dancing']);
// student1.fullName = 'David Blaine'
// console.log(student1);
// console.log(student1.getBio());
