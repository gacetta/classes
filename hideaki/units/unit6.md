# Unit 6 - webpack/babel, data structures, binary seach, sorts, figma, node
---
1. Udemy - Finish Andrew’s basic js class (Webpack, babel). Note that webpack and babel versions have been updated, so try to use a newer version to set this up! You may find this difficult as the original tutorial may not work at all, but rely on googling keywords to get through and ask questions on slack! The main skill you’re learning is how to upgrade an old library and handle breaking changes
- look at dates, Q&A, 

2. Look for Udemy sales for (get most recent edition if multiple versions are available):
   The Complete React Developer Course (w/ Hooks and Redux)

3. Udemy - Continue Colt Algo and Data structure class to up end of section 14 (binary search, bubble, insertion, selection sorts)

4. Udemy - Start "JavaScript: The Advanced Concepts (2022 Update)" by Andrei Neagoie to end of section 5 (js engine, closures, prototypal inheritance). These topics will be familiar, but will be discussed a lot deeper. Useful for both review and further investigation

5. Udemy - Start Andrew’s Node class https://www.udemy.com/course/the-complete-nodejs-developer-course-2/ to end of section 5 (fs, error handling, handling requests)

6. Project - buttonCreator

# Vanilla JS -> React transition exercise
1. create an html file with 3 sections
2. create a js file (attach to html) and create and add a button to each of the 3 <section> elements
3. Depending on how you did the previous step, make the creation and attachment logic DRY (don’t repeat yourself). There should be a function, `createButton` that you can call every time you want to add a button to the html. You should be able to use this function like `sectionOne.append(createButton(someArgs))`
4. move that function to a separate file and import/export
5. the function should be able to:
   - create a new button
   - center that button horizontally in the view (create style sheet)
   - have params that determine the name of the button
   - any other options like color of button that might be helpful. Think carefully about which of these params in the function need to be required vs optional

7. Project - algo generator Continue html/css/js review by making a simple view that allows you to type in an input and clicking on a button renders the result of the algo. Use live server in VSCode, no need to make your own server. Figma and wire-framing intro. Use separate files for each algo!

# Algo Generator
- intermediate level - html, css, js, esm, live-server, figma
## overview
- Using html, css, js, and live-server, make a front-end for an algorithm display. There should be a dropdown menu where you can choose 3-5 algos like (add3, filterArray, etc.. anything you’ve done in the past).
- You should make your own design in figma (wire-framing) and submit for approval
## Requirements
- should be set up with git, along with a .gitignore file
- you should have a working design with good Ui/Ux
- you should have a /src directory
- in the src directory, have an html file, css file, and an entry js file
- in the src directory, have another dir called fake_backend
  - in the fake_backend dir, add individual algo files (that should live in the backend in real life) that we’re putting in the front-end for now
  - Each algo should be exported to the entry js file
- when serving the final html file, you should be able to:
  - see a site that has a title, description, dropdown menu
  - when a user selects a dropdown menu, the explanation of the algo and an input field and a “solve” button should appear
  - when you enter something into the input, the algo should run with that input as the args and return the result
- this project should be pushed as a new repo to your github along with a README.md file at the root level that explains:
  - what the app does
  - how to run/test the project using live server
  - steps to add new algo files

## Requirements before unit interview
- understands how npm libraries work
- can calculate time and space complexities
- can create simple data structures with classes
- can explain difference between browser side js and node
- can create a web page with js using esModules import/export syntax and render locally
- understands how the JS engine works
- can implement simple sorts

- ASK QUESTIONS after research (look at dates)
