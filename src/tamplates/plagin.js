class Tabs {
  constructor({
    rootSelector,
    activeControlClass = 'active',
    activePaneClass = 'active',
    activeTab = 1,
  }) {
    this._refs = this._getRefs(rootSelector);
    this._activeControlClass = activeControlClass;
    this._activePaneClass = activePaneClass;
    this._activeTabIdx = activeTab - 1;

    this._bindEvents();
    this._setActiveTab();
  }

  _getRefs(root) {
    const refs = {};
    refs.controls = document.querySelector(`${root} [data-controls]`);
    refs.panes = document.querySelector(`${root} [data-panes]`);
    return refs;
  }
  _bindEvents() {
    this._refs.controls.addEventListener('click', this._onControlsClick.bind(this));
  }
  _onControlsClick(event) {
    event.preventDefault();
    if (event.target.nodeName !== 'A') {
      return;
    }
    this._removeActiveTab();

    const controlItem = event.target;
    controlItem.classList.add(this._activeControlClass);

    const paneId = this._getPainId(controlItem);
    this._setActivePane(paneId);
  }

  _setActiveTab() {
    const controlItem = this._refs.controls.querySelectorAll('a');
    const control = controlItem[this._activeTabIdx];

    control.classList.add(this._activeControlClass);

    const paneId = this._getPainId(control);
    this._setActivePane(paneId);
  }

  _removeActiveTab() {
    const currentActiveControleItem = this._refs.controls.querySelector(
      `.${this._activeControlClass}`,
    );

    if (!currentActiveControleItem) {
      return;
    }
    currentActiveControleItem.classList.remove(this._activeControlClass);
    const paneId = this._getPainId(currentActiveControleItem);
    this._removeActivePain(paneId);
  }

  _setActivePane(paneId) {
    const pane = this._getPainById(paneId);
    pane.classList.add(this._activePaneClass);
  }

  _removeActivePain(paneId) {
    const pane = this._getPainById(paneId);
    pane.classList.remove(this._activePaneClass);
  }

  _getPainId(control) {
    return control.getAttribute('href').slice(1);
  }

  _getPainById(id) {
    return this._refs.panes.querySelector(`#${id}`);
  }
}

const tabs1 = new Tabs({
  rootSelector: '#tabs-1',
  activeControlClass: 'controls__item--active',
  activePaneClass: 'pane--active',
  activeTab: 1,
});
console.log(tabs1);
