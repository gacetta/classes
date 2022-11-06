# Continue html/css, on to JS array methods, vanilla js DOM manipulation

1. Do a mock algo interview with me or anybody at a higher assignment level currently. Learn about how to clarify requirements (input/output), how to talk and pseudocode and write code, etc.. and use this technique to do all algo challenges going forward (talk to yourself!)

2. Start using `conventional commits`. It can be loose, but all of your git commit messages should start with something like “feat: ” or “add: ” or “chore: ” etc...

3. Look up following terms and take notes in your own words:

   - **Be familiar with names of other popular computer languages**
   Pure Compiled Languages: C, C++, C#, Erlang, Rust, Haskell, Go, Fortran, Pascal, Scala, Lisp, 
   Interpreted languages: PHP, Ruby, Python, JavaScript, Perl/Raku, Tcl
   Both(?): Java, Objective-C, 
  
  **Python**  
    * artificial intelligence, data science, and machine learning processes.  
    * extensive libraries and frameworks
    * "king of programming languages."  
    * Companies using Python: intel, facebook, spotify, netflix, etc.
  **Java**  
    * desktop apps, mobile apps, web development, AI, cloud apps and more.  
    * platform independence
    * object-oriented programming
    * most secure language
    * Companies using Java: Amazon, Adobe, Flipkart, Instagram, etc.
  **JavaScript**  
    * web-based.  more than 97% of websites use JS on client-side of webpage
    * platform independence
    * Companies using JavaScript: Microsoft, Uber, PayPal, Google, Walmart, etc.
  **Kotlin**  
    * language used to develop apps.
    * Used by 60% of android developers.
    * 100% interoperable. 
    * Companies using Kotlin: Pinterest, Uber, Trello, Amazon, etc.
  **R**
    * language used for statistical and graphical programming.
    * Used by statisticians and data miners for data analysis.
    * Important for data analysis, financial domans and telecom sectors.
    * object-oriented programming language
    * cross-platform support
    * highly extensible
    * companies using R: Flipkart, Amazon, Google, LinkedIn
  **PHP**
    * general-purpose scripting language
    * faster than other scripting languages
    * highly secure
  * **Go** 
    * reliable and efficient programming language
    * designed at google in 2007
    * supports automation
    * facilitates AI and data science processes
    * Companies using Go: Google, BBC, Medium, Uber
  **C**  
    * general-purpose programming language.
    * works efficiently on games, graphics and enterprise applications
    * extendable
    * enhanced speed and efficiency
    * Companies using C: GitHub, Telegram messenger, MasterCard, etc.
  **Swift**
    * robust programming language developed by Apple
    * used to create apps for iOS, watchOS, macOS, and more
    * speeds development process
    * enhanced performance
    * dynamic libraries
    * Companies using Swift: Apple, Instragram, Uber, Slack
  **C#**
    * programming language that runs on .NET framework and is developed by Microsoft
    * effective for desktop applications and games
    * fully integrated with .NET libraries
    * Companies working on C# are Microsoft, Stack Overflow, Accenture, Alibaba Travels


  - **Dynamically typed languages vs statically typed languages**

  A language is **statically-typed** if the type of a variable is known at compile time instead of run time.  In a statically typed language, once a variable has been declared with a type, it cannot ever be assigned a variable of another type.  The advantages of statically typed languages are many errors are caught in the early development stages, and, more importantly, it results in compiled code that executes more quickly because the compiler knows the exact data types and can produce optimized machine code.
  - Common examples of statically typed languages: Java, C, C++, C#, FORTRAN, Pascal and Scala.  

  A language is **dynamically-typed** if the type of a variable is checked during run-time. In dynamically typed languages, variables can be initialized with a value of a certain type but reassigned a value of a different type while during program execution.  It usually results in less optimized code than static type checking and includes the possibility of run time type errors.  This forces run time checks to occur for every execution of the program instead of once at compile-time.
  - Common examples of dynamically typed languages: JavaScript, Objective-C, PHP, Python, Ruby, Lisp,and Tcl

  - **Function vs Method**

  A **function** is a set of instructions that perform a task.  It can be passed arguments (including other functions as arguments) and can return values (or return functions), though neither arguments or return value are required.  

  A **method** is a function that is associated with an object. It is mostly identical to a function except for two differences: it is implicitly passed the object on which it is called, and it is able to operate on data that is contained within the class.  

  An interesting mnemonic: 
  * **F**unction --> **F**ree (free meaning it can be anywhere, no need to be in an object or class)
  * **M**ethod --> **M**ember (a member of an object or class)

  - **Function Declaration vs Function Expression (specifically in js)**

  A **function** is a set of instructions that perform a task.  It can be passed arguments (including other functions as arguments) and can return values (or return functions), though neither arguments or return value are required.  

  A **method** is a function that is associated with an object. It is mostly identical to a function except for two differences: it is implicitly passed the object on which it is called, and it is able to operate on data that is contained within the class.  

  An interesting mnemonic: 
  * **F**unction --> **F**ree (free meaning it can be anywhere, no need to be in an object or class)
  * **M**ethod --> **M**ember (a member of an object or class)

  **Function Declaration vs Function Expression (specifically in js)**

  **FUNCTION DECLARATION**
  When you create a function with a _name_ that is a function declaration. The name may be omitted in a **FUNCTION EXPRESSION**, making that function "anonymous"  

  Function declaration:  

    `function doStuff() {};`

  Function expression (with a name):

    `const doStuff = function () {};`

  Anonymous function:

    `const doStuff = () => {};`

  **Hoisting** refers to the availability of functions and variables "at the top" of your code, as opposed to only after they are created.  The objects are initialized at compile time and available anywhere in your file.  
  **NOTE:** _Function declarations_ **ARE** hoisted.  _function expressions_ **ARE NOT** hoisted.

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

  **IIFE or Immediately Invoked Function Expressions** are functions that are created at the same time they are created.  

  `(function() => {})()` or `(() =>{})()`

  *A CASE FOR USING FUNCTION EXPRESSIONS*
  Callback functions - if you don't need a function available for your entire application (such as in forEach() or filter()), its better to use function expressions to limit where the function is available and, thus, keep your global scope light and maintain clean syntax.

  - **Frontend vs backend**
  Front-end and back-end development are the two types of web development.

  **Front End** (or "client side") is built with the user in mind. It focues on coding and creation of elements/features that will be seen by the user.  It brings to life the visual elements of a website, making sure it is easy to interact with while operating smoothly.  Work with UX and UI designers to create a clean, well functioning site.

  FE devs may also use graphic design programs like Photoshop or Illustrator in addition to editing tools like notepad or eclipse

  Front-end works with elements such as:
  Buttons, Layouts, Navigation, Images, Graphics, Animations, Content Organization. 

  Front-end uses these languages to help shape the user experience: HTML, CSS, and JS.  Front-end often uses frameworks: Angular, Ember, Backbone and React

  **Back End** (or "Server Side") focuses on the side of the website the user cannot see, the part that makes the site interactive.  A site like Instagram needs a place to store all their users' info and thus, needs to interact with a database.  These databases are run from a server.  Back end devs help manage these databases and store content on them, ensuring the front end elements continue to function properly.

  Back-end works on tasks such as:
  Building code, troubleshooting and debugging web apps, database management, framework utilization

  BE consists of a server which provides data on request, the application which channels it, and the database which organizes the information.  The core concern of BE devs is creating applications that can find a deliver data to the front end.  Many use reliable enterprise-level databases such as: Oracle, Teradata, Microsoft SQL Server, IMB DB2, EnterpriseDB, SAP Sybase ASE.

  _Backend-as-a-service (Baas)_ is a new viable alternative that is especially useful when developing mobile apps and working within a tight schedule.

  **FE vs BE Differences**
  1. FE and BE devs work on different sides of the website: FE on the visual elements seen by the user (AKA Client Side).  BE on the side which the user cannot see (AKA Server Side).  Together they create a **Dynamic Website**

  2. FE and BE devs have different strengths and work in different languages.  
  FE: HTML, CSS, JS as well as frameworks/libraries: AngularJS, React.js, jQuery, Sass.  
  BE: PHP, C++, Java, Ruby, Python, JS, Node.js as well as frameworks: Express, Django, Rails, Laravel, Spring

  **FULL STACK = FE & BE**
  'as a general rule, full-stack development by a single programmer isn't a practical solution'.  However, they are powerful team players because they have the breadth of knowledge to see the big picture, letting them suggest ways to optimize the process or remove roadblocks that might be slowing down the system.

  - **block scoping**
  Scoping can be complicated.  There are three types of scope in JS: `global scope`, `function scope`, `block scope`.  

  Variables that are declared outside all functions in the `global execution context` or `global scope` are known as `global variables`.  They are accessible anywhere.

  Variables that are declared inside a function, or `function scope` are known as `local variables`.  They are accesible anywhere inside the function.

  A variable that is declared inside a specific block & can't be accessed outside of that block has `block scope`.  Only `let` and `const` are block scoped variables.  `var` is not bound by block-scoping.

    {
      let phrase = 'this is block-scoped';
      var words = 'not I!';
    }

    console.log(phrase) //Uncaught ReferenceError: phrase is not defined.
    console.log(words) ?? 'not I!'

  - **DOM, event listeners**
  **DOM (Document Object Model)** is the structure of an HTML site.  It is constructed as a tree of objects.  From this object model, JS gets all the power it needs to create dynamic HTML:

  JS can:
  - modify, remove or add HTML elements and attributes in the page
  - modify all the CSS styles in the page
  - react to all existing HTML events in the page
  - create new HTML events in the page

  **Event listeners** is a function in JS that allows an action to be tied to an event, such as a mouse click, or leaving the window.  Event listeners are used in connection to the DOM to modify HTML and CSS.

  `document.addEventListener()` 

