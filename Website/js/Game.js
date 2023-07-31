// Game.js

const imageNames = ["America", "Australia", "Brazil", "China", "France"];
let currentWordIndex = 0; // Index to keep track of the current word from the array

// Function to get a random image name from the array
function getRandomImageName() {
  const randomIndex = getRandom(0, imageNames.length - 1);
  currentWordIndex = randomIndex;
  return imageNames[randomIndex];
}

// Function to set a random image on the webpage
function setRandomImage() {
  const imageName = getRandomImageName();
  const imgElement = document.getElementById("game-img");
  imgElement.src = `../images/${imageName}.jpg`;
}

// Add an event listener to the "Submit guess" button
document.getElementById("submit-button").addEventListener("click", function() {
  // Retrieve the value of the input field (the user's guess)
  const guessInput = document.getElementById("guess-input");
  const userGuess = guessInput.value;

  // Print the guess content to the web page
  //printUserGuess(userGuess);

  // Clear the input field after printing the guess
  guessInput.value = '';

  // Check user's guess against the current word
  compareGuess(userGuess);
});

// Function to compare the user's guess with the current word from the array
function compareGuess(userGuess) {
  const currentWord = imageNames[currentWordIndex];
  const guessResultContainer = document.getElementById("guess-result");
  guessResultContainer.innerHTML = ''; // Clear previous results

  for (let i = 0; i < currentWord.length; i++) {
    const letterSpan = document.createElement("span");
    letterSpan.textContent = userGuess[i] || ''; // Handle case when userGuess is shorter than the word
    letterSpan.style.color = userGuess[i] === currentWord[i] ? "green" : "red";
    guessResultContainer.appendChild(letterSpan);
  }
}

// // Function to print the user's guess content to the web page
// function printUserGuess(guess) {
//   // Create a new paragraph element to display the guess
//   const guessResult = document.createElement("p");

//   // Set the text content of the paragraph to the user's guess
//   guessResult.textContent = `Your guess: ${guess}`;

//   // Append the paragraph to the game container or any other suitable element
//   const guessResultContainer = document.getElementById("guess-result");
//   guessResultContainer.appendChild(guessResult);
// }

// Function to get random integer from N to M
function getRandom(N, M) {
  return Math.floor(Math.random() * (M - N + 1)) + N;
}

// Set a random image when the webpage is loaded
setRandomImage();
