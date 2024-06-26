import AbstractView from '../framework/view/abstract-view';
import {sorterTemplate} from '../template/sorter-template';

export default class SorterView extends AbstractView {
  constructor() {
    super();
    this._callback = {};
  }

  get template() {
    return sorterTemplate();
  }

  #sortTypeChangeHandler = (evt) => {
    if (evt.target.tagName !== 'INPUT' || evt.target.type !== 'radio') {
      return;
    }
    evt.preventDefault();
    this._callback.sortTypeChange(evt.target.dataset.sortType);
  };

  setSortTypeChangeHandler(callback) {
    this._callback.sortTypeChange = callback;
    this.element.addEventListener('change', this.#sortTypeChangeHandler);
  }

  resetSortType() {
    const sortTypeInputs = this.element.querySelectorAll('input[type="radio"]');
    sortTypeInputs.forEach((input) => {
      input.checked = input.dataset.sortType === 'Day';
    });
  }
}
