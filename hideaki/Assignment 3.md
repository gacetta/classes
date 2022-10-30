# Assignment -3

**1. Finish FCC html and css sections, continue to JS section and complete as many as you can until an unfamiliar concept comes up**

---

**2. Research the entire system of Browsers, JS Engine, html, css, JS**  

A **BROWSER** is an application used to access the world wide web.  It retrieves a file from the internet (or locally) and renders it properly on screen.  It does this using the **BROWSER ENGINE** (such as _WebKit, Blink, Gecko, Goanna, Flow_).

Browsers also include a **JAVASCRIPT ENGINE** also known as a **VIRTUAL MACHINE** that takes **JAVASCRIPT** code, compiles it, optimizes it and executes it.  Since *JavaScript* is an interpreted language, it doesn't need to be compiled before sending it to a browser.  An interpreter can take the raw JS code and run it for you.

*THE BROWSER RENDERING PROCESS*

1. When a browser opens a `.html` file, it receives raw bytes of data which is translated into characters. These characters are further parsed into tokens.  These are even further parsed into nodes, which are used to construct the _DOM (Document Object Model)_

2. While constructing the DOM, the browser searches for a link to a `.css` file.  When it finds a `.css` file, it goes through a similar process to step 1: bytes --> characters --> tokens --> nodes --> _CSSOM (CSS Object Model)_

3. Now that DOM and CCSOM are constructed, the browser combines them into a _render tree_.  The render tree contains information on all the visible DOM content as well as the required CSSOM information for each node.  **Note:** if an element has been hidden by CSS (such as `display: none;`) the node will not be represented in the render tree (though it is still present in the DOM)

4. Now the content and style information of all visible content is on the screen, but nothing has actually been rendered to the screen.  In the layout (AKA **reflow**) step, the browser takes all the information from the DOM and CCSOM and does the necessary layout computing by calculating the exact size and position for each object on the page.

5. The final step involves rendering that information onto the screen.  Now that the content (DOM), style (CCSOM), and exact layout of elements are computed, the browser "paints" each individual node to the screen.

6.  Introducing JavaScript into the mix changes the flow.  When a browser encounters a `<script>` tag, the DOM construction is immediately paused.  Because JavaScript can alter both HTML and CSS, the browser does this as a precaution.  **Note:** this is why `<script>` placement is important.

**TOKENS**  

When a file is saved with `.html` extension, you tell the browser engine to interpret the file as an HTML document.  In the parsing process, especially during _tokinization_, every start and end HTML tag in the file is accounted for.  The parser understands each string in angled brackets (`<div>`) and applies the appropriate rules to each other them.  This is known as a **token** - a data structure of sorts that contains information about a certain HTML tag.  So a token that represents an anchor tag will have different properties from one that represents a paragraph tag.  
 
**NODE**

A **node** is an entity within the DOM, which is a tree data structure that establishes the parent-child relationships between every node.  An `<html>` tag becomes a node which is a parent element to `<body>` which is a parent element to `<p>`, etc.

**A CCSOM or CSS Object Model** 

is a tree data structure similar to the DOM, but containing css information.  CSS bytes are converted into characters which are converted into tokens which are converted into nodes which make up the CCSOM.

**RENDER TREE**

The combination of DOM and CCSOM elements, the render tree contains information on all visible DOM content and the required CSSOM information for different nodes.  **NOTE** if an element has been hidden by CSS (`display: none;`) the node will note be represented in the render tree (though still present in the DOM).

---

**3. The browser is needed to render html, css, and js. Browsers can’t read any other languages.  html, css, and js languages are being updated every year. Even if the language gets an update, that needs to be implemented by the browser. This is the basic concept of support. For ex. CSS added flexbox in 2015 in css 3 as part of the language, but browsers then needed to update their code to support the new syntax. This means the css flexbox syntax worked in Chrome and Safari first, then Firefox, then others (Internet explorer still hasn’t adopted it yet, I think).
check out caniuse.com for browser support in html, css, and js. You will use this a lot.**

