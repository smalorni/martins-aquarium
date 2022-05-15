// Import the function that returns a copy of the fish array

import { getFish } from './database.js'

export const FishList = () => {
    // Invoke the function that you imported from the database module
    const fishes = getFish()

    // Start building a string filled with HTML syntax
    let htmlString = `<article class="fishList">`

    // Create HTML representations of each fish here
    for (const fish of fishes) {

        // Why is there a backtick used for this string?
        htmlString += `<section class="fish_card">
            <div class="fish_image"><img src="${fish.image}"/></div>
            <div class="fish__name">Name: ${fish.name}</div>
            <div class="fish__species"> Species: ${fish.species}</div>
            <div class="fish__length">Length: ${fish.length} inches</div>
            <div class="fish__location">Location: ${fish.location}</div>
            <div class="fish__bait">Bait: ${fish.bait}</div>
        </section>`
    }
    htmlString += `</article>`

    return htmlString
}