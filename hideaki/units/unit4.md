# Unit 4 - Finish sass course html/css for now, Prototype and classes and ‘this’, intro to recursion
1. finish Jonas Udemy class, look into post-css which is probably the direction css is going in

2. Look for Udemy sales for (get most recent edition if multiple versions are available): "JavaScript Algorithms and Data Structures Masterclass" by Colt Steele - check

3. do a #mock_interviews as the interviwer - check

4. html/css/js project https://www.youtube.com/watch?v=srvUrASNj0s&t=6478s - SKIPPED

5. csx - finish until end of “Object Oriented Programming”, attend related lectures

6. Udemy Andrew JS class - finish section 10 “Advanced Objects and Functions” (OOP, classes)

7. freeCodeCamp - Finish all courses in the JavaScript and Data Structures section, including the Projects // 30 min at a time speed run

8. be able to reduce different data types as returns

9. prototype_basic algo (message me).  //towards end
String.prototype.announceFirstChar = function() {
  console.log(`The first character of the string is ${this[0]}`);
}
Terms you should now be familiar with:
- classes vs functions - classes are a template for creating objects that encapsulate data in one place.
- prototypal inheritance
- constructor function - called when `new` is used.  Binds `this` to the current new Object.
- what is a prototype - prototype is an existing inbuilt functionality in JS.  Nearly everything in JavaScript is an object.  Arrays and 
- what is a dunder proto
- keyword this

By this point you should understand the fundamentals of html, css, js and be able to create a website from scratch. This is enough to land a basic entry level web development job

## Requirements before unit interview
- have been the interviewer for #mock_interviews
- have posted at least 5 #code-reviews
- have reviewed others in #code-reviews
- have posted a few questions / answered a few questions
- can explain the idea of protyping and OOP in javascript in detail
- can explain and code css flexbox and grid

OOP

function makeUser(name, age) {
  return {
    name: name,
    age: age,
    method1: function() {
      console.log('my butt')
    }
  }
}

Object.create(prototype)

class ClassName {
  constructor(arg1, arg2) {
    this.arg1 = arg1;
    this.arg2 = arg2;
  }
}

class ExtendedClass extends Classname {
  
}