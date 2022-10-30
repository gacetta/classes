Unit 1

# Intro to computers, git/github, Code editor, how to study, basic pipeline to binary code, intro to html/css/js

1. download visual studio code - check
2. Research github and git - check
3. Make a github account if you don’t have one. - check
4. Look up following terms and take notes in your own words:

**machine code** - a low level programming language composed of digital binary numbers used to control a computer's CPU and run as fast as possible.
* Machine code is the lowst level of programming detail visible to programmer, though _microcode_ often exists within microprocessors to optimize code instructions

**assembly language** - a type of low-level programming language that communicates with your computer's hardware.  Unlike _machine code_, which consists of binary characters, assembly languages are designed to be readable by humans.
* translates high-level languages into machine code.

**binary** - text, computer processor instructions or any other data that uses a two-symbol system, on / off, most often symbolized by 0 and 1.

**bit** - short for **binary digits**

**byte** - 1 byte = 8 bits.  
* A string of 8 bits can represent 256 values ( 2 to the 8th power). 

**executable** - a file, program or portion of code that causes a computer "to perform indicated tasks according to encoded instructions."  Also known as "compiled" files, they are usually non-readable, non-editable, and in binary format.
* Common file formats: .BAT, .COM, .EXE, .BIN, .DMG, .APP, .ELF, and more

**program** - a set of instructions that a computer uses to perform a specific function, like a recipe.  It contains a list of ingredients (_variables_) and directions (_statements_) that show a computer how to make a dish (execute a taks)

**compile vs interpret program language**
**compiled program language** - a compiled language is translated directly into machine code allowing for immediate execution. This tends to run faster than interpreted code though requires additional time to compile whenever an edit is made and is dependent on the operating system.  It's like a translated recipe book - if the author changes the ingredients, the entire recipe book needs to be re-translated.
    
* Examples of pure compiled languages: C, C++, Erland, Haskell, Rust, Go  
    

**interpreted program language** - source code that is not directly translated by the target machine and instead by a different program.  This program, or _translator_, reads and executes the code, resulting in a slower execution speed.  However, unlike _compiled program languages_, these tend to be more flexible, have a smaller program size, and are platform independent.
* Examples of common interpreted languages: PHP, Ruby, Python, and JavaScript

**translator (or programming language processor)** - a generic term that refers to anything that converts code from one computer language to another.

