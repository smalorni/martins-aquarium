// Import the FishList function from the correct module

import { getFish } from './database.js'

const allFish = getFish()

for (const fish of allFish) {
    console.log(fish)
}


import { FishList } from "./fishlist.js"

/*
    What is the CSS selector for the element where you
    want to display the fish?

    Use . for elements with a "class" attribute
    Use # for elements with an "id" attribute
 */
const parentHTMLElement = document.querySelector(".fishList")

//invoke the function
parentHTMLElement.innerHTML = FishList()

const toggleButton = document.getElementById("toggleButton")
const dropDownList = document.getElementById("drop-down-list")

toggleButton.addEventListener( 'click', () => {
    dropDownList.classList.toggle('active');
})