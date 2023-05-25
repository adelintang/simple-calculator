import { handlerClick, handlerKeyDown } from "./app/handler.service.js";
import "./style.css";

const operation = document.querySelector('.operation');
const button = document.querySelectorAll('button');

button.forEach(elem => {
  elem.addEventListener('click', () => handlerClick(elem, operation));
})

operation.addEventListener('keydown', (event) => handlerKeyDown(event, operation));
