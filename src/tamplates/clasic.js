/* const refs = {
  controls: document.querySelector(`#tabs-1 [data-controls]`),
  panes: document.querySelector(`#tabs-1 [data-panes]`),
};

refs.controls.addEventListener('click', onControlsClick);

function onControlsClick(event) {
  event.preventDefault();
  if (event.target.nodeName !== 'A') {
    return;
  }
  const currentActiveControleItem = refs.controls.querySelector('.controls__item--active');

  if (currentActiveControleItem) {
    currentActiveControleItem.classList.remove('controls__item--active');

    const paneId = getPainId(currentActiveControleItem);
    const pane = getPainById(paneId);
    pane.classList.remove('pane--active');
  }

  const controlItem = event.target;
  controlItem.classList.add('controls__item--active');

  const paneId = getPainId(controlItem);
  const pane = getPainById(paneId);
  pane.classList.add('pane--active');
}

function getPainId(control) {
  return control.getAttribute('href').slice(1);
}

function getPainById(id) {
  return refs.panes.querySelector(`#${id}`);
} */
