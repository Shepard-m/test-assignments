const RenderPosition = {
  BEFOREBEGIN: 'beforebegin',
  AFTERBEGIN: 'afterbegin',
  BEFOREEND: 'beforeend',
  AFTEREND: 'afterend',
};

function createElement(template) {
  const newElement = document.createElement('div');
  newElement.innerHTML = template;

  return newElement.firstElementChild;
}

function render(component, container, place = RenderPosition.BEFOREEND) {

  if (container === null) {
    throw new Error('Container element doesn\'t exist');
  }

  container.insertAdjacentHTML(place, component);
}

function replace(newComponent, oldComponent) {

  const newElement = newComponent.element;
  const oldElement = oldComponent.element;

  const parent = oldElement.parentElement;

  if (parent === null) {
    throw new Error('Parent element doesn\'t exist');
  }

  parent.replaceChild(newElement, oldElement);
}

function remove(component) {
  if (component === null) {
    return;
  }

  component.element.remove();
  component.removeElement();
}

export {RenderPosition, createElement, render, replace, remove};
