# Frontend Mentor - Intro component with sign up form solution

This is a solution to the [Intro component with sign up form challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/intro-component-with-signup-form-5cf91bd49edda32581d28fd1). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of Contents

- [Frontend Mentor - Intro component with sign up form solution](#frontend-mentor---intro-component-with-sign-up-form-solution)
  - [Table of Contents](#table-of-contents)
  - [Overview](#overview)
    - [The Challenge](#the-challenge)
    - [Screenshot](#screenshot)
    - [Links](#links)
  - [My Process](#my-process)
    - [Built With](#built-with)
    - [What I Learned](#what-i-learned)
    - [Continued Development](#continued-development)
    - [Useful Resources](#useful-resources)
  - [Author](#author)
  - [Acknowledgments](#acknowledgments)

## Overview

### The Challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page
- Receive an error message when the `form` is submitted if:
  - Any `input` field is empty. The message for this error should say *"[Field Name] cannot be empty"*
  - The email address is not formatted correctly (i.e. a correct email address should have this structure: `name@host.tld`). The message for this error should say *"Looks like this is not an email"*

### Screenshot

![](./images/live-1440px.png)

### Links

- Solution URL: [Add solution URL here](https://your-solution-url.com)
- Live Site URL: [View Live!](https://perezjprz19.github.io/intro-component-with-signup-form-master/)

## My Process

### Built With

- Semantic HTML5 markup
- SCSS
- Flexbox
- Mobile-first workflow
- Javascript

### What I Learned

* placeholders are not accessible.
* It is an accessibility requirement to add labels to inputs
* When the interface does not allow for a visible label on the screen, then aria-label should be used.

```html
<h1>Some HTML code I'm proud of</h1>
```
```css
.proud-of-this-css {
  color: papayawhip;
}
```
```js
const proudOfThisFunc = () => {
  console.log('🎉')
}
```

### Continued Development

  * Get more comfortable with SASS/SCSS
  * Learn the Command Line
  

### Useful Resources

- [MDN Web Docs | aria-placeholder](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-placeholder) - This helped understand form accessibility a little better. 
- [MDN Web Docs | box-shadow](https://developer.mozilla.org/en-US/docs/Web/CSS/box-shadow) - This helped to remind me how to utilize the different box-shadow attributes to obtain the desired effect.


## Author
- Frontend Mentor - [@perezjprz19](https://www.frontendmentor.io/profile/perezjprz19)
- Twitter - [@t0xicm0nkey93](https://www.twitter.com/t0xicm0nkey93)

## Acknowledgments

This is where you can give a hat tip to anyone who helped you out on this project. Perhaps you worked in a team or got some inspiration from someone else's solution. This is the perfect place to give them some credit.