---

**4. How do you connect html, css, and js in an html file?**  

`HTML`, `CSS`, and `JavaScript` files are all linked together in the HTML file.

The file is defined as an **HTML** document using 

```
<!DOCTYPE html>
```  

**CSS** can be written inline or internally in an HTML file, though most often CSS information is contained in an external style sheet.  This is linked to the the HTML document in the `<head>` section with the syntax:

    <head>
        <link rel="stylesheet" href="styles.css">
    </head>

Finally, javascript can be integrated into an HTML file as well using a `<script>` element.  Though it can be written directly into the HTML file and contained between two script tags, it is common practice to contain all javascript code in an external file and link to it using the `src` attribute.  

Syntax:

```
<script src="myScript.js"></script>
```

**Note:** script tag placement is important when not using `defer` or `async` attributes.

---

**5. what does the defer keyword do?**  

**Defer** is an attribute for the `<script>` tag in HTML.  It is a boolean attribute that, when set, specifies that the script is downloaded in parallel to parsing the page and executed after the page has finished parsing.  

```
<script src="demo_defer.js" defer></script>
```

**NOTE:** defer is only for external scripts

---

**6. what is the significance of putting the script tag at the END of the body (if not using defer)**

it is important to put the `<script>` tag at the end of the body in the HTML document because of the parsing order.  Without a `defer` (or `async`) attribute, the html will download and execute the script immediately, halting the parsing process until the script is complete.  When the script tag is placed at the start of the body, this is a problem since the script file references the body of the HTML document, which hasn't been parsed yet.  Moving the `<script>` tag to the end of the body solves this problem (as does `defer`).

---

**7. What does the JS engine do exactly? Be familiar with some names like V8, SpiderMonkey. Review the concept of interpretation vs compilation related to this**
*SpiderMonkey* is a JS Engine that was used by Netscape.  Rudimentary interpreter with no optimizations.
*V8* is a JS Engine developed by Google for Chrome browsers

1. **PARSER** - When the code is successfully fetched from the server to the client, the JS engine first feeds the code to the **parser**.  The **parser** looks for patterns in the code (such as `let` and `const` or `()`) and translates them into representative objects that the machine understands.  The object that stores all of the parser's translations is known as the **Abstract Syntax Tree** or **AST**

2. **INTERPRETER** - Next, all of the organized objects are fed from the AST to the JS engines **interpreter**, which translates all those objects into an intermediate representation (IR) also known as **bytecode**.  This is the first opportunity for our machine to run our code.  If the interpreter contains a **virtual machine** (which V8 has), then code can be executed immideately in bytecode form, without the need to translate again to an even more highly optimized machine code.

3. **COMPILER** - This is the optimization step.  While the interpreter is translating the AST into bytecode, it's keeping track of various idiosyncrasies of the code.  Things like - calling the same function over and over again with numbers.  Code like that is called **hot code**. Those scenarios make for a good opportunity for the engine to translate that code even further into highly-optimized machine code which can be quickly accessed and executed across multiple instruction sets.  This final step is run by the JS engines **compiler** to send this machine code to be run directly on the CPU.

**NOTE:** all code will be run as machine code eventually.  So even though the interpreter runs bytecode while the compiler creates optimized machine code for the CPU, the interpreter's bytecode still gets translated into machine code.  _The difference is that this interpreted machine code is **not** controlled by your engine_.  Bytecode on the virtual machine will be run as it sees fit, whereas optimized compiler machine code is inspected very carefully to only run the exact instructions sets required for the CPU.  _THIS_ is the reason for this 3rd step:  if we see patterns for optimization, we want to control how the machine code is run, otherwise, we're happy to let our machine code build as it feels necessary.

To recap: the **JavaScript Engine** is the component of the browser that takes JS code, optimizes it and executes it.  JS engines are also known as virtual machines and run code in an environment that is platform-independent.  

