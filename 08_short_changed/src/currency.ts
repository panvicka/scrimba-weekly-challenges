type Coin = {
  name: string;
  value: number;
  id: string;
  amount?: number;
};

export class Currency {
  constructor(private symbol: string, private coins: Coin[]) {}

  printCoins() {
    this.coins.forEach((coin) => {
      console.log(coin);
    });
  }

  randomizeCoins() {
    this.coins.forEach((coin) => {
      coin.value = Math.round(Math.random() * 15 + 1);
    });
  }

  generateForm(div: HTMLElement) {
    div.innerHTML = "";
    this.randomizeCoins();
    let newFormContainer = document.createElement("div");

    this.coins.forEach((coin) => {
      newFormContainer.innerHTML += `<label>${coin.name}</label>
        <input type="number" id="${coin.id}" min="0" max="10000" value="${coin.value}"><br>`;

      document
        .querySelector(`#${coin.id}`)
        ?.addEventListener("change", this.calculateTotal.bind(this));
    });
    div.appendChild(newFormContainer);
    this.calculateTotal();
  }

  calculateTotal(this: Currency): number {
    console.log("triggered");

    let total = 0;

    this.coins.forEach((coin, i) => {
      //this.printCoins();
      const input = <HTMLInputElement>document.querySelector(`#${coin.id}`);
      coin.amount = parseInt(input.value);
      total += coin.amount * coin.value;
    });

    console.log(total);
    const totalField = document.querySelector<HTMLSpanElement>(".total-field");
    if (totalField) {
      totalField.innerHTML = `${total} ${this.symbol} `;
    }

    return total;
  }
}

export { Coin };
