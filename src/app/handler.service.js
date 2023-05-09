import { calculate } from "./calculate.service.js";

const handlerClick = (elem, operation) => {
  if (elem.textContent === '=') {
    operation.value = calculate(operation.value);
  } else if (elem.textContent === 'del') {
    operation.value = operation.value.slice(0, -1);
  } else if (elem.textContent === 'C') {
    operation.value = '';
  } else {
    operation.value += elem.textContent;
  }
}

const handlerKeyDown = (event, operation) => {
    if (event.keyCode === 13) {
    operation.value = calculate(operation.value);
  }
}

export { handlerClick, handlerKeyDown };