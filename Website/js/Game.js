// Game.js

// Add an event listener to the "Submit guess" button
document.getElementById("submit-button").addEventListener("click", function() {
    // Retrieve the value of the input field (the user's guess)
    const guessInput = document.getElementById("guess-input");
    const userGuess = guessInput.value;

    // Print the guess content to the web page
    printUserGuess(userGuess);

    // Clear the input field after printing the guess
    guessInput.value = '';

    // You can also perform any other game-related logic here if needed.
});

// Function to print the user's guess content to the web page
function printUserGuess(guess) {
    // Create a new paragraph element to display the guess
    const guessResult = document.createElement("p");

    // Set the text content of the paragraph to the user's guess
    guessResult.textContent = `Your guess: ${guess}`;

    // Append the paragraph to the game container or any other suitable element
    const guess_result = document.getElementById("guess-result");
    guess_result.appendChild(guessResult);
}