4. for quick javascript scratch notes, get used to opening a browser, typing in “about:blank” in the url bar, then opening the dev tools (look up shortcuts). Chrome or firefox is recommended - `check`

5. Make a general statement using your words including the concepts “low-level language”, “high-level language”, “binary”, “assembly code”, “javascript”. If you don’t know the terms, research and take notes.

A **low-level programming language** , such as **machine code**, is a programming language can be used to give instructions to a computer.  It is composed of **binary** characters and may be executed directly on computer hardware quickly and without translation.  **Assembly code** is another low-level language that communicates with computer hardware, however it is written in language understandable by humans, rather than binary.  **JavaScript** is a **high-level programming language** that is greatly abstracted from the details of a computer.  It's easier to understand than **machine code**, using natural language elements to make program development easier, more efficient and more understandable.

6. Order the following from low to high level languages [c++, javascript, binary, assembly code]
1. binary - 0s and 1s
2. assembly code - basically binary / machine code that is readable by humans
3. c++ - mid level statically typed compiled language
4. JavaScript - high level dynamically typed interpreted language.

7. Which of the following does not belong? C, Python, Go, `Git`, Java, Bash
`Git` is a version control system
C, Python, Go, Java, and Bash are all programming languages

8. Javascript is often referred to as a client-side language. Research this in detail until you can briefly explain how js (short for javascript) is compiled OR interpreted by the browser until it turns into binaries.

