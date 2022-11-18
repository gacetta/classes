4 main principles to responsive web design
1. Fluid Layouts
- To allow webpage to adapt to the current viewport width (or even height)
- Use `%` (or `vh` / `vw`) unit instead of `px` for elements that should adapt to viewport (usually layout)
- Use `max-width` instead of `width`

2. Responsive units
- Use `rem` unit instead of `px` for most lengths.
- To make it easy to scale the entire layout down (or up) automatically

3. Flexible images
- By default, images don't scale automatically as we change the viewport, so we need to fix that.
- Always use `%` for image dimensions, together with the `max-width` property.

4. Media Queries
- To change CSS styles on certain viewport widths (called breakpoints)

## Layout Types
---
Float layouts
- the old way of building layouts of all sizes, using the float CSS property.  Still used, bu getting outdated.

Flex box
- Moern way of laying out elements in a 1-dimensional row without using floats.  Perfect for components layouts.

CSS Grid
- For laying out element in a fully-fledged 2-dimensional grid.  Perfect for page layouts and complex components.



JAVI Interview:

Function Declaration vs Function Expression vs Arrow Function

DOM Manipulation:

1. open blank page in browser, open console in dev tools
2. create an h1 and print it to the screen
3. += text to the h1
4. replace the text
5. remove the element
6. do the same in VSCode

Functions
1. create new js.file in VS code
2. declare a function that takes a number as an arguemnt, returns true if even
3. declare variable 