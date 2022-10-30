# assignment-2

As usual, google anything that you don’t understand. Of course, if the question itself is badly worded and you don’t understand the assignment, I’ll be happy to clear that up!
## Important terms (look up and take notes)

**CLI (command line interface) or command line tools vs GUI**

A **command line interface (CLI)** is a text-based **user interface (UI)** used to operate software and operating systems.  A user interacts with a system using **command line tools** (common examples: `cd`, `pwd`, `ls`, `mkdir`, `git`, etc.).  Thus, the user can respond to visual prompts by typing single commands into the interface and receiving a reply in the same way.  By contrast, a **graphical user interface (GUI)** allows a user to interact with software and operating systems using graphical icons and audio indicatros.  They are more intuitive and easier to use than a text-based UI.

**Git vs gitHub and version control**

**version control** is essentially a save program for your project.  It tracks and logs the changes made to a file over time which gives you the power to restore earlier versions.  **git** is a version control system installed and maintained on your local system (thus can be used completely exclusive of any cloud-based hosting service) that is free, easy to use and works well with text files.  It uses a _branching_ model that makes it easy to try new ideas, set aside branches, jump back to earlier branches and merge, delete or recall branches.  **GitHub** is a cloud-based hosting service that lets you manage _git_ repositories (repos).

**Be familiar with names of other popular computer languages:**
* **Python**  
    * artificial intelligence, data science, and machine learning processes.  
    * extensive libraries and frameworks
    * "king of programming languages."  
    * Companies using Python: intel, facebook, spotify, netflix, etc.
* **Java**  
    * desktop apps, mobile apps, web development, AI, cloud apps and more.  
    * platform independence
    * object-oriented programming
    * most secure language
    * Companies using Java: Amazon, Adobe, Flipkart, Instagram, etc.
* **JavaScript**  
    * web-based.  more than 97% of websites use JS on client-side of webpage
    * platform independence
    * Companies using JavaScript: Microsoft, Uber, PayPal, Google, Walmart, etc.
* **Kotlin**  
    * language used to develop apps.
    * Used by 60% of android developers.
    * 100% interoperable. 
    * Companies using Kotlin: Pinterest, Uber, Trello, Amazon, etc.
* **R**
    * language used for statistical and graphical programming.
    * Used by statisticians and data miners for data analysis.
    * Important for data analysis, financial domans and telecom sectors.
    * object-oriented programming language
    * cross-platform support
    * highly extensible
    * companies using R: Flipkart, Amazon, Google, LinkedIn
* **PHP**
    * general-purpose scripting language
    * faster than other scripting languages
    * highly secure
* **Go** 
    * reliable and efficient programming language
    * designed at google in 2007
    * supports automation
    * facilitates AI and data science processes
    * Companies using Go: Google, BBC, Medium, Uber
* **C**  
    * general-purpose programming language.
    * works efficiently on games, graphics and enterprise applications
    * extendable
    * enhanced speed and efficiency
    * Companies using C: GitHub, Telegram messenger, MasterCard, etc.
* **Swift**
    * robust programming language developed by Apple
    * used to create apps for iOS, watchOS, macOS, and more
    * speeds development process
    * enhanced performance
    * dynamic libraries
    * Companies using Swift: Apple, Instragram, Uber, Slack
* **C#**
    * programming language that runs on .NET framework and is developed by Microsoft
    * effective for desktop applications and games
    * fully integrated with .NET libraries
    * Companies working on C# are Microsoft, Stack Overflow, Accenture, Alibaba Travels


**Dynamically typed languages vs statically typed languages**

A language is **statically-typed** if the type of a variable is known at compile time instead of run time.  In a statically typed language, once a variable has been declared with a type, it cannot ever be assigned a variable of another type.  The advantages of statically typed languages are many errors are caught in the early development stages, and, more importantly, it results in compiled code that executes more quickly because the compiler knows the exact data types and can produce optimized machine code.
* Common examples of statically typed languages: Java, C, C++, C#, FORTRAN, Pascal and Scala.  

A language is **dynamically-typed** if the type of a variable is checked during run-time. In dynamically typed languages, variables can be initialized with a value of a certain type but reassigned a value of a different type while during program execution.  It usually results in less optimized code than static type checking and includes the possibility of run time type errors.  This forces run time checks to occur for every execution of the program instead of once at compile-time.
* Common examples of dynamically typed languages: JavaScript, Objective-C, PHP, Python, Ruby, Lisp,and Tcl

**Function vs Method**

A **function** is a set of instructions that perform a task.  It can be passed arguments (including other functions as arguments) and can return values (or return functions), though neither arguments or return value are required.  

A **method** is a function that is associated with an object. It is mostly identical to a function except for two differences: it is implicitly passed the object on which it is called, and it is able to operate on data that is contained within the class.  

An interesting mnemonic: 
* **F**unction --> **F**ree (free meaning it can be anywhere, no need to be in an object or class)
* **M**ethod --> **M**ember (a member of an object or class)

**Function Declaration vs Function Expression (specifically in js)**

