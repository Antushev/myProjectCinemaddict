import {createElement} from './../utils.js';

export default class AbstractComponent {
  constructor() {
    if (new.target === AbstractComponent) {
      throw new Error(`Нельзя создать экземпляр абстрактного компонента`);
    }

    this._element = null;
  }

  getTemplate() {
    throw new Error(`Данный метод необходимо переопределить в классе-потомке`);
  }

  getElement() {
    if (!this._element) {
      this._element = createElement(this.getTemplate());
    }

    return this._element;
  }

  removeElement() {
    this._element = null;
  }
}
