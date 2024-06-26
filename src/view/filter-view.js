import AbstractView from '../framework/view/abstract-view';
import {filterViewTemplate} from '../template/filter-view-template';

export default class FilterView extends AbstractView {
  constructor() {
    super();
  }

  setFilterTypeChangeHandler(callback) {
    this.element.addEventListener('change', (evt) => {
      evt.preventDefault();
      callback(evt.target.value);
    });
  }

  toggleFilter(filterType, isDisabled) {
    const filterElement = this.element.querySelector(`#filter-${filterType.toLowerCase()}`);
    if (filterElement) {
      filterElement.disabled = isDisabled;
    }
  }

  get template() {
    return filterViewTemplate;
  }

  updateFilter(filterType) {
    this.element.querySelector(`#filter-${filterType.toLowerCase()}`).checked = true;
  }
}
