// Listen for page load
document.addEventListener("DOMContentLoaded", () => {

    // Grab DOM elements
    const quote = document.getElementById("quote");
    const author = document.getElementById("author");
    const btn = document.getElementById("btn");

    // API endpoint
    const url = "https://api.quotable.io/random";

    // Asynchronous function to get a new quote
    async function getQuote() {

        // Using try catch
        try {
            const response = await fetch(url);
            const data = await response.json();

            if (response.ok) {
                // Update DOM elements only if response is OK
                quote.textContent = data.content;
                author.textContent = data.author;
                addToFavourite()
            }

        } catch (error) {
            // Custom error in case of issues
            quote.textContent = "Sorry, there seems to be an issue right now";
            console.log(data);
        }
    }

    // Event listener for button click
    btn.addEventListener("click", getQuote);

    // Once page is loaded the getQuote function is called, so there will always be a quote on page
    getQuote();
});

// localStorage.setItem("favourite", "{ author, john }");
// let fav = localStorage.getItem("favourite");
// console.log(fav)

// Funtion for adding favourite to localStorage
function addToFavourite() {

    // Grab DOM elements
    const quote = document.getElementById("quote");
    const author = document.getElementById("author");
    const btn = document.getElementById("btn");

    // Grab elements content
    const authorText = author.textContent;
    const quoteText = quote.textContent;

    // Create and update hash
    const favouriteHash = {};
    favouriteHash.author = authorText;
    favouriteHash.quote = quoteText;

    // Create and update array
    const favouriteArray = [favouriteHash];

    // Add to localStorage on click
    btn.addEventListener("click", () => {
        localStorage.setItem("favourite", JSON.stringify(favouriteArray));
        console.log(localStorage);
    })
}