**JS** is an interpreted language, meaning it isn't compiled before runtime.  For **JS** code to run, the **browser** has two main jobs: First it's a **rendering engine** (blink for chrome) that deals with rendering the source code, DOM tree, styles, events and integration into the **JS Engine**.  Secondly, it's a **JS Engine** (V8 for chrome) that executes and compiles the **JS code** into native machine code.

Once the **browser** has downloaded the source code, it runs it through a **scanner** which converts the code into a list of `tokens`.  Then the **parser** takes the list of tokens and creates an Abstract Syntax Tree which is a representation of the source code.

This AST is then sent to the **interpreter** (Ignition for chrome) where it is converted to bytecode.  When a function is repeated often, a **compiler** produces optimized binary machine code for even greater running efficiency.

9. freeCodeCamp - continue next modules up to end of “Technical Documentation Page” project

10. Continue “Modern Javascript Bootcamp” to end of section 8 (DOM manipulation). From here on, always research libraries before installing and following commands. node packages change daily, so no tutorial will ever be “caught up” with the current package. live-server for example is now a vsCode extension and is not necessary to install as a node package. When you’re not sure, ask in slack!

11. Continue CSX until end of “Functions and Execution Context”

12. purchase Udemy class "Advanced CSS and Sass: Flexbox, Grid, Animations and .." by Jonas Schmedtmann on sale

## Requirements before unit interview
- have done a mock interview with somebody
- continued to take notes and push to github now using conventional commits
- have posted at least 5 #code-reviews
- have been onboarded as a “code-reviewer”
  1. overview of what to look for
  2. shadow
  3. reverse-shadow
- haved posted a few questions / answer a few questions

# code-reviewer onboarding (starting unit 2)
## attitude
- always use a positive tone
- use pronouns “we” instead of “you”. ex. “We're declaring this variable with a name that isn’t super clear. Can we try changing that to something like ‘getArray’?”
  - in any group effort, it’s important to remember that code is shared and individual merit (or blame) is not too stressed
- say the good stuff first, then list feedback with bullet points
- use nit if something isn’t a huge deal
## technical
- read the code and take note of general tendencies first
  - is the code clear?
  - do you know what’s happening in each line?
  - is the clarity coming from good names?
  - avoid bad naming + overcommenting
- const till you can’t
- function names, variable names, even inner callback param names should be looked at closely
  - function names should be verb + dataType most of the time. Not nouns
- if you don’t understand something, it’s a great idea to say “hey I don’t know what’s quite happening in lines 3-7. Can you explain that to me?” This doesn’t have anything to do with the level of code that’s being reviewed. Sometimes, we need more context before we start reviewing
- I’ll try to look at most reviews you do. when in doubt, tag me and we can start a group discussion about pros and cons!
## next steps
- schedule a shadow zoom
- schedule a reverse shadow zoom
- try it on your own!