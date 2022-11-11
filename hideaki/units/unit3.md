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

- **`system programmer`** - Systems programmers oversee an organization's hardware and software to help the components function together properly as a system and allow team members to complete their job responsibilities. Systems programmers often require technical, managerial and organizational skills because their work affects all employees in an organization. 

In the IT department of a large organization, `systems programmers` are technical experts on some or all of the computer's system software (operating systems, networks, DBMSs, etc.). They are responsible for the efficient performance of the computer systems.

- **file system** - is a method and data structure that an OS uses to control how data is stored and retrieved.  Without a file system, data placed in a storage medium would be one large body of data with no way to tell where one piece of data stopped and the next began. It wouldn't be possible to find out where a piece of data was stored.  By separating the data in to smaller pieces and giving each piece a name, the data are easily isolated and located.

- **command line interface** - is a text-based interface that allows the user to enter commands in the form of text.  Old examples are MS-Dos, but commond place is the terminal in Mac OS which runs BASH or ZSH.  

- **kernel** - is a computer program that is at the core of a computer's OS.  Generally it has complete control over everything in the system.  It is the portion of the OS that is always resident in memory and facilitates interactions between hardware and software components.  It is typically one of the first programs loaded on start-up after the bootloader and helps handle the rest of startup.

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

9. Make a statement using “ES (or EcmaScript)“, “browser”, “javascript engine”, “babel”, “transpiler”

10. Be able to add the `os` (or operating system) into the narrative for explaining how computers work

11. Be able to explain the difference between a `for loop`, `while loop`, `for in loop`, `for of loop`, `forEach` and the pros and cons of each. Your js should be `declarative` from this point forward.

12. Be able to articulate the inputs and outputs of the array methods `forEach`, `map`, `filter`, `reduce` (expect to spend a ton of time on reduce!)

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