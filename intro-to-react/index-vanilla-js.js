//-- VANILLA JAVASCRIPT -------------------------------------------------------
console.log(document);

//-- Get button and div element using their id
const incrementBtn = document.getElementById("increment-btn");
const countDisplay = document.getElementById("count-display");

console.log(incrementBtn);
console.log(countDisplay);

//-- Modify elements' contents using DOM API
// incrementBtn.textContent = "+9";
// countDisplay.textContent = "1";

//-- Concept: a piece of State
//-- A State is a piece of data of we want to keep track of its value
let currentCount = 0;

//-- Add event listener to the object
//-- Syntax: object.addEventListener(<event>, <response>)
//-- The code below means everytime we click on this button,
//--   we will increment the currentCount, and update the inner text of
//--   the countDisplay element.
incrementBtn.addEventListener('click', () => {
  currentCount++;
  countDisplay.innerText = currentCount;
})

//-- Notes: Google DOM API for more of these APIs

//-- Why don't we just use JavaScript?
//--   -> There is a problem with reuse ability.
//--   For example: if we want to duplicate the counter, we will have to
//--   also duplicate the code.
const incrementBtn2 = document.getElementById("increment-btn2");
const countDisplay2 = document.getElementById("count-display2");
let currentCount2 = 0;
incrementBtn2.addEventListener('click', () => {
  currentCount2++;
  countDisplay2.innerText = currentCount2;
})
