<h1 align="center">Random Qoute Generator | NickOD.xyz</h1>

![Screenshot of site](./images/RandomQuoteGen.jpg)

<br>

## Overview

This is a random quote generator using the fetch API and local storage for persistent data, allowing users to save their favourite quote. Styled with Bootstrap.

-   [API Github](https://github.com/lukePeavey/quotable) used.
-   [EndPoint](https://api.quotable.io/random) for reference.

<br>

## Site To-Do

-   Set HTML
-   Style with bootstrap
-   Write js to interact with API
-   Interact with local storage so user can add and delete their favourite quote

<br>

## What I learned

\*\*UPDATE
I decided to add to this app as I wanted a feature to be able to save a favourite quote. So I looked into local storage. Once I had a grasp on that I added the js code needed to allow users to add and remove their favourite quote. Everytime the page is reloaded the app will look to see if they have a favourite quote saved and load it for them on first use.

Working with APIs, I used an eventListener on DOMContentLoaded. With this I wrote an async function "getQuote" that called on page load, enabling a quote to appear on the page everytime it is view. Within this function I used a try catch for the fetch API method.

Styling with bootstrap. Whilst I'm not 100% sold on using css framworks, I'm happy this site doesn't immediately scream BOOTSTRAP when viewed.

<br>

## Built with

-   Mobile First Workflow
-   Semantic HTML5 Markup
-   Bootstrap
-   JS / Fetch API / localStorage

<br>

## Site links

[Random Quote Generator](https://nick-odonoghue.github.io/random-quote-generator/) live page

<br>

## Useful resources

[w3schools](https://www.w3schools.com/)

[Bootstrap](https://getbootstrap.com/)

<br>

## Author & Contact - lets connect

-   Portfolio - [NickOD.xyz](http://www.NickOD.xyz)
-   LinkedIn - [LinkedIn](https://www.linkedin.com/in/nick-odonoghue/)

<br>

## Acknowledgments

[Le Wagon](https://www.lewagon.com/) & all the teachers, TAs and classmates from <em>1122</em>

[Frontend Mentor](https://www.frontendmentor.io/) & everyone kind enough to leave feedback

[w3schools](https://www.w3schools.com/)

[Web Dev Simplified](https://www.youtube.com/WebDevSimplified)

[Kevin Powell](https://www.youtube.com/kepowob)

[Wes Bos](https://wesbos.com/)
