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
