## Table of contents

- [Overview](#overview)
    - [challenge](#challenge)
- [My-process](#My-process)
    - [Built-with](#built-with)
    - [What-I-learned](#what-i-learned)
    - [Continued-development](#continued-development)

## overview

build a balance sheet and learn about new properties and targetting elements

### Challenge

- [ ] create 3 differents table in a sheet that organized vartically.
- [ ] override some property when necessary
- [ ] hide the different element designed for elders.
- [ ] create a pseudo elemenet hover for the different total
- [ ] organize the different cells and align them respectively with their categories.
- [ ] the span element for each `th` needs to be wrapped in a gray background as well as the %amount
- [ ] we will have for each title of categories a description that refers its purpose.
- [ ] and so on..

## My-process

### Built-with

- html5
- css5

### What-I-learned

- `aria-hidden`
- `table`, `caption`, `td` = data cell,
- `element[attribute~="value"]` it's a selector that will select any span element which class includes `sr-only`, it's an attribute selector with **substring matching**, meaning that it will include all the span element with the attribute class set to sr-only among others class set to that same attribute. which is different from span[class="sr-only"] because it will retrieve only that exact set with no others class embedded in it.
  to illustrate :
  ```css
  span[class~="sr-only"] {
  } /*select any span with the class set to sr-only among others*/
  span[class="sr-only"] {
  } /*the class attribute has the shape of the value declared by the                           selector and only that.*/
  ```

````
- `clip` and `clip-path` property clip.
- I've learnt to hide element from  the readable view of users so without creating white space in the document with this pattern.
```css

````

> [!warning] deprecated
> this feature is no longer recommender, we need to use `clip-path` properties instead.

- the `:first-oftype` . it targets the first element taht matches the selector-

- the `:last-of-type` pseudo-selector does the exact-opposite -it targets the last element that matches the selector

- responsive-design : max-width use this property to get the most of it.

- `calc()` function to calculate different values based on others values

- `position: sticky`, adding this property moved the element into its own stack.
  to be sure that the element will not be hidden by this stack, we can use `z-index` property set to `999`.

- `element[attribute]`, that selector will target any span regardless the values set to that attribute.

- `!important` when we don't want to douuble-check if we are not overwriting our earlier property, we can use that keyword to ensure hat properties are always applied, regardless of order or specificity. When we do that we can remove the pseudo-selector such as `not:()`

- border-collapse: allow cell borders to collapse into a single border isntead of a border around each cell.

- If I want to fix the contain of container when resizing:

```css
width: 100vw;
max-width: 4rem; /*ensure that the width in both direction is fixed.*/
min-width: 4rem; /*instead of width that tends to shrink to the container*/
```

- the ikey diffference between `element[property="value"]` and `element.property` is that the first will target the element with only the value's property whereas the other will target the element with the value's property include among others.

- `vertical-align` it is used to align vertically the content of an element who has a some space in its height and declard as **display: block.**
-
- `--webkit-background-clip: text` and will turn the whole gradient-background transparent`-webkit-text-fill-color: transparent` and the second property will fill the element with the gradient background.

### Continued-development

I will be reviewing all of that properties but in other projects so I can assimilate them
