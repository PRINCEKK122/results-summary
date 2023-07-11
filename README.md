# Frontend Mentor - Results summary component solution

This is a solution to the [Results summary component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/results-summary-component-CE_K6s0maV). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page

### Screenshot
![Desktop](assets/screenshots/Screenshot%202023-07-11%20at%2016-11-55%20Frontend%20Mentor%20Results%20summary%20component.png)

![Mobile](assets/screenshots/Screenshot%202023-07-11%20at%2016-12-14%20Frontend%20Mentor%20Results%20summary%20component.png)



### Links

- Solution URL: (https://github.com/PRINCEKK122/results-summary)
- Live Site URL: (https://results-summary-fem.netlify.app/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- Mobile-first workflow
- JS DOM
- XMLHttpRequest


### What I learned

I learnt from this project that transition does not work `background: linear-gradient()`. To make this work, we have to use pseudo-elements and the z-index to make it work.

Below is the code I wrote solve the challenge:

```css
.summary .btn {
    background: linear-gradient(var(--dark-gray-blue), var(--dark-gray-blue));
    color: #fff;
    text-decoration: none;
    font-size: 2rem;
    display: inline-block;
    width: 100%;
    text-align: center;
    font-weight: 700;
    margin-top: 2.4rem;
    padding-top: 1.7rem;
    padding-bottom: 1.6rem;
    border-radius: 5rem;
    position: relative;
    z-index: 1;
}

.summary .btn::after {
    content: "";
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    opacity: 0;
    background: linear-gradient(to bottom, var(--light-slate-blue), var(--light-royal-blue));
    border-radius: 5rem;
    transition: all 1000ms;
    z-index: -1;
}

.summary a.btn:hover::after {
    opacity: 1;
}
```

If you want more help with writing markdown, we'd recommend checking out [The Markdown Guide](https://www.markdownguide.org/) to learn more.

**Note: Delete this note and the content within this section and replace with your own learnings.**

### Continued development

Now, I will be focusing on working with CSS Grid, JavaScript and React.


## Author

- Website - [Prince Awuah Karikari](https://github.com/PRINCEKK122)
- Frontend Mentor - [@PRINCEKK122](https://www.frontendmentor.io/profile/PRINCEKK122)

