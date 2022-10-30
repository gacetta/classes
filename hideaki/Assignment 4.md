# Assignment 4

## TERMS AND CONCEPTS:

---
### **CLASSES VS. FUNCTIONS**

There is no such thing as true **classes** in JS.  Unlike languages like Java and C#, ES6 classes in JS are essentially special functions.

Prior to ES6, JS had no sense of classes.  Consider the following code:

    function Person(name) {
        this.name = name;
    }

    Person.prototype.getName = function () {
        return this.name;
    };

    var john = new Person("John Doe");
    console.log(john.getName()); // output: 'John Doe'  

How it works.

First, create the `Person` as a constructor function that has a property name called `name`. The `getName()` function is assigned to the `prototype` so that it can be shared by all instances of the `Person` type.

Then, create a new instance of the `person` type using the `new` operator. The `john` object, hence, is an instance of the `Person` and `Object` through prototypal inheritance.

ES6 introduced a new syntax for declaring a class:

    class Person {
        constructor(name) {
            this.name = name;
        }
        getName() {
            return this.name;
        }
    }

This `Person` class behaves like the `Person` type in the previous example. However, instead of using a constructor/prototype pattern, it uses the `class` keyword.

In the `Person` class, the `constructor()` is where you can initialize the properties of an instance. JavaScript automatically calls the `constructor()` method when you instantiate an object of the class.

The following creates a new `Person` object, which will automatically call the `constructor()` of the `Person` class:

    let john = new Person("John Doe");

The `getName()` is called a method of the `Person` class. Like a constructor function, you can call the methods of a class using the following syntax:

    objectName.methodName(args)

For example:

    let name = john.getName();
    console.log(name); // "John Doe"

To verify the fact that `classes` are special functions, you can use the `typeof` operator of to check the type of the `Person` class.

    onsole.log(typeof Person); // function

It returns `function` as expected.

The `john` object is also an instance of the `Person` and `Object` types:

    console.log(john instanceof Person); // true
    console.log(john instanceof Object); // true

**DIFFERENCES:** Despite their similarities, there are several differences between a class and a custom type defined by a constructor function.

1. class declarations are not `hoisted` like function declarations.

    For example, if you place the following code above the `Person` class declaration section, you will get a `ReferenceError`.

        let john = new Person("John Doe");
        // Uncaught ReferenceError: Person is not defined

2. all the code in a `class` mode runs in `strict mode` and this behavior cannot be changed.

3. class methods are `non-enumerable` whereas it's necessary to use `Object.defineProperty() ` when using the constructor/prototype pattern to make it `non-enumerable`.

4. Calling the class constructor without the `new` operator will result in an error as shown in the following example.

        let john = Person("John Doe");
        // Uncaught TypeError: Class constructor Person cannot be invoked without 'new'


---
### **PROTOTYPAL INHERITANCE**
`ES6` update introduced `prototypal inheritance` meaning that objects and methods can be shared, extended and copied.  This allows for easy inheritance of structure (data fields), behavior (functions / methods), and state (data values) and when used appropriately can save hours of coding.

**PROTOTYPAL INHERITANCE** - refers to the ability to access object properties from another object.  The JS `prototype` is used to add new properties and methods to an existing object constructor.  We essentially tell JS code to inherit properties from a prototype, and thus `prototypical inheritance` allows us to reuse the properties or methods from one JS object to another through a reference pointer function.

All JS `objects` inherit properties and moethods from a prototype:
* `Date` objects inherit from `Date.prototype`
* `Array` objects inherit from `Array.prototype`
* `Player` objects inherit from `Player.prototype`

The `Object.prototype` is on top of the prototype inheritance chain.  `Date` objects, `Array` objects, and `Player` objects all inherit from `Object.prototype`.

    Non-Prototypical                        Prototypical Inheritance

    ____________                            ___________________
    |  Animal   |   ---> A1                 | Animal prototype |   <--- A1       
    |___________|   ---> A2                 |__________________|   <--- A2
        |                                         ^
        |                                         |
        |                                         |
    ____V_______                            ______|__________
    |  DOG      |   ---> A1                 |  DOG prototype |   <--- D1       
    |___________|   ---> A2                 |________________|   <--- D2

#### GRADE SCHOOL EXAMPLE:
all squares are rectangles, but not all rectangles are squares. 

If we think about this in terms of a JS program, we could reword it: "`rectangle` is a prototype to the `square`.  The `square` inherits all the properties of the `rectangle` (i.e. four-sides and closed) while also adding a new feature (i.e. all sides are the same length)

**NOTE:** this example only works one direction.  `square` cannot be the `prototype` for the `rectangle` because not all properties of the `square` apply to the `rectangle`.  This is how prototypal inheritance works: specifying categories within a group from least specific to most.

_TIPS & TRICKS - _ in code, this concept of heirarchy and inheritance can sometimes be lost to syntax.  If this happens, **speak the relations** between objects and listen for distinctions.  When you hear "all ____ are, ***but not all ___ are***", that's where a new prototypical relationship should be added.

## TERMS & SYNTAX:
* `__proto__` - also referred to as dunder proto (double underscore proto).  In JS, every object has its own hidden, internal property, `[[Prototype]]`, which can only be accessed using the `__proto__` property.  

    Using `__proto__` calls the program to mark the template object as a hidden type.  JS objects must be linked to this prototype object.  Now, an object's properties can be access by the inheritor object:

        //using __proto__ to access and set the [[Prototype]] of "anObject"
        anObject.__proto__ = someotherObject

* `Object.create()` - can be used to replace the `new` keyword.  It can be used to create an empty object based on a defined prototype and then assign it to a different prototype:
    
        Object.create(proto, [propertiesObject])

    Object.create methods can accept two arguments: prototypeObject and propertiesObject (optional)

