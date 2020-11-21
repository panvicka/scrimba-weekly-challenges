import { czechCrows } from "./czk";
import { addIconsPaths } from "./icons_svg";

import faker from "faker";

const coinsForm = document.querySelector<HTMLElement>(".coins-form")!;
const walletButton = document.querySelector<HTMLButtonElement>(".find-wallet")!;
const productButton = document.querySelector<HTMLButtonElement>(
  ".find-product"
)!;

let currentProductPrice: number;

coinsForm.addEventListener("change", comparePrices);

walletButton.addEventListener("click", () => {
  if (coinsForm) {
    czechCrows.generateForm(coinsForm);
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
    czechCrows.generateForm(coinsForm);
  }
  comparePrices();
});

function comparePrices() {
  const totalInWallet = czechCrows.calculateTotal();
  const productNameSpan = document.querySelector<HTMLSpanElement>(
    ".can-you-buy"
  )!;
  if (currentProductPrice <= totalInWallet) {
    productNameSpan.innerText = "you can buy";
  } else {
    productNameSpan.innerText = "you can't buy";
  }
}

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

  currentProductPrice = parseInt(productPriceSpan.innerText);
}
