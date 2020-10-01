/*
DESCRIPTION:
You job is to enable users to give a rating between 1 (bad) and 5 (great), 
and then display that rating in the form of an emoji. The users should give 
their ratings by pressing a key on their keyboards (the numbers 1 to 5). 
Here's the numbers' corresponding emojis:

5 = 😁
3 = 🙂
3 = 😐
2 = ☹️
1 = 🤬

event listeners, keyboard events, key codes, 
focus, focusout, DOM manipulation, tabindex

*/

const box = document.getElementById("box")
const text = document.getElementById("text")

// Write your code here 👇
let ratingGiven = false;
let ratingScore = 1;
let interval = 0;

box.addEventListener("focus", function () {
    text.textContent = "Type a number between 1 and 5"
})

box.addEventListener("focusout", function () {
    text.textContent = "Click here to give your rating"
    clearInterval(interval);
    const allIcons = document.querySelectorAll('i');
    allIcons.forEach(icon => icon.remove());
  })

function generateRandomBetween(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function showRandomRating() {



    const smiley = document.createElement('i');
    const coords = linkCoords = box.getBoundingClientRect();


    const smileyLeft = generateRandomBetween(0, coords.width - 45);
    const smileyTop = generateRandomBetween(0, coords.height - 45);

    switch (ratingScore) {
        case 1:
            smiley.classList.add('far', 'fa-grin-hearts');
            break;
        case 2:
            smiley.classList.add('far', 'fa-laugh');
            break;
        case 3:
            smiley.classList.add('far', 'fa-grin-alt');
            break;
        case 4:
            smiley.classList.add('far', 'fa-meh');
            break;
        case 5:
            smiley.classList.add('far', 'fa-meh-rolling-eyes');
            break;

    }
    smiley.style.position = "absolute";
    smiley.style.left = smileyLeft + 'px';
    smiley.style.top = smileyTop + 'px';
    box.appendChild(smiley);
    smiley.addEventListener('mouseover', (e) => {
        smiley.remove();
    })


}



function handleKeyDown(e) {
    const keyCode = e.keyCode;
    console.log(keyCode);
    switch (keyCode) {
        // key "1"
        case 97:
        case 49:
            ratingScore = 1;
            break;
        case 50:
        case 98:
            ratingScore = 2;
            break;
        case 51:
        case 99:
            ratingScore = 3;
            break;
        case 52:
        case 100:
            ratingScore = 4;
            break;
        case 53:
        case 101:
            ratingScore = 5;
            break;
    }

    if (ratingScore > 0 && ratingScore < 6) {
        interval = setInterval(showRandomRating, 300);
        text.textContent = ""


    } else {
        clearInterval(interval);

    }
}

box.addEventListener("keydown", handleKeyDown);


/*

DETAILED INSTRUCTIONS
1. Listen for keyboard events when the box has focus
2. Figure out which key the user pressed
3. If it's between 1 and 5, display an emoji in the box!

STRETCH GOALS:
- Animate the emoji onto the screen! Why not go crazy with multiple emojis?
- Reset the entire app when box doesn't have focus anymore
- Can you improve the overall design?

*/
