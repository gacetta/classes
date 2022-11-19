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