**FUNCTION DECLARATION**  
When you create a function with a _name_ that is a function declaration.  
`function doStuff() {};`

The name may be omitted in a **FUNCTION EXPRESSION**, making that function "anonymous"  

* `const doStuff = function () {};`  is an example of a function expression with a name.
* `const doStuff = () => {};` is an example of an _anonymous_ function 

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

**IIFE or Immediately Invoked Function Expressions** are functions that are created at the same time they are created.  

`(function() => {})()` or `(() =>{})()`

*A CASE FOR USING FUNCTION EXPRESSIONS*
Callback functions - if you don't need a function available for your entire application (such as in forEach() or filter()), its better to use function expressions to limit where the function is available and, thus, keep your global scope light and maintain clean syntax.



**Front-end vs back-end. Research this for about 30 minutes (no more than that) using multiple resources while writing any questions about this topic**
Front-end and back end development are the two different types of web development

FRONT END
build with the user in mind.  Focuses on coding and creation of elements / features that will be seen by the user.  Can also be thought of as "client side" of an application.  Bring to life the visual elements of a website, make sure it is easy to interact with while operating smoothly.  Work with UX and UI designers to create a clean well functioning sites.  

Front end could be building static website with fixed content that doesn't allow users to perform any interactive tasks.

FE devs may also use graphic design programs like Photoshop or Sketch or Illustrator in addition to editing tools like Notepad or Eclipse

Front end build elements like:
Buttons, Layouts, Navigation, Images, Graphics, Animations, Content organization.

Languages that help shape the user experience: HTML, CSS, JavaScript.  These take into consideration interactive experiences of the user.  Front-end frameworks such as Angular, Ember, Backbone and React are also popular

One of the challenges of FE is the rapid pace of change in the tools, techniques and tecnologies used to create the user experience for applications and websites.  For example, making a clean website that is accessible by a computer, a tablet, a mobile phone and a television.

BACK END
focuses on the side of a website users can't see.  What makes a site interactive.  Also referred to as "server side" of a website.  Something like instagram needs a place to store all their users' information and thus, needs to interact with a database.  These databases are run from a server, or remote computer.  Back end developer helps manage this database and store contents on it, ensuring the front end elements continue to function properly

Back end developers work on tasks like:
Building code, troubleshooting and debugging web apps, database management, framework utilization.

BE consists of a server which provides data on request, the application which channels it, and the database which organizaes the information.  The core concern of BE devs is creating applications that can find and deliver data to the front end.  Many use reliable enterprise-level databases like Oracle, Teradata, Microsoft SQL Server, IBM DB2, EnterpriseDB and SAP Sybase ASE.

Backend-as-a-Service (Baas) have ben maturing into a viable alternative that are especially useful when developing mobile apps and working within a tight schedule.

Differences:
FE and BE devs work on different sides of a website - FE work on visual elements of a website or app AKA client side.  BE works on the server side which the user cannot see.  Together they create a **DYNAMIC WEBSITE**

FE and BE devs have different strengths

FE and BE work in different languages.  Front end work in languages like HTML, CSS and JS as well as frameworks and libraries like AngularJS, React.js, jQuery, Sass.  BE Dev work in languages like PHP, C++, Java, Ruby, Python, JS and Node.js and include frameworks: Express, Django, Rails, Laravel, Spring.

FULL STACK = FE and BE
"as a general rule, full-stack development by a single programmer isn't a practical solution"

However "they are powerful team players because they have the breadth of knowledge to see the big picture, letting them suggest ways to optimize the process or remove roadblocks that might be slowing down the system"


QUESTIONS:
- does front end and back end only refer to web development?
- which pays more?
- UX vs UI?  Are these more graphic designer?
User Interface (UI) - basically a visual designer, might have light HTML CSS knowledge
User Experience (UX) - work in front end studying and researching how people use the sites and then make changes through a lot of testing
- Backend-as-a-service?
- is one more hireable?  more difficult?


**In Github, make a new repo.**

**Clone that repo to your local machine.**

**Push a .txt file with the answers to the 2 questions below to your GitHub only using the git CLI (no GUIs)**

**Order the following from low to high level languages [c++, javascript, binary, assembly code]**
1. binary - 0s and 1s
2. assembly code - basically binary / machine code that is readable by humans
3. c++ - mid level statically typed compiled language
4. JavaScript - high level dynamically typed interpreted language.

**Which of the following does not belong? C, Python, Go, Git, Java, Bash**
git - 
C, Python, Go, Java, and Bash are all 

**Javascript is often referred to as a client-side language. Research this in detail until you can briefly explain how js (short for javascript) is compiled OR interpreted by the browser until it turns into binaries for computers to be able to read**

Continue freeCodeCamp, Andrew Mead’s course, CSX, and any other coding resources.

Share 1 or more “aha” moments you had in this channel. Ex. “I couldn’t get this function to run [show code snippet] and kept getting this error [show error] but after an hour I realized it was because I was using const instead of let and had nothing to do with what the error message was actually displaying”

Should be able 2/3 done with Andrew’s beginner JS udemy course (edited) 