two articles:
https://medium.com/jspoint/how-javascript-works-in-browser-and-node-ab7d0d09ac2f
https://softwareengineeringdaily.com/2018/10/03/javascript-and-the-inner-workings-of-your-browser/

---

**8. What does it mean when a website is responsive?**
**Responsive web design (RWD)** is an approach that creates dynamic changes to the appearance of a website depending on the screen size and orientation of the device being used to view it.  RWD uses breakpoints to determine how the site will appear.  One layout is used above a breakpoint and another is used below the breakpoint, which is typically based on the width of the browser.

The same HTML is served to all devices and CSS is used to alter the layout.  Page elements reshuffle as the viewport grows or shrinks.

---

**9. Andrew Section 9 only**
DONE

---
**10. Do this 4 hour tutorial. Go slow, take notes, ask questions etc..**

https://www.youtube.com/watch?v=srvUrASNj0s&t=6478s

# Responsive Web Design

## CSS Units
### Abosolute units 
(won't necessarily line up to a ruler if held to screen.  Use measurements when doing things for print)
* Pixels (px)
* pt
* cm
* mm
* in  

Percentages - mainly used for widths.  Relative to their parent  (Heights get weird)

### Relative Units: 
relative to something else.  Some units that are relative to font-size:
* `em` is relative to their parents's font-size, which is an inherited property.  So if you don't declare it, it will get it from the body (or the default which is usually 16px).  
    * `1em` = 100% of its parent's font-size.  `1.5em` = 150% of parent's font-size.
* `rem` - short for root em.  It's always relative to the "root" of the document.  The "root" being the html element

**NOTE** When used for the font-size, `em` units can get out of control and have a cascading effect

* Relative to the viewport
    * `vw` 
    * `vh` 
    * `vmin` 
    * `vmax`

**WHICH TO USE?** 

general rule of thumb:
* font-size = `rem`
* padding and margin = `em`
* widths = `em` or `percentage` (sometimes `pixels`)

with `em`, if they're being used on the font-size property, they reference the parent.  If they're being used on any other property, they reference the font-size of the element they're in.

    .button {
        padding: .5em 1.25em;
    }

    .btn-big {
        font-size: 1.5rem;/
    }

    .btn-small {
        font-size: .75rem;
    }

    <button class="button btn-big">Big Text</button>
    <button class="button btn-small">Small Text</button>

in the above case, the padding for each button will scale with the font-size of that element so they have similar proportions.

***it's important to have things that react to changing font sizes as we will need to change font sizes for reactive web design***

Container width can easily be set with `percentages`.  The following code sets the width to 50% of the parent container.  If the parent container has no width setting, it will default to 100% of the screen, meaning this class would be set to 50% of the screen width.

        .class {
            width: 50%;
        }

**HOWEVER** images in that container are not resized and will extend outside of that 50%.  This is because images are inline elements.  They default to the size of themselves.  So we can style them as well. 

        img {
            width: 100%;  
        }
        // do not set a width AND height for an image.  otherwise the aspect ratio will be altered.

`max-width:` is a great property that allows us to set an absolute size as the maximum (so text and images are formatted properly).  Then we can use a percentage to scale down the site as the viewport changes

`min-width:` like `max-width`

**NOTE:** setting `font-size: 62.5%` for html element in CSS sheet will change the default text size (16) to 10, which makes `rem` easier to understand.  However ***BEST PRACTICE*** is to not alter html font-size and just use `rem` to style other elements

### Flexbox

Elements normally have `display: block` or `display: inline` as a default from browser

**BLOCK ELEMENTS**  
`display: block` stack on top of each other.  div, header, footer, main.  h1-h6.  p
**INLINE ELEMENTS**  
`display: inline` stay within the flow of what's around them.  a, strong, em, span

we can change display behavior by setting `display: flex`.  Now div elements that previously would stack (as blocks) are rotated to act as columns.  These vertical div elements all have the same height as the div item that has the biggest height in the parent container.  This can be changed using the `align-items: ` property.

`align-items: flex-start;` aligns items to the top of the parent container  
`align-items: center;` vertically centers all the items in the container
`align-items: flex-end;` aligns items to the bottom of the parent container
`align-items: stretch;` **Default:** stretches all items from top to bottom of parent container.
`align-items: baseline;` - lesser used...aligns the text on the top line for all divs.  

**Justify Content**
`justify-content: space-between;` takes the extra space and puts it between the columns instead of on the right side.  Other options `space-around` and `space-evenly`

**flexbox axis**

`flex-direction: row;` **default:** all the children become columns in that row  
`flex-direction: column;` switches the main axis so all the children become rows in that column

when the main axis is switched to columns: 
`justify-content` will now work vertically  
`align-items` will now work horizontally

### Media Queries
**Media queries** let us add new styles that target only specific conditions

`@media media-type and (media-features) {...};`

`media-type` lets us target different types of media:
* Screen `@media screen {}`
* Print `@media print {}`
* Speech `@media speech {}`

`media-condition` lets us target specific conditions within that media type:
* Widths `@media (min-width: 600px) {};`
* Orientation `@media (orientation: landscape) {}`
* Specific features `@media (hover) {}`

A media query requires either a `media-type` or a `media-condition`. Using BOTH is optional.
To combine both a type and condition, use `and`: `@media screen and (min-width: 960px) {}`  
Multiple conditions can be applied as well: `@media (min-width: 400px) and (max-width: 649) {}`

in CSS, media requires a selector nested inside:

        @media (min-width: 400px) {
            body {
                background: green;
            }
        }

**NOTE:** declaration order is important.  Media queries should always come after the default selector.

**COMPOUND SELECTOR**

```
h1 {
    property: value;
}

h1 span {
    property: value;
}
```

### FLEXBOX
`flex-direction: column;` switches the axis of `display: flex` to stack all elements on top of each other vertically (which is similar to the default state of block elements in HTML).  

when *SWITCHING AXISES*
`justify-content` will always work along the main axis and `align-items` will always work along the cross axis

so when `flex-direction: column:`:
* `justify-content` will now work vertically
* `align-items` will now work horizontally

if `flex-direction: row;`:
* `justify-content` will work horizontally
* `align-items` will work vertically


### Navigation
**Navigations** are traditionally marked up using an unordered list, which is placed inside a `<nav>` element

        <nav>
            <ul>
                <li><a href="index.html">home</a></li>
                <li><a href="about.html">about</a></li>
                <li><a href="recent-posts.html">recent posts</a></li>
            </ul>
        </nav>

**NOTE** To remove bullet points: use `list-style: none:`

`text-decoration: underline` is the default setting for navigation links.  Set it to `none` to remove underline

**WHENEVER YOU HAVE A :hover state, you should also have a :focus state**

### Order Property
`order:` is a property that orders the items in an element.  the lower the number (0 or negatives included), the earlier in the order that element appears.

**NOTE:** `order` can only be used when `display: flex` is being used

In the following code, even though main may appear after secondary in the html markup, we can use CSS to reorder them

```
.main {
    order: 1;
}

.secondary {
    order: 2;
}
```

### Resizing images

`object-fit: ` - will alter the image and crop
`object-position: ` - changes the crop positioning

`min-height` - the image will always be at least a certain height and then can scale if needed

### Breakpoints

**Breakpoints** are not device specific.  They are *layout specific*.  When your layout is breaking and not looking good, that's when you adjust your breakpoint.

### Last Child

`selector:last-child {}` will apply CSS to the last element in that parent's container

### Viewport meta tag

to prevent problems from rendering pages that are not optimized for mobile devices and small screens, phones and tablets will actually render a zoomed out version of the page and then shrink it down to fit their viewport

`<meta name="viewport" content="width=device-width, initial-scale=1">` can be added anywhere in the `<head>` of your document