class Cards {
  constructor(parentDiv) {
    this.parentDiv = parentDiv;
  }

  winFunction(number) {}

  looseFunction(number) {}

  renderCard() {
    const containerElement = document.createElement("div");
    containerElement.classList.add("container");
    this.parentDiv.appendChild(containerElement);

    const cardElement = document.createElement("div");
    cardElement.classList.add("card");
    containerElement.appendChild(cardElement);

    const cardFront = document.createElement("div");
    cardFront.classList.add("front");
    cardElement.appendChild(cardFront);

    const cardBack = document.createElement("div");
    cardBack.classList.add("back");
    cardElement.appendChild(cardBack);

    const h1Front = document.createElement("h1");
    cardFront.appendChild(h1Front);

    const h1Back = document.createElement("h1");
    cardBack.appendChild(h1Back);

    console.log("card ele");
    console.log(cardElement);

    containerElement.addEventListener("mouseover", () => {
      containerElement.classList.add("hoverAdded");
    });
    containerElement.addEventListener("mouseleave", () => {
      containerElement.classList.remove("hoverAdded");
    });

    return {cardElement, containerElement};
  }
}

class PlusMinus extends Cards {
  constructor(parentDiv, plus, minus, player) {
    super(parentDiv);
    this.plus = plus;
    this.minus = minus;
    this.parentDiv = parentDiv;
    this.textFront = `Win ${plus} coins or loose ${minus} coins`;
    this.textBackWin = "You won";
    this.textBackLose = "You loose";

    
    this.returns = this.renderCard();
    this.card = this.returns.cardElement;
    this.container = this.returns.containerElement;

    this.container.addEventListener("mouseenter", ()=> {
      const rand = Math.random() < 0.2;
      if (rand == 1) {
        player.coins = this.winFunction(player.coins);
        console.log("win plus minus");
      } else {
        player.coins = this.looseFunction(player.coins);
        console.log("loose plus minus");

      }
      player.updateCoins();
    })
  }

  winFunction(number) {
    const childList = this.card.childNodes;
    const amount = number + this.plus;
    childList[1].childNodes[0].textContent = `${this.textBackWin} ${this.plus} coins.`;
    return amount;
  }

  looseFunction(number) {
    const childList = this.card.childNodes;
    const amount = number - this.minus;
    childList[1].childNodes[0].textContent = `${this.textBackLose} ${this.minus} coins.`;
    return amount;
  }

  renderTexts() {
    const childList = this.card.childNodes;

    //.textContent = "Hello";
    childList[0].childNodes[0].textContent = this.textFront;
 
  }
}

class Multiply extends Cards {
  constructor(parentDiv, multiplier, player) {
    super(parentDiv);
    this.multiplier = multiplier;
    this.parentDiv = parentDiv;
    this.textFront = `Win ${multiplier}x of your coins! ...or loose 1/2...`;
    this.textBackWin = "You won";
    this.textBackLose = "You loose";

    this.returns = this.renderCard();
    
    this.card = this.returns.cardElement;
    this.container = this.returns.containerElement;

    
    this.container.addEventListener("mouseenter", ()=> {
      const rand = Math.random() < 0.1;
      if (rand == 1) {
        player.coins = this.winFunction(player.coins);
   
      } else {
        player.coins = this.looseFunction(player.coins);

      }
      player.updateCoins();
    })

  }

  winFunction(number) {
    const childList = this.card.childNodes;
    const amount = number + number * this.multiplier;
    childList[1].childNodes[0].textContent = `${this.textBackWin} ${ number * this.multiplier} coins.`;
    return amount;
  }

  looseFunction(number) {
    const childList = this.card.childNodes;
    const amount = number - Math.floor(number / this.multiplier);
    childList[1].childNodes[0].textContent = `${this.textBackLose} ${Math.floor(number / 2)} coins.`;
    return amount;
  }

  renderTexts() {
    const childList = this.card.childNodes;
    childList[0].childNodes[0].textContent = this.textFront;

  }
}

export { Multiply};
export {PlusMinus};
