import { Multiply } from "./card.js";
import { PlusMinus } from "./card.js";
import Player from "./player.js";


window.addEventListener('load', startGame);

function startGame() {
    const wrapper = document.querySelector(".wrapper");
    const player = new Player();
    player.updateCoins();
    console.log(wrapper);
    const card = new Multiply(wrapper, 3, player);
     card.renderTexts();
     const Secoscard = new PlusMinus(wrapper, 2, 3, player);
     Secoscard.renderTexts();
     
     console.log(player.coins);

   

}

