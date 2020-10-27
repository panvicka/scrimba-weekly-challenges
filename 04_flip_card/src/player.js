export default class Player {
  constructor() {
    this._coins = 50;
    this.rounds = 0;
  }

  set coins(newCoins) {
    this._coins = newCoins;
  }

  get coins() {
    return this._coins;
  }

  increaseRounds() {
    this.rounds++;
  }
  updateCoins() {
    if (this._coins > 0) {
      document.getElementById("coins").textContent = `${this._coins}`;
    } else {
      document.getElementById("coins").textContent = `no coins :(`;
      this._coins = 0;
    }
  }
}
