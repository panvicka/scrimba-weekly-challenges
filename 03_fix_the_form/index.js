/* 
PART 2: STRETCH GOAL

1. Validate that it's an email the user has entered
2. Give feedback as to whether the form was successfully submitted or not
3. Go crazy with the error/success feedback (e.g. animations, sounds)

*/

const email = document.getElementById("email-input");
const formular = document.getElementById("myForm");
const input = document.getElementById("email-input");
const emailHintSpan = document.querySelector(".enter-email");
const subs = document.querySelector(".subs");
const button = document.querySelector("button");

window.addEventListener("keydown", handleFirstTab);

let reqTriggered = 0;
let notValidTriggered = 0;

/*https://css-tricks.com/removing-ugly-focus-ring-keeping/ */
function handleFirstTab(e) {
  if (e.keyCode === 9) {
    // the "I am a keyboard user" key
    document.body.classList.add("user-is-tabbing");
    window.removeEventListener("keydown", handleFirstTab);
  }
}

/**https://www.w3resource.com/javascript/form/email-validation.php */
function validateEmail(string) {
  if (
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(
      string
    )
  ) {
    return true;
  }

  return false;
}

function inputEmpty() {
  reqTriggered = 1;
  emailHintSpan.textContent = "email*";
  emailHintSpan.classList.add("emp");
  emailHintSpan.classList.remove("hidden");
  document.querySelector("button").disabled = true;
}

formular.addEventListener("submit", function (e) {
  e.preventDefault();

  if (input.value == "") {
    inputEmpty();
  }

  if (notValidTriggered || reqTriggered) {
    emailHintSpan.classList.add("shaking");
    setTimeout(() => {
      emailHintSpan.classList.remove("shaking");
    }, 400);
  } else {
    formular.innerHTML = "";
    document.querySelector("p").style.display = "inline";
    document.querySelector("h3").textContent = "Thank you";
  }
});

input.addEventListener("focus", () => {
 
  if (reqTriggered == 1 || notValidTriggered == 1) {
    emailHintSpan.classList.add("emp");
  } else if (input.value == "") {
    emailHintSpan.textContent = "email";
    emailHintSpan.classList.remove("emp");
    emailHintSpan.classList.remove("hidden");
  } else {
    emailHintSpan.classList.remove("emp");
    emailHintSpan.classList.add("hidden");
  }

  input.placeholder = "";
});

input.addEventListener("blur", () => {
  input.value = input.value.trim();
   input.placeholder = "email";
 
  if (input.value == "") {
     inputEmpty();
  } else {
    if (!validateEmail(input.value)) {
       emailHintSpan.textContent = "not a valid email";
      emailHintSpan.classList.add("emp");
      emailHintSpan.classList.remove("hidden");

      document.querySelector("button").disabled = true;

      notValidTriggered = 1;
    } else {
      document.querySelector("button").disabled = false;
       notValidTriggered = 0;
      emailHintSpan.classList.add("hidden");
    }
    reqTriggered = 0;
  }
});
