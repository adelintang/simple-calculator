const operation = document.querySelector('.operation');
const button = document.querySelectorAll('button');

const calculate = (value) => {
  const pair = {
    'x': '*',
    ',': '.',
    '.': ','
  }

  const result = value.split('').map(e => pair[e] || e).join('');
  const newResult = eval(result);
  return /./g.test(newResult) ? newResult.toString().split('').map(e => pair[e] || e).join('') : newResult;
}

button.forEach(elem => {
  elem.addEventListener('click', () => {
    if (elem.textContent === '=') {
      operation.value = calculate(operation.value);
    } else if (elem.textContent === 'del') {
      operation.value = operation.value.slice(0, -1);
    } else if (elem.textContent === 'C') {
      operation.value = '';
    } else {
      operation.value += elem.textContent;
    }
  })
})

operation.addEventListener('keydown', (event) => {
  if (event.keyCode === 13) {
    operation.value = calculate(operation.value);
  }
})

// console.log(button);

// elem.forEach((el) => {
//   el.addEventListener('click', () => {
//     operation.value += el.textContent;
//   })
// })

// button.addEventListener('click', () => {
//   operation.value = eval(operation.value);
// });

// btnDel.addEventListener('click', () => {
//   operation.value = operation.value.slice(0, -1);
// });