**transpiler (source to source translator, source to source compiler (S2S Compiler) or transcompiler**, is a type of translator that takes source code in one programming language and converts it to equivalent source code in another programming language.  A transpiler converst bettwen source code that operates at approximately the same level of abstraction, such as python -> JavaScript, or C -> Java or Assembler

**compiler** in contrast, a compiler translates source code from a higher level programming language to a lower level programming langugage. 

**UNIX (trademarked)** - a multiuser, multitasking operating system designed for flexibility and adaptability.  It was originally developed in 1969 by employees at AT&T with newly invented C language and inspired many common OS such as LINUX and MacOS.

* Some characteristics of UNIX: 
    * use of text files for data storage
    * heirarchical files system
    * large number of small programs strung together through a command-line interpreter
    * use of shell scripts
    * the avoidance of _captive user interfaces_

**captive user interface (or CUI)** - a style of interaction with an application that exists outside the scope of the highest-level command interpreter present on the system.  Once you invoke an application from the command interpreter, it is not possible to communicate with the command interpreter until the application exits.  Essentially, the user is held captive in the program.  Also considered slow since a human is drastically slower than a computer.

**command line** - a text interface with the computer that communicates with the system using only a keyboard, such as terminal on mac.  Takes commands such as `cd`, `ls`, `mkdir`, `touch`, `rm`, and others

**PATH** - a string of characters that denotes a unique location of a file or program in a directory structure.  Folders are separated by directory separator.  For example `User/Gacetta/Downloads` is the _PATH_ to the downloads folder

**bash, zsh** - both _bash_ and _zsh_ are command languages that run in terminal.
* **bash** is a _UNIX_ shell - was the default for macOS until Catalina and is an acronym for "Bourne Again Shell" as _bash_ replaced the previous _Bourne Shell_.  
* **zsh** is an improved version of _Bourne shell_ and _BASH_.  Now the default shell for macOS, the name _zsh_ is derived from the name of Yale professor Zhong Shao

**node.js** - is an open-source, cross-platform, runtime environment for server-side JavaScript applications.

**brew, or Binary Runtime Environment for Wireless** is free and open-source application development platform developed by Qualcomm for CDMA (code division multiple access) based mobile phones.
* Brew applications are written in C or C++.  

**command line flags** - a method of specifying options for a command-line program.
    * in `wc -l` the `-l` is a command-line flag.  
    * "arguments", "options" and "switches" are likely to be used interchangeably.  A "flag" specifically is a boolena argument.  Inclusion of the flag/option/argument counts as "true" and excluding it counts as "false"
    * there are short versions with single characters preceded by a single hyphen `-` 
    * there are long versions of full world flags preceded by a double hyphen `--`

**HTML (or Hyper Text Markup Language)** - a standardized markup language for web page creation.  It allows the creation and structure of sections, paragraphs, and links using HTML elements (the building blocks of a web page) such as tags and attributes.

**CSS (or Cascading Style Sheets)** - a language for specifying how documents are presented to users - how they are styled, laid out, etc.

**code editor** -  a text editor that is specifically designed for writing source code, which may be a stand alone program or part of an **IDE** or _integrated development environment_.
* some common code editors: vs code, atom, sublime, vim


**function declaration** - is a method of creating a function using the `function` keyword.  These can also be referred to as **NAMED FUNCTIONS**.  

* `function doStuff() {};`

**function expression** - is a method of creating a function by assigning it to a variable.  Although the variable has a name, these functions are also referred to as **ANONYMOUS FUNCTIONS**.  The `function` keyword may be omitted and use arrow function syntax.

* `const doStuff = function() {};`  
* `const doStuff = () => {};`

**Hoisting** refers to the availability of functions and variables "at the top" of your code, as opposed to only after they are created.  The objects are initialized at compile time and available anywhere in your file.  Function declarations **ARE** hoisted but function expressions **ARE NOT**.

function declaration (no errors):
```
doStuff();
function doStuff () {};
```

function expression (throws an error):
```
doStuff();
const doStuff = () => {};
```

### Make a general statement using your words including the concepts "low-level language", "high-level language", "binary", "assembly code", "javascript". If you don't know the terms, research and take notes
___
A **low-level programming language** , such as **machine code**, is a programming language can be used to give instructions to a computer.  It is composed of **binary** characters and may be executed directly on computer hardware quickly and without translation.  **Assembly code** is another low-level language that communicates with computer hardware, however it is written in language understandable by humans, rather than binary.  **JavaScript** is a **high-level programming language** that is greatly abstracted from the details of a computer.  It's easier to understand than **machine code**, using natural language elements to make program development easier, more efficient and more understandable.
___
### Another one using "ES (or EcmaScript)", "browser", "javascript engine", "babel", "transpiler" 
___
**EcmaScript** is a scripting standard for **browser** developers to implement that insures operability of web pages across many web browsers.  **JavaScript** is the most popular scripting language that conforms to the ES standard and is executed within a **JavaScript Engine**, such as V8 (Node.js is a Javascript runtime environment that is built on the V8 javascript engine).  ES is updated annually which results in old browsers that lack support of new ES syntax.  The solution to this is to use a **transpiler**, such as **Babel**, to translate source code into equivalent code that will execute properly.  For example, Babel might be used to translate code written in Javascript with ES10 standards, to JavaScript with ES5 standards that would allow older browsers to process the code properly. 

7. Spend some time using command line basic commands like ls, pwd, cd, cp, touch, mkdir etc.. Do not use rm for now (it deletes stuff) - check

8. connect to gitHub by setting up an SSH https://docs.github.com/en/authentication/connecting-to-github-with-ssh. Try it on your own first, but most likely you may want help on slack for help. - check

9. Research best way to take notes (recommended way is to write .md files and store them in github) **FIX NOTES REPO**

10. Purchase (when there is a sale!) Udemy “The Modern JavaScript Bootcamp” https://www.udemy.com/course/modern-javascript/, go up to end of section 5. - check

11. Register for CSX https://csx.codesmith.io/home and finish to end of Precourse - Part 1 - check

12. Register for freeCodeCamp at https://www.freecodecamp.org/ and start the first unit, “(New) Responsive Web Design” and finish the first 2 courses, “Learn HTML by Building a Cat Photo App” and “Learn Basic CSS by Building a Cafe Menu” - check

13. Go to easy-series codesmith remote lectures https://app.codesmith.io/coding-events

---
## Unit 1 Requirements
---
- created a github account, connected to local machine via SSH and have made at least 1 repo

- have pushed study notes and algos into github regularly through a code editor like VSCode

- at least 5 `#code-reviews` (must have at least 1 of each type [html, css, js])

- have used the command line regularly to navigate through files and use CLI tools like git

- have asked questions on slack (or posted a #show-and-tell with learnings)