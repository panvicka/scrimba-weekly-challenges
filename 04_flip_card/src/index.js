import { DoubleCard } from "./card.js";


window.addEventListener('load', startGame);

function startGame() {
    const wrapper = document.querySelector(".wrapper");
    console.log(wrapper);
    const card = new DoubleCard(wrapper);
     card.renderTexts();
     const Secoscard = new DoubleCard(wrapper);
     Secoscard.renderTexts();
}