const textInput = document.querySelector(".text-input");
const container = document.querySelector(".container");

textInput.addEventListener("input", inputChanged);

function createDivs(tokens) {
  for (let i = 0; i < tokens.length; i++) {
    if (tokens[i] != "") {
      const newDiv = document.createElement("div");
      newDiv.textContent = tokens[i];
      newDiv.classList.add("numbers");

      container.appendChild(newDiv);

      if (!isNaN(tokens[i])) {
        if (Math.abs(tokens[i]) > 1000) {
          console.log("jsem velky");
          newDiv.setAttribute(
            "style",
            "width:80px; height:80px;line-height:80px "
          );
        }
      } else {
        newDiv.classList.add("operation");
        newDiv.setAttribute(
          "style",
          "width:30px; height:30px;line-height:30px "
        );
      }

      if (i >= tokens.length - 2) {
        newDiv.classList.add("faded-out");
        requestAnimationFrame(() => {
          newDiv.classList.remove("faded-out");
        });
      }
    }
  }
}

function inputChanged(e) {
  console.clear();
  container.innerHTML = "";
  const enteredValue = e.target.value;
  const enteredValueNoSpaces = enteredValue.replace(/\s/g, "");
  //console.log(enteredValueNoSpaces);

  const tokens = enteredValueNoSpaces.split(/([\\*\\/+-])/);
  //console.log(tokens);
  const tokenCopy = [...tokens];
  console.log(tokens);

  let result = 0;
  let endReached = 0;

  while (endReached == 0) {
    let firstNumber = tokenCopy.shift();
    let operation = tokenCopy.shift();
    let secondNumber = tokenCopy.shift();
    console.log({ firstNumber, operation, secondNumber });

    if (
      firstNumber != null &&
      operation != undefined &&
      secondNumber != undefined
    ) {
      switch (operation) {
        case "+":
          tokenCopy.unshift(parseInt(firstNumber) + parseInt(secondNumber));
          break;
        case "-":
          tokenCopy.unshift(parseInt(firstNumber) - parseInt(secondNumber));
          break;
        case "*":
          tokenCopy.unshift(parseInt(firstNumber) * parseInt(secondNumber));
          break;
        case "/":
          tokenCopy.unshift(parseInt(firstNumber) / parseInt(secondNumber));
          break;
      }
      console.log({ tokenCopy });
      console.log({ firstNumber, operation, secondNumber });
    } else {
      endReached = 1;
      if (!isNaN(firstNumber) && firstNumber != "") {
        console.log({ firstNumber });
        result = firstNumber;
        tokens.push("=");
        tokens.push(result);
      }
    }
  }

  createDivs(tokens);

  /*   tokens.forEach((element) => {
    if (element != "") {
      const newDiv = document.createElement("div");
      newDiv.textContent = element;
      newDiv.classList.add("numbers", "faded-out");
      container.appendChild(newDiv);
      requestAnimationFrame(() => {
        newDiv.classList.remove("faded-out");
      });
    }
  }); */
  console.log({ result });

  /*   for (let i = 0; i < tokenCopy.length + 1; i++) {
    let firstNumber = tokenCopy.shift();
    let operation = tokenCopy.shift();
    let secondNumber = tokenCopy.shift();
    console.log({ tokenCopy });
    switch (operation) {
      case "+":
        tokenCopy.unshift(parseInt(firstNumber) + parseInt(secondNumber));
        break;
      case "-":
        tokenCopy.unshift(firstNumber - secondNumber);
        break;
    }

    console.log({ firstNumber, operation, secondNumber });
  } */

  //const array = [...enteredValueNoSpaces];
  ///console.log(array);
}
//console.log(textInput);
