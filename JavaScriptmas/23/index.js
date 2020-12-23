/*
DESCRIPTION:
We are making a Social Media Character Counter! We want to display the available characters LEFT.
Using the Keydown event should help you here. When the characters reach 20 and below, we want them to turn red. So we will use Javascript to add that styling to it. If the characters drop below 0, we want the button to be disabled BUT if there are only 0 characters left, we should still be able to tweet.

Keydown, addEventListeners, add and remove a class

Tips:
1. We want to create our variables first
2. Add the event listener
3. Look in the CSS to see what could be used to disable the button
4. Create conditions to check the count of the characters

Let your imagination run wild! You can use the provided styling or you can take it to another level!
Make sure you share your solution using the "Share solution!" button at the top!
There will be multiple winners that I select!

Follow me on twitter @DThompsonDev so you can find who who is selected! I hope it's YOU!

*/
const MAX_CHARACTER = 140;
const CHARACTEER_WARNING = 20;
const DEFAULT_TEXT = "<span>What's happening?</span>";

const button = document.querySelector("#btn");
const text = document.querySelector("#text-area");
const counter = document.querySelector("#counter");

 

window.onload = () => {
  if (text.innerText === "") {
    button.classList.add("buttonDisabled");
    text.innerHTML = DEFAULT_TEXT;
    counter.innerHTML = `${MAX_CHARACTER}`;
  }
};

text.addEventListener("focusout", function () {
  if (text.innerText.trim() === "") {
    button.classList.add("buttonDisabled");
    text.innerHTML = DEFAULT_TEXT;
     counter.innerHTML = `${MAX_CHARACTER}`;
  }
});

function handleTextArea() {
 
  if (text.innerHTML === DEFAULT_TEXT) {
    button.classList.add("buttonDisabled");
    text.innerText = "";
    
  }

  const charsLeft = MAX_CHARACTER - text.innerText.length;
  counter.innerHTML = `${charsLeft}`;

  if (charsLeft < 0) {
    button.classList.add("buttonDisabled");
    counter.style.color = "red";
  } else if (charsLeft < CHARACTEER_WARNING && charsLeft >= 0) {
    button.classList.remove("buttonDisabled");
    counter.style.color = "red";
  } else if (text.innerText.trim().length == 0) {
    button.classList.add("buttonDisabled");
  } else {
    button.classList.remove("buttonDisabled");
    counter.style.color = "white";
  }
}

text.addEventListener("click", function () {
  handleTextArea();
});

text.addEventListener("input", function () {
  handleTextArea();
});
