export default class LogoBack {
  constructor(props) {
    this._props = props;

    // this._borderRadius = props.borderRadius;
    // this._width = props.width;
    // this._height = props.height;
    // this._backgroundColor = props.backgroundColor;
    // this._shadow = props.shadow; // object
  }

  set props(props) {
    this._props = props;
  }

  get height() {
    return this._props.height;
  }

  // set width(width) {
  //   this._width = width;
  // }

  // set height(height) {
  //   this._height = height;
  // }

  // set backgroundColor(backgroundColor) {
  //   this._backgroundColor = backgroundColor;
  // }

  // set shadow(shadow) {
  //   this._shadow = shadow;
  // }

  draw(divContext, logoText) {
    divContext.style.backgroundColor = `${this._props.backgroundColor}`;
    divContext.style.width = `${this._props.width}px`;
    divContext.style.height = `${this._props.height}px`;
    divContext.style.border = `0px solid ${this._props.backgroundColor} ${this._props.borderRadius}%`;
    divContext.style.borderRadius = `${this._props.borderRadius}px`;
    divContext.style.color = `${this._props.textColor}`;
    divContext.style.fontSize = `${this._props.textSize}px`;

    if (this._props.shadow.active === true) { 
    divContext.style.boxShadow = `${this._props.shadow.offsetX}px 
                                  ${this._props.shadow.offsetY}px 
                                  ${this._props.shadow.blur}px 
                                  ${this._props.shadow.spread}px
                                  ${this._props.shadow.color}`;
    } else {
      divContext.style.boxShadow = "none";
    }

    logoText.textContent = this._props.text;
  }
}
