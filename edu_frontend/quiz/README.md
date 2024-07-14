## Table of contents

- [Overview](#overview)
    - [challenge](#challenge)
    - [Screenshot](#screenshot)
- [My-process](#My-process)
    - [Built-with](#built-with)
    - [What-I-learned](#what-i-learned)
    - [Continued-development](#continued-development)
    - [Useful-resources](#useful-resources)

## overview

learning accessibility by creating a quiz.

### Challenge

1. aligning those element vertically. Purpose esthetic.
   ![[Pasted image 20240714111931.png]]
   solution :

- input needed to be placed side by side with the `label` element.
- giving to each tag a width + text-align property set to right fot label and set to left for input element.

2. working with read-only property to give extra information to the browser's accessibility API
   ![[Pasted image 20240714114926.png]]

- every region requires a label element
- the method is to add a heading element and reference it the aria-labelledby property
  ![[Pasted image 20240711160829.png]]

3. alignment trouble because of my architecture in html
   ![[Pasted image 20240714133039.png]]
   the solution for this issue is to wrap the list labels within unordered list element so they the radios input can stay put with one another and creating a non-disruptive margin that applies on all the labels independantly. the other way would be to put some `div` element but I didn't chosse that option for clarity.

```html
<section role="region" aria-labelledby="HTML" id="quiz">
       
  <h2 id="HTML">HTML</h2>
       
  <div class="question-block">
           
    <h3>1</h3>
           
    <fieldset class="question indent">
               
      <legend>
        The legend element represents a caption for the content of its parent
        fieldset element
      </legend>
               
      <label for="q1-a1" class="list-quiz">
                    <input type="radio" id="q1-a1" name="q1" value="True" />    
                True          
      </label>
               
      <label for="q1-a2" class="list-quiz">
                    <input type="radio" id="q1-a2" name="q1" value="False" />  
                  False          
      </label>
             
    </fieldset>
         
  </div>
       
  <div class="question-block">
           
    <h3>2</h3>
           
    <fieldset class="question indent">
               
      <legend>
        A label element nesting an input element is required to have a for
        attribute witht the same value ass             the             input's
        id
      </legend>
               
      <label for="q2-a1">
                    <input type="radio" id="q2-a1" name="q2" value="True" />    
                True          
      </label>
               
      <label for="q2-a2">
                    <input type="radio" id="q2-a2" name="q2" value="False" />  
                  False          
      </label>
             
    </fieldset>
         
  </div>
     
</section>
```

my answer

```html

```

## My-process

### Built-with

- html
- css5

### What-I-learned

2.

- conclusions : If the section is already labeled with headings and other visible text elements, and testing shows that assistive technologies properly interpret theses labels, we might not need `the aria-labelledby` attribute.
- However, if we need to combine multiple-labels or provide a more complex labelling structure, keeping `aria-labelledy` would be beneficial
  - the best practice is for the programmer to test with various assistive technologies to ensur ethat the content remains accessible and `users-friendly`.
  - use `aria-labelledby` if we need to reference multiple elements to provide clear and complete label.
  - and be sure that if we remove the `fallback`, there are no negative impacts on the accessibility of the content.

### Continued-development

## Useful-resources

> [!tip] >[lighthouse](developers.google.com/web/tools/lighthouse), buil into chrome DevTools
> Firefox accessibility Inpector, provides information about the accessibility properties of web development.
> [NVDA](nvaccess.org), a free and open source screen reader for windows.
> online validators :
> [W3C Markup validation Service](validator.w3.org), check HTML and XHTML accessibility standars.
> keyboard Navigation: manually mehthod, we check that everything i doing well as expected.
> [color contrast check](https://www.siegemedia.com/contrast-ratio) help ensure text has sufficient contrast against background colors.
> Zoom and resize text : Check that txext and other page elements are readable do not overlap or become distorted when zoomed in.
> [standard guidelines](w3.org/WAI/standards-guidelines/aria/) or [standard-guideline](w3.org/WAI/standards-guidelines/wcag/), provide guidelines for web accessibility and dynamic content accessible.
