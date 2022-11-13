# Unit 3 - In depth html/css, understand how to choose the right looping tools

Note - when you get to `array.reduce()`, ask for practice problems in slack!

1. important terms:
  
-  **`imperative` vs `declarative` (for loop vs Array.forEach)**

  `imperative programming` is a programming paradigm that describes HOW a program should do something by giving explicit step-by-step instructions.
  `for loop` is a good example of imperative programming

  `declarative programming` is a programming paradigm that describes WHAT a program does, without explicitly specifying its control flow.
  `Array.forEach()` is a good example of declarative programming

  Good example:  
  Declarative Programming is like asking your friend to draw a landscape. You don’t care how they draw it, that’s up to them.

  Imperative Programming is like your friend listening to Bob Ross tell them how to paint a landscape. While good ole Bob Ross isn’t exactly commanding, he is giving them step by step directions to get the desired result.

- **`operating system`**  
  Computers used to be punch cards.  Operators would manually insert the punch cards into the computer and then add the next one when the program completed running.  `Operating systems` are programs that were initially developed to replace the manual task of feeding the computer a program.  It would give the computer a stack of programs to run, when one was complete, the next would automatically and near-instantly start to run.  This was known as `batch processing`.  

  There was also a difficulty sharing code between various computers, as all were configured differently. This also included monitors, keyboards, printers (devices known as `peripherals`), since interfacing was very `low level` and specific to each peripheral.  OS became intermediaries between software programs and hardware peripherals.  They did this by providing device drivers which allowed programmers to talk to common input and output hardware (I/O) using standardized mechanisms.

  `Multitasking` is another aspect that the operating system manages.  It maximizes use of the CPU by queueing up appropriate tasks so there is little or no downtime.

  `virtual memory` is yet another aspect that the operating system manages.  This allows programs to assume their memory always starts at address 0 keeping things simple and consistent, while the OS abstracts and hides the actual memory locations.  Isolating the memory also protected the computer from a program going awry and messing with all the memory.  It would only harm it's own allocated memory.  This was known as `memory protection`.
  **First computer and OS to offer virtual and protected memory:** ATLAS

  `time sharing` was another aspect of OS.  When a computer had multiple terminals, and thus multiple users, the OS would allow each user only a small fraction of the computers processor / memory, etc.  Even 1/50th of the power, was more than sufficient.
  **most influential early time-sharing operating systems**: Multics (Multiplexed Information and COmputing Service)

  `UNIX` - Dennis Richie and Ken Thompson.  Separate the OS into two parts - 1. core functionality like memory management, multitasking, and dealing with I/O (the `kernal`). 2. Other goodies that weren't part of the kernal, things like programs and libraries.  This leaner program required less memory and could be run on more computers.

  **Windows:** introduced 1985

- **`system programmer`** - Systems programmers oversee an organization's hardware and software to help the components function together properly as a system and allow team members to complete their job responsibilities. Systems programmers often require technical, managerial and organizational skills because their work affects all employees in an organization. 

In the IT department of a large organization, `systems programmers` are technical experts on some or all of the computer's system software (operating systems, networks, DBMSs, etc.). They are responsible for the efficient performance of the computer systems.

- **file system** - is a method and data structure that an OS uses to control how data is stored and retrieved.  Without a file system, data placed in a storage medium would be one large body of data with no way to tell where one piece of data stopped and the next began. It wouldn't be possible to find out where a piece of data was stored.  By separating the data in to smaller pieces and giving each piece a name, the data are easily isolated and located.

- **command line interface** - is a text-based interface that allows the user to enter commands in the form of text.  Old examples are MS-Dos, but commond place is the terminal in Mac OS which runs BASH or ZSH.  

- **kernel** - is a computer program that is at the core of a computer's OS.  Generally it has complete control over everything in the system.  It is the portion of the OS that is always resident in memory and facilitates interactions between hardware and software components.  It is typically one of the first programs loaded on start-up after the bootloader and helps handle the rest of startup.

**NOTE:** `kernal panic` - early UNIX didn't have error management built in to the OS to reduce its size.  If an error did occur, it would enter a routine called `panic`, crash the machine and require a reboot.  Originally it would print the word 'panic' and enter an infinite loop.

A full kernal: 
- controls hardware resources (I/O peripherals, memory, cyrtography) with device driver
- arbitrates conflicts between processes concerning such resources
- optimitzes usage of resources such as CPU, cache, file systems and network sockets.

***Good resource for OS information: https://www.youtube.com/watch?v=26QPDBe-NB8***

2. freeCodeCamp - finish all remaining tasks in Responsive Design (html and css)

3. freeCodeCamp - start JavaScript Alrogithms and Data Structures section up to end of “Basic Data Structures”(first few sections will be review, but that’s ok). For the Regex section, no need to memorize anything! Just do the exercise once and take notes and don’t get too caught up in it (be aware of what it does)

4. Do a few mock interviews with js algorithms. Make sure you are communicating, and make the mock interview flow a part of everyday studying.

5. If you haven’t already, purchase Udemy class `“Advanced CSS and Sass: Flexbox, Grid, Animations and ..“` by Jonas Schmedtmann and go to end of Section 4 - ***CHECK***

6. https://www.youtube.com/watch?v=ohJcZW60br0 (post-css) tutorial to understand the difference between css, sass, and post-css

7. CSX - complete up to “Closure, Scope & Execution Context”, and attend related lectures

