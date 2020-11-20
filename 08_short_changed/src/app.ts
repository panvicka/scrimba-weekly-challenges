import { czechCrows } from "./czk";
import { addIconsPaths } from "./icons_svg";

import faker from "faker";

const coinsForm = document.querySelector<HTMLElement>(".coins-form");
const walletButton = document.querySelector<HTMLButtonElement>(".find-wallet")!;
const productButton = document.querySelector<HTMLButtonElement>(
  ".find-product"
)!;

walletButton.addEventListener("click", () => {
  if (coinsForm) {
    czechCrows.generateForm(coinsForm);
  }
});

window.addEventListener("load", () => {
  addIconsPaths();
  renderRandomProduct();
});

function renderRandomProduct() {
  const productNameSpan = document.querySelector<HTMLSpanElement>(
    ".product-name"
  )!;
  const productPriceSpan = document.querySelector<HTMLSpanElement>(
    ".product-price"
  )!;

  productNameSpan.innerText = `${faker.commerce.productAdjective()}   ${faker.commerce
    .product()
    .toLowerCase()}`;
  productPriceSpan.innerText = faker.commerce.price();
}

czechCrows.printCoins();

czechCrows.calculateTotal();
