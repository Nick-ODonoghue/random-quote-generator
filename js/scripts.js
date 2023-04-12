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

        // Using try catch for API request
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

    // Once page is loaded the getQuote function is called, so there will always be a quote on page. As well as the other function to make sure the page is working as intended
    getQuote();
    starHighlight();
    updateUI();
    deleteFavourite();
});

// Funtion for adding favourite to local storage
function addToFavourite() {

    // Grab DOM elements
    const quote = document.getElementById("quote");
    const author = document.getElementById("author");
    const favourite = document.querySelector(".favourite");
    const star = document.querySelector(".fa-star");

    // Grab elements content
    const authorText = author.textContent;
    const quoteText = quote.textContent;

    // Create and update hash with favourite quote Author and Quote
    const favouriteHash = {};
    favouriteHash.author = authorText;
    favouriteHash.quote = quoteText;

    // Create and update array inserting hash
    const favouriteArray = [favouriteHash];

    // Add to local storage on click
    favourite.addEventListener("click", () => {

        // Local storage only excepts string data, so using JSON.stringify method to add favouriteArray
        localStorage.setItem("favourite", JSON.stringify(favouriteArray));

        // Call starHighlight() in oder for favourite css to take affect
        starHighlight();
    })
}

// Function to remove favourite from local storage
function deleteFavourite() {

    // Grab DOM element
    const trashcan = document.querySelector(".fa-trash-can");

    // on click event to delete local storage using key "favourite"
    trashcan.addEventListener("click", () => {
        localStorage.removeItem("favourite");

        // Call starHighlight to remove favourite class from star icon
        starHighlight()
    });
}

// Function for highlighting star
function starHighlight() {

    // Grab DOM element
    const star = document.querySelector(".fa-star");

    // Conditional logic to add or remove favourite class from star icon
    if (localStorage.length > 0) {
        star.classList.add("favourite");
    } else {
        star.classList.remove("favourite");
    }
}

// Function to update UI with favourite quote if one is stored
function updateUI() {

    // If statment used with setTimeout to add users favourited quote on page load up, if one is saved in their local storage
    if (localStorage.length > 0) {
        setTimeout(() => {

            // Grabbing & then parsing local storage string to JSON so the data can be used to add back to the UI
            const storedFavourite = JSON.parse(localStorage.favourite);

            // Using .notation to insert the data
            quote.textContent = storedFavourite[0].quote;
            author.textContent = storedFavourite[0].author;

        }, 1000);
    }
}