8. Udemy - Modern Javascript Bootcamp complete Section 9 “Expanding Our JS knowledge” (ternary, errors)

9. ***Make a statement using “ES (or EcmaScript)“, “browser”, “javascript engine”, “babel”, “transpiler”***
`Javascript`, also called `EcmaScript`, is a programming language used mainly in web applications.  It is a high-level dynamically typed language, meaning it isn't compiled before runtime.  Each web browser contains a `javascript engine`, which is the inner mechanism that parses, compiles and renders the html, css and javascript code into a visible and usable web page.  The JavaScript language is standardized by the EcmaScript conventions so that all web browsers display code in a uniform manner.  There was a big update to these standards in 2015 when ES6 was introduced, bringing `let` and `const` which are block-scoped variables into the mix.  `babel` is a `transpiler` that can convert modern JavaScript (currently ES13) to standard ES5 syntax that is more widely usable.  

10. **Be able to add the `os` (or operating system) into the narrative for explaining how computers work.**
From a historical standpoint, the earliest computers were fed data using punch cards.  These cards would be created/punched/"programmed" by humans that would punch out specific patterns into the cards and feed them into the computer.  Essentially these punch cards were full of binary data.  0/1.  Punch/No-Punch.  8 of these binary digits, or bits, created a byte.

As computers got faster, the human element became the bottle neck that slowed things down, so methods were devised to make data entry more efficient.  One method was the creation of an assembly language.  This was a language that helped speed up the human element of passing data into the computer.  Although viewed as incredibly low-level and nearly unreadable nowadays, at the time it was cutting edge.  Along with the development of assembly languge, came the Operating System, which allowed a bunch of data to be entered into the computer at once, say 50 programs.  With this batch processing, as soon as one program was completed, the OS would automatically and near-instantly start the next program.  

The role of the OS expanded to include manging peripherals (I/O), multi-tasking to maximize CPU usage, managing memory allocation and protection, and time-sharing for multiple users / applications to name a few.  The core of these OS tasks is known as the `kernal`

Just as OS grew, so did programming languages.  Assembly code was improved upon, with languages like B, then C.  These low-level statically typed compiled languages helped in the creation of assembly code.  Languages progressed to be even more abstract, such as JavaScript.  JS, a dynamically typed interpreted language, is implemented behind the scenes using C++.  You can see the progression of language.

11. Be able to explain the difference between a `for loop`, `while loop`, `for in loop`, `for of loop`, `forEach` and the pros and cons of each. Your js should be `declarative` from this point forward.
- `for loop`: very imperative programming, akin to the way C++ works.  PRO: very standard syntax, helpful for iterating through arrays, can be broken with a `return` statement.  CONS: imperative, can make for messy code, or off by 1 issues.
- `while loop`: can be either imperative or declarative depending on the condition.  PRO: provides much more flexibility with looping, can be broken with `return` statement.  CONS: very easy to create infinite loops
- `for...in loop`: declarative programming used to loop through the properties of an object. PRO: declarative, easiest way to iterate through an object, can be broken with a `return` statement.  CON: easily confused with `for...of loop`
- `for...of loop`: declarative programming used to loop through an array or a string.  PRO: declarative, can be broken with a `return` statement.  CON: `forEach()` is more often used.
- `forEach`: declarative Array.method used to loop through an array. PRO: declarative, concise and clear. CON: cannot be broken with a `return` statement.  Must iterate through EVERY single element.

12. Be able to articulate the inputs and outputs of the array methods `forEach`, `map`, `filter`, `reduce` (expect to spend a ton of time on reduce!)

- `Array.forEach(callback(element, index, array))`.  `forEach()` is passed a callback function that is invoked "for each" element in the array.  A `return` statement does not break the loop.
INPUT: callback function to run on each element (like a loop)
OUTPUT: none (`undefined`)
- `Array.map(callback(element, index, array))`.  `map()` is passed a callback function that is invoked on each element in the array.  The evaluated result is "mapped" to the same index on a new array that is returned after populating the array with all the evaulated results.
INPUT: callback function to run on each element to potentially modify every value
OUPUT: a new array with the same number of elements as the initial array
- `Array.filter(callback(element, index, array))`. This method "filters" an array by returning a shallow copy of the array that is the same size or smaller.  `filter()` is passed a callback function that is invoked on each element in the array.  A shallow copy of the array is returned populated only with elements that evaluate to truthy when the callback function is invoked.
INPUT: callback function to run on each element to filter down the array
OUTPUT: a shallow copy of the array with the same number of elements or less.
- `Array.reduce(callback(accumulator, currentValue, currentIndex, array), initialValue)`.  This is the most flexible and complicated Array method.  Like, `map, filter, forEach`, it is passed a callback function that is used to reduce the array to a single value of any type .  This could be the sum of all elements, or an array that contains all the elements + 10, or an array that contains only the elements that start with 't', or a boolean if all elements are strings, or an object that counts how many appearances of each element there is.  It has much more flexibility than any other array method.
INPUT: callback function to run on each element
OUPUT: a single value of any type - very flexible function

## Requirements before unit interview
- have done at least 2 `#mock_interviews`
- continued to take notes and push to github
- have posted at least 5 `#code-reviews`
- have started reviewing others in `#code-reviews`
- have completed reduce exercises
- have posted a few questions / answered a few questions
- have been onboarded as a “mock-interviewer”
  1. overview
  2. shadow
  3. reverse-shadow