// Step 1 - Select the elements
const counterDisplay = document.querySelector("#counter");
const increaseButton = document.querySelector("#increase");
const decreaseButton = document.querySelector("#decrease");
const resetButton = document.querySelector("#reset");

// Step 2 - Set initial count
let count = 0;

// Step 3 - Add event listeners for each button
increaseButton.addEventListener("click", function() {
  count++;
  updateDisplay();
});

decreaseButton.addEventListener("click", function() {
  count--;
  updateDisplay();
});

resetButton.addEventListener("click", function() {
  count = 0;
  updateDisplay();
});

// Step 4 - Function to update the display
function updateDisplay() {
  counterDisplay.textContent = count;
}
