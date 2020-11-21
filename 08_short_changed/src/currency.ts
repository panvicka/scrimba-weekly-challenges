type Coin = {
  name: string;
  value: number;
  id: string;
  amount?: number;
};

export class Currency {
  private _total: number = 0;
  constructor(private symbol: string, private coins: Coin[]) {}

  get total() {
    return this._total;
  }

  printCoins() {
    this.coins.forEach((coin) => {
      console.log(coin);
    });
  }

  randomizeCoins() {
    this.coins.forEach((coin) => {
      coin.amount = Math.round(Math.random() * 6 + 1);
    });
  }

  generateForm(div: HTMLElement) {
    div.innerHTML = "";
    this.randomizeCoins();
    let newFormContainer = document.createElement("div");

    this.coins.forEach((coin) => {
      newFormContainer.innerHTML += `<label>${coin.name}</label>
        <input type="number" id="${coin.id}" min="0" max="10000" value="${coin.amount}"><br>`;
    });
    div.appendChild(newFormContainer);
    // document.querySelectorAll("input").forEach((input) => {
    //   input.addEventListener("change", this.calculateTotal.bind(this));
    // });

    this._total = this.calculateTotal();
  }

  calculateTotal(this: Currency): number {

    let runningTotal = 0;

    this.coins.forEach((coin, i) => {
      const input = <HTMLInputElement>document.querySelector(`#${coin.id}`);
      coin.amount = parseInt(input.value);
      runningTotal += coin.amount * coin.value;
    });

    console.log(this.coins);
    const totalField = document.querySelector<HTMLSpanElement>(".total-field");
    if (totalField) {
      totalField.innerHTML = `${runningTotal} ${this.symbol} `;
    }

    return runningTotal;
  }
}

export { Coin };