* `Object.prototype.constructor` - all objects have a constructor property.  If an object is created without using a constructor function, it will still have one - the constructor property will return a reference to the object's `Object` constructor function

        let o = {} o.constructor === Object // true 

        let o = new Object o.constructor === Object // true 

        let a = [] a.constructor === Array // true 

        let a = new Array a.constructor === Array // true 

        let n = new Number(3) n.constructor === Number // true

* `hasOwnProperty()` - is a method of testing if an object contains a certain prototype property.  It will return `true` or `false` depending.  This can help you clarify if an object has its own property or if it is inheriting instead:

        obj.hasOwnProperty(prop);

* The Prototype Chain - `prototypal inheritance` uses the concept of `prototype chaining`.

    Every object has a `[[Prototype]]` property which points either to another object or null.  Imagine an object C with a `[[Prototype]]` property that points to object B.  Object B's `[[Prototpye]]` property points to prototype object A.  This continues onwards, forming a kind of chain known as a **`prototype chain`**.

    This same concept is used when searching our code.  When we need to find a property in an object, it is first search for in the object.  If not found, it is searched for on that object's prototype, and so on.  Thus the entire prototype chain is traversed until the property is found or `null` is reached.


---
**constructor function**

A _constructor function_ is a method of creating new instance of a class (or Object).  Using the `new` keyword invokes the constructor which will create a new instance of that Object which includes all the properties of the prototype Object.  These properties can be set during the invocation of the constructor function.

**what is a prototype**

A _prototype_ is a Object that acts as a template for other instances of that Object.  Using a constructor function, new instances of that prototype object can be created that contain the same properties and methods (although different values for these properties may be assigned).


**what is a dunder proto**
Every object created with literal syntax or constructor function has a `[[prototype]]` property which points to the prototype object.  `[[prototype]]` is a hidden property that is only accessible to JS under the hood.  However, the `__proto__` property, also referred to as "dunder proto" for "double underscore prototype" gives us access to that prototype pointer if needed.

**synchronous vs asynchronous**
_synchronous_ code runs in a sequence.  javascript is a single threaded code that can only execute one operation at any given time.  Thus, in _synchronous_ code, each operation must wait for the previous one to complete before executing

_asynchronous_ code runs in parallel.  Although JS is single threaded, certain operations can run in the background.  Thus, an operation can occur while another one is still being processed.  Asynchronous code is preferable in situations where JS execution can be blocked indefinitely.  Examples of this are network requests, long-running calculations, etc.  Something like `setTimeout()` is executed in JS, and then when completed, is added to the callback queue, or task queue.  These are First-in-first-out data structures.  The event loop continually checks the call stack, the browser APIs, and the callback queue.  When the JS call stack is empty, empty the callback queue to the callstack.

**web api**
an _API_ or Application Programming Interface, is some king of interface which has a set of functions that allow programmers to access specific features or data of an application, OS, or other services.

a _web API_ is an API that can be accessed over the web using HTTP protocol.  It is a concept, not a technology.

**framework**
A framework is a structure that you can build software on. It serves as a foundation, so you're not starting entirely from scratch. Frameworks are typically associated with a specific programming language and are suited to different types of tasks.

Let's say you're building a house. You could pour the foundation and frame the house yourself. It would take a lot of time, but you could do it. If all of that were already done for you, though, it would save you quite a bit of effort — especially if it was done by expert home builders.

In software development, a framework serves a similar purpose. It's designed and tested by other Software Developers and Engineers, so you know it's a solid foundation.

A house isn't complete with just the framework, though. Similarly, a framework in software development is a starting point, but you add higher-level functionality to it to make it work.

**framework vs library**
Think of it like cooking some pasta. When using a JavaScript library, you simply grab the pot, pan, ingredients to make the pasta, and plates to serve. You only require only the things you need to make pasta. When thinking about a JavaScript framework, imagine an entire fully loaded kitchen. Another way to think about it can be that JavaScript libraries are like pieces of furniture that add style and function to an already constructed house. At the same time, frameworks are templates you can use to build the house itself. 

**react**
React is a JavaScript-based UI development library developed by Facebook and an open-source developer community. Although React is a library rather than a language, it is widely used in web development. The library first appeared in May 2013 and is now one of the most commonly used frontend libraries for web development.

React offers various extensions for entire application architectural support, such as Flux and React Native, beyond mere UI.

---

## resources: Look for Udemy sales for: 

“JavaScript: The Advanced Concepts (2022 Update)” by Andrei Neagoie,

“Advanced CSS and Sass: Flexbox, Grid, Animations and ..” by Jonas Schmedtmann,

“JavaScript Algorithms and Data Structures Masterclass” by Colt Steele,

“The complete React Developer course” by Andrew Mead

---

## FCC - JS section

finish basic js and es6 - _finished Jun 9_

---

## ANDREW JS BOOTCAMP

finish section 10, 11 - _finished Aug 8_

---

## COLT STEELE JS ALGORITHMS / DATA STRUCTURES

finish class up to recursion - _started Aug 9_

---

## CODING CHALLENGE: 

**NOTE:** (char is short for “character” )

Create a new string method called `announceFirstChar()` such that this will work:

    // your code here
    // now the following lines should behave like this
    const myStr = “Hi”;
    myStr.announceFirstChar();    // logs “The first char is H”

    coding challenge: (char is short for “character” )

Solution:

    String.prototype.announceFirstChar = function () {
      console.log(`The first char is ${this[0]}`);
    }
    const myStr = 'hi';
    myStr.announceFirstChar();    // logs “The first char is H” (edited) 