# Frontend Mentor - Advice generator app solution

This is a solution to the [Advice generator app challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/advice-generator-app-QdUG-13db). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshots](#screenshots)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Useful resources](#useful-resources)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the app depending on their device's screen size
- See hover states for all interactive elements on the page
- Generate a new piece of advice by clicking the dice icon

### Screenshots

![](./screenshots/Screenshot%202023-04-07%20at%2002-45-08%20Frontend%20Mentor%20Advice%20generator%20app.png)
![](./screenshots/Screenshot%202023-04-07%20at%2002-46-17%20Frontend%20Mentor%20Advice%20generator%20app.png)

### Links

- Live Site URL: [Add live site URL here](https://advice-generator-tau-one.vercel.app/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow

### What I learned

Quite frankly, this is my first attempt at tempering with an API before. After reading the documentation, it was relatively easy to understand what I needed to do and how to do so.


```js
async function getAdvice() {
  let randomNum = Math.floor(Math.random() * 100); // Generate a random number
  let response = await fetch(`https://api.adviceslip.com/advice/${randomNum}`); // Add the random number as a query parameter
  let data = await response.json();
  let adviceNumber = data.slip.id;
  let adviceText = data.slip.advice;
  document.getElementById("advice-number").innerHTML = `ADVICE #${adviceNumber}`;
  document.getElementById("advice").innerHTML = `&ldquo;${adviceText}&rdquo;`;
}
```

### Useful resources

- [Advice Slip JSON API](https://api.adviceslip.com/) - This helped me for XYZ reason. I really liked this pattern and will use it going forward.