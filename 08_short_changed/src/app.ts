import { Currency } from "./currency";
import { czechCrows } from "./czk";
import { euros } from "./euro";
import { addIconsPaths } from "./icons_svg";

import faker from "faker";

const coinsForm = document.querySelector<HTMLElement>(".coins-form")!;
const walletButton = document.querySelector<HTMLButtonElement>(".find-wallet")!;
const productButton = document.querySelector<HTMLButtonElement>(
  ".find-product"
)!;
const euroButton = document.querySelector<HTMLButtonElement>(".currency-euro")!;
const czkButton = document.querySelector<HTMLButtonElement>(".currency-czk")!;

let currentProductPrice: number;
let currencyAktiv: Currency = czechCrows;

coinsForm.addEventListener("change", comparePrices);
euroButton.addEventListener("click", switchCurrency);
czkButton.addEventListener("click", switchCurrency);

walletButton.addEventListener("click", () => {
  if (coinsForm) {
    currencyAktiv.generateForm(coinsForm);
    comparePrices();
  }
});

productButton.addEventListener("click", () => {
  renderRandomProduct();
  comparePrices();
});

window.addEventListener("load", () => {
  addIconsPaths();
  renderRandomProduct();
  if (coinsForm) {
    currencyAktiv.generateForm(coinsForm);
  }
  comparePrices();
  switchCurrency();
});

function switchCurrency() {
  if (currencyAktiv === czechCrows) {
    currencyAktiv = euros;
    euroButton.classList.add("activated");
    czkButton.classList.remove("activated");
  } else {
    currencyAktiv = czechCrows;
    czkButton.classList.add("activated");
    euroButton.classList.remove("activated");
  }
  if (coinsForm) {
    currencyAktiv.generateForm(coinsForm);
  }
  comparePrices();
  renderRandomProduct();
}

function comparePrices() {
  const totalInWallet = currencyAktiv.calculateTotal();
  const productNameSpan = document.querySelector<HTMLSpanElement>(
    ".can-you-buy"
  )!;
  if (currentProductPrice <= totalInWallet) {
    productNameSpan.innerText = "You can buy";
  } else {
    productNameSpan.innerText = "You can't buy";
  }
}

function renderRandomProduct() {
  const productNameSpan = document.querySelector<HTMLSpanElement>(
    ".product-name"
  )!;
  const productPriceSpan = document.querySelector<HTMLSpanElement>(
    ".product-price"
  )!;

  productNameSpan.innerText = `${faker.commerce
    .productAdjective()
    .toLowerCase()}   ${faker.commerce.product().toLowerCase()}`;

  let price = faker.commerce.price();
  console.log(price);
  
  price = price.substring(0, price.length-3);
  console.log(price);
  productPriceSpan.innerText = `${price} ${currencyAktiv.symbol}`;

  currentProductPrice = parseInt(price);
}
