class Cards {
    constructor(parentDiv) {
        this.parentDiv = parentDiv;
        
    }

    winFunction(number) {      
    }

    looseFunction(number) {        
    }



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


       containerElement.addEventListener('mouseover', ()=>{
        containerElement.classList.add("hoverAdded");
       })
       containerElement.addEventListener('mouseleave', ()=>{
        containerElement.classList.remove("hoverAdded");
       })

       return cardElement;

    }
}

class DoubleCard extends Cards {

    constructor(parentDiv) {
         super(parentDiv);
         this.parentDiv = parentDiv;
         this.textFront="Double your coins or loose half of it!"
         this.textBackWin="You won! Your coins are doubled!"
         this.textBackLose="You loose! I am sorry I am taking half of yours coins!"

         this.card = this.renderCard();
          
        
    }

    winFunction(number) {
      
        const childList = this.card.childNodes;
        childList[1].childNodes[0].textContent = this.textFront;
        return number*2;
    }

    looseFunction(number) {
     
        const childList = this.card.childNodes;
        childList[1].childNodes[0].textContent = this.textFront;
        return Math.floor(number/2);
    }

    renderTexts() {
         
      const childList = this.card.childNodes;

      //.textContent = "Hello";
      childList[0].childNodes[0].textContent = this.textFront;
      console.log(childList);

      console.log(childList[1].childNodes[0]);
      console.log(childList[0].childNodes);
     }






}

export { DoubleCard };
