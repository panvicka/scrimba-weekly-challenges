import LogoBack from "./logoBack.js";

window.addEventListener("load", loadDefaultLogo);

const logoBackDiv = document.getElementById("logo-back");
const logoText = document.getElementById("logo-text");


const form = document.getElementById("logo-desing");
const borderRadiusSlider = document.getElementById("border-radius");
const widthSlider = document.getElementById("width");
const heightSlider = document.getElementById("height");
const backColorPicker = document.getElementById("background-color");
const textInput = document.getElementById("logo-text-input");
const textColorPicker = document.getElementById("text-color");
const textSize = document.getElementById("text-size");

const shadowActive = document.getElementById("shadow-active");
const shadowX = document.getElementById("x-offset");
const shadowY = document.getElementById("y-offset");
const shadowBlur = document.getElementById("blur");
const shadowSpread = document.getElementById("spread");
const shadowColor = document.getElementById("shadow-color");

form.addEventListener("input", handleFormChange);

const logoBackData = {
  borderRadius: 10,
  width: 300,
  height: 100,
  backgroundColor: "#cc66ff",
  shadow: {
    active: true,
    offsetX: 10,
    offsetY: 20,
    blur: 10,
    spread: 2,
    color: "#cc88ff",
  },
  textColor: "#ccccff",
  text: "Sample Text",
  textSize: 40,
};

const logoBack = new LogoBack(logoBackData);

function handleFormChange() {
  logoBackData.borderRadius = borderRadiusSlider.value;
  logoBackData.width = widthSlider.value;
  logoBackData.height = heightSlider.value;
  logoBackData.backgroundColor = backColorPicker.value;
  logoBackData.text = textInput.value;
  logoBackData.textColor =textColorPicker.value;
  logoBackData.textSize = textSize.value;

   logoBackData.shadow.active = shadowActive.checked;

  logoBackData.shadow.offsetX = shadowX.value;
  logoBackData.shadow.offsetY = shadowY.value;
  logoBackData.shadow.blur = shadowBlur.value;
  logoBackData.shadow.spread = shadowSpread.value;
  logoBackData.shadow.color = shadowColor.value;

  logoBack.draw(logoBackDiv, logoText);

  updateSliders();
}

function updateSliders() {
  borderRadiusSlider.max = logoBack.height / 2;
 
  if ( shadowActive.checked !== true) {
     shadowX.disabled = true;
    shadowY.disabled = true;
    shadowSpread.disabled = true;
    shadowBlur.disabled = true;
    shadowColor.disabled = true;
  } else {
     
    shadowX.disabled = false;
    shadowY.disabled = false;
    shadowSpread.disabled = false;
    shadowBlur.disabled = false;
    shadowColor.disabled = false;
  }  
}

function loadDefaultLogo() {
 
  borderRadiusSlider.value = logoBackData.borderRadius;
  backColorPicker.value = logoBackData.backgroundColor;
  textInput.value = logoBackData.text;
  textSize.value = logoBackData.textSize;

  textColorPicker.value = logoBackData.textColor;
  shadowX.value = logoBackData.shadow.offsetX;
  shadowY.value = logoBackData.shadow.offsetY;
  shadowActive.checked = logoBackData.shadow.active;
  shadowBlur.value = logoBackData.shadow.blur;
  shadowSpread.value = logoBackData.shadow.spread;
  shadowColor.value = logoBackData.shadow.color;


  logoBack.draw(logoBackDiv,logoText);
  updateSliders();
}
