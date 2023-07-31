// Game.js

const imageNames = ["America", "Australia", "Brazil", "China", "France"];
let currentWordIndex = 0; // Index to keep track of the current word from the array
let isSubmitClicked = false;

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
  createEmptyBoxes(imageName.length); // Call function to create empty boxes
}

// Function to create empty boxes
function createEmptyBoxes(numBoxes) {
  const boxesContainer = document.getElementById("boxes-container");
  boxesContainer.innerHTML = ''; // Clear previous boxes
  for (let i = 0; i < numBoxes; i++) {
    const box = document.createElement("input");
    box.type = "text";
    box.maxLength = "1"; // limit the input length to 1 character
    box.classList.add("empty-box"); // you can define "empty-box" class in your css

    // Listen to the input event
    box.addEventListener('input', function() {
      // If user enters a value and there is a next box, focus it
      if (box.value !== '' && i < numBoxes - 1) {
        boxesContainer.children[i + 1].focus();
      }
    });

    boxesContainer.appendChild(box);
  }
}

// Add an event listener to the "Submit guess" button
document.getElementById("submit-button").addEventListener("click", function() {
  isSubmitClicked = true; // Submit button is clicked
  compareGuess(); // Call the compareGuess function
});

// Function to compare the user's guess with the current word from the array
function compareGuess() {
  // Do nothing if Submit button isn't clicked yet
  if (!isSubmitClicked) return;

  const currentWord = imageNames[currentWordIndex];
  const boxesContainer = document.getElementById("boxes-container");
  const inputBoxes = boxesContainer.getElementsByClassName("empty-box");

  for (let i = 0; i < inputBoxes.length; i++) {
    if (inputBoxes[i].value === '') {
      inputBoxes[i].style.backgroundColor = 'white'; // No input yet
    } else if (inputBoxes[i].value === currentWord[i]) {
      inputBoxes[i].style.backgroundColor = 'green'; // Correct character in correct position
    } else if (currentWord.includes(inputBoxes[i].value)) {
      inputBoxes[i].style.backgroundColor = 'yellow'; // Correct character in wrong position
    } else {
      inputBoxes[i].style.backgroundColor = 'grey'; // Incorrect character
    }
  }
}

// Function to print the user's guess content to the web page
function printUserGuess(guess) {
  // Create a new paragraph element to display the guess
  const guessResult = document.createElement("p");

  // Set the text content of the paragraph to the user's guess
  guessResult.textContent = `Your guess: ${guess}`;

  // Append the paragraph to the game container or any other suitable element
  const guessResultContainer = document.getElementById("guess-result");
  guessResultContainer.appendChild(guessResult);
}

// Function to get random integer from N to M
function getRandom(N, M) {
  return Math.floor(Math.random() * (M - N + 1)) + N;
}

// Set a random image when the webpage is loaded
setRandomImage();
