const gallery = document.querySelector(".gallery");
const numberOfTmages = document.querySelectorAll(".card").length;
const previousButton = document.querySelector(".previous");
const nextButton = document.querySelector(".next");

let currentImg = 0;

function showImage(imagePosition) {
  gallery.style.transform = `translateX(${-imagePosition * 220}px)`;
}

function adjustArrowOpacity(imagePosition) {
  if (imagePosition === 0) {
    previousButton.style.opacity = 0.3;
  } else if (imagePosition === numberOfTmages - 1) {
    nextButton.style.opacity = 0.3;
  } else {
    nextButton.style.opacity = 1;
    previousButton.style.opacity = 1;
  }
}

previousButton.addEventListener("click", () => {
  if (currentImg > 0) {
    currentImg = currentImg - 1;
    showImage(currentImg);
    adjustArrowOpacity(currentImg);
  }
});

nextButton.addEventListener("click", () => {
  if (currentImg < numberOfTmages - 1) {
    currentImg = currentImg + 1;
    showImage(currentImg);
    adjustArrowOpacity(currentImg);
  }
});
