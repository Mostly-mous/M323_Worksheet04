/**
 * this script contains the functionalities for the counter app
 */

//saving DOM-elements to variables
const counterDisplay = document.getElementById('counter-display');
const counterMinusButton = document.getElementById('subtract-button');
const counterAddButton = document.getElementById('add-button');
const counterButtons = document.getElementById('button-box');

//creating variable for counter
let counter = 0;

//function to display counter
function renderCounter() {
    counterDisplay.textContent = counter;
}

renderCounter(counter);

/**
 * Eventlisteners for button actions
 */
counterAddButton.addEventListener('click', (e) => {
    addCounter();
});

counterMinusButton.addEventListener('click', (e) => {
    subtractCounter();
});

//function for increasesing counter
function addCounter() {
    counter++;
    renderCounter(counter);
}

//function for decreasing counter
function subtractCounter () {
    counter--;
    renderCounter(counter);
}