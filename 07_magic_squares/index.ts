const containerDiv = document.querySelector<HTMLElement>(".container");

window.addEventListener("load", () => generateDivs(containerDiv));

const ROWS = 4;
const TILES_IN_ROWS = 4;

//https://stackoverflow.com/questions/1740700/how-to-get-hex-color-value-rather-than-rgb-value
var hexDigits = new Array(
  "0",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "a",
  "b",
  "c",
  "d",
  "e",
  "f"
);

//Function to convert rgb color to hex format
function rgb2hex(rgb: string) {
  const rgbArray = rgb.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/);

  return "#" + hex(rgbArray[1]) + hex(rgbArray[2]) + hex(rgbArray[3]);
}

function hex(x) {
  return isNaN(x) ? "00" : hexDigits[(x - (x % 16)) / 16] + hexDigits[x % 16];
}

// https://stackoverflow.com/questions/35969656/how-can-i-generate-the-opposite-color-according-to-current-color
function padZero(str, len) {
  len = len || 2;
  var zeros = new Array(len).join("0");
  return (zeros + str).slice(-len);
}

function invertColor(hex) {
  if (hex.indexOf("#") === 0) {
    hex = hex.slice(1);
  }
  // convert 3-digit hex to 6-digits.
  if (hex.length === 3) {
    hex = hex[0] + hex[0] + hex[1] + hex[1] + hex[2] + hex[2];
  }
  if (hex.length !== 6) {
    //fallback color, psst
    hex = "#0362fc";
  }
  // invert color components
  var r = (255 - parseInt(hex.slice(0, 2), 16)).toString(16),
    g = (255 - parseInt(hex.slice(2, 4), 16)).toString(16),
    b = (255 - parseInt(hex.slice(4, 6), 16)).toString(16);
  // pad each with zeros and return
  return "#" + padZero(r, 2) + padZero(g, 2) + padZero(b, 2);
}

function getDivInvertedColor(div: HTMLElement) {
  var theCSSprop = window
    .getComputedStyle(div, null)
    .getPropertyValue("background-color");
  const color = rgb2hex(theCSSprop);
  const invertedColor = invertColor(color);
  return invertedColor;
}

function handleTileClick(e: MouseEvent) {
  const clickedRow = (<HTMLInputElement>e.target).dataset.row;
  const clickedCol = (<HTMLInputElement>e.target).dataset.column;

  const allRowsDivs = document.querySelectorAll<HTMLElement>(
    `[data-row="${clickedRow}"]`
  );
  const allColsDivs = document.querySelectorAll<HTMLElement>(
    `[data-column="${clickedCol}"]`
  );

  allRowsDivs.forEach((div, i) => {
    if (i != parseInt(clickedCol)) {
      const timeDelay = Math.abs(parseInt(clickedCol) - i);
      setTimeout(() => {
        div.style.backgroundColor = getDivInvertedColor(div);
      }, timeDelay * 100);
    }
  });

  allColsDivs.forEach((div, i) => {
    if (i != parseInt(clickedCol)) {
      const timeDelay = Math.abs(parseInt(clickedCol) - i);
      setTimeout(() => {
        div.style.backgroundColor = getDivInvertedColor(div);
      }, timeDelay * 100);
    }
  });

  if (clickedCol === clickedRow) {
    allColsDivs[clickedCol].style.backgroundColor = getDivInvertedColor(
      allColsDivs[clickedCol]
    );
  }
}

function generateDivs(div: HTMLElement) {
  const randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
  const invertedColor = invertColor(`${randomColor}`);

  for (let i = 0; i <= ROWS; i++) {
    const newColDiv = document.createElement("div");
    newColDiv.classList.add("column");

    for (let j = 0; j <= TILES_IN_ROWS; j++) {
      const newRowDiv = document.createElement("div");
      newRowDiv.classList.add("tile");
      newRowDiv.setAttribute("data-column", `${i}`);
      newRowDiv.setAttribute("data-row", `${j}`);
      newRowDiv.addEventListener("click", handleTileClick);

      const randomBoolean = Math.random() <= 0.5;
      randomBoolean
        ? (newRowDiv.style.backgroundColor = `${randomColor}`)
        : (newRowDiv.style.backgroundColor = `${invertedColor}`);

      newColDiv.appendChild(newRowDiv);
    }
    div.appendChild(newColDiv);
  }
}
