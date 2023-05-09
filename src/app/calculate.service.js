export const calculate = (value) => {
  const pair = {
    'x': '*',
    ',': '.',
    '.': ','
  }

  const result = value.split('').map(e => pair[e] || e).join('');
  const newResult = eval(result);
  return /./g.test(newResult) ? newResult.toString().split('').map(e => pair[e] || e).join('') : newResult;
}
