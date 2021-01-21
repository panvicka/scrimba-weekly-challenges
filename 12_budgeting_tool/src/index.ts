class DropDownComponent<T extends HTMLElement, U extends HTMLElement> {
  templateElement: HTMLTemplateElement;
  hostElement: T;
  element: U;

  placeholder: string;
  items: Array<string>;

  constructor(
    templateId: string,
    hostElementId: string,
    placeholder: string,
    items: Array<string>
  ) {
    this.placeholder = placeholder;
    this.items = items;

    this.templateElement = <HTMLTemplateElement>(
      document.getElementById(templateId)!
    );

    this.hostElement = <T>document.getElementById(hostElementId)!;

    const importedNode = document.importNode(
      this.templateElement.content,
      true
    );

    this.element = <U>importedNode.firstElementChild;

    this.attach();
    this.render();
  }

  private attach() {
    this.hostElement.insertAdjacentElement('beforeend', this.element);
  }

  render() {
    const dropDownContent = this.element.querySelector('.drop-down-content')!;
    this.items.forEach((item) => {
      const spanElement = document.createElement('span');
      spanElement.textContent = item;
      spanElement.id = item;
      dropDownContent.appendChild(spanElement);
    });
  }
}

const dropDownElementType = new DropDownComponent(
  'dropdown-template',
  'input-form',
  'type',
  ['food', 'fun', 'rent']
);
dropDownElementType.render();
