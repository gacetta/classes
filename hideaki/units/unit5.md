# Unit 5 - Start colt, algo time/space complexities, async js

use jsonplaceholder or pokemon api

1. Terms and concepts to research and solidify:
   - synchronous vs asynchronous
   - web api
   - what is a front-end framework
   - what is concurrency vs parallelism? Which category does js async fall into?
   - what is Node? how is it different from javascript?

2. Look for Udemy sales for (get most recent edition if multiple versions are available):
   1. "JavaScript: The Advanced Concepts (2022 Update)" by Andrei Neagoie
   2. "The Complete Node.js Developer Course" by Andrew Mead

3. udemy - Andrew complete sections 11, 12 “Async JS” and “App Themes”

4. csx complete “Asynchronous JavaScript”

5. udemy - start new class “Colt Steele data structure class until end of section 9 (recursion). Last section is sort of a bonus, but helpful

6. custom_log project

# create a function called customLog which behaves similarly to console.log
  1. customLog('hi'); -> should just call console.log(‘hi’)
  2. add a 2nd arg to this function that takes a boolean. if true, capitalize the first letter in the log
  3. add a 3rd arg to this function that takes a boolean. if true, capitalize ALL letters in the log
  4. test
  5. Think about the usability of this function. If this was in your code, is it easy to understand what you’re calling and what the expected behavior is? If not, try implementing some solutions before moving on
  6. The majority use case of this function is probably just using the log normally without any capitalizations. The first step might be to make your logic such that customLog(‘hi’, false false); can behave the same as customLog(‘hi’);, meaning the user doesn’t have to call the 2nd and 3rd args at all
  7. refactor the function so that it takes in 2 args total. The first is the required field, and the 2nd is an options object. Think about how you would implement this for 5 minutes before reading on.
  8. the 1st arg should be the string, and your function should have error handling (throw an error) if the first arg doesn’t exist. The 2nd arg should looke like
  {
    capitalizeFirst: <boolean>
    capitalizeAll: <boolean>
  }
  9. since the most default behavior should be “assume false if not true”, the user should be able to call this function like
  customLog(‘hi’, {capitalizeFirst: true}) -> ‘Hi’
  customLog(‘hello’, {capitalizeAll: true}) -> “HELLO”
  customLog(’hi there”) -> “hi there”
  Note how using an object makes the function logic a tiny bit more complicated, but gives the ability for all consumers of the function to label the option that they are turning on or off!

7. Promise function exercise
   - take a simple algorithm like divide(num1, num2) which returns the value of num1/num2
   - turn this into a function that returns a promise using the keyword new and the Promise constructor function
   - the new Promise should take in 1 callback with two params, which are also callbacks themselves. name those inner params resolve and reject
   - reject callback should be called with a an instance of an Error if the denominator is 0
   - if no issues, resolve should be called with the value of num1/num2
   - test using both syntax, .then.catch as well as async/await

8. Project html/css/js fetch using html/css/javascript, make a button that fetches information from jsonplaceholder https://jsonplaceholder.typicode.com/users and display a table that looks like:
   name: Firstname, Lastname
   email: Email
   for all 10 users. Try it with promise chaining with .then as well as another version with async-await

## Requirements before unit interview
- continue receiving and giving #code-reviews, #mock_interviews
- can explain async javascript, call stacks, task queues, and micro task queues and promises
- can write async javascript
- understands recursion
- can create a web page with html/css/js and render locally with vsCode