const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const [N, M] = input.shift().split(' ').map(Number);
const arr = input[0]
  .split(' ')
  .map(Number)
  .sort((a, b) => a - b);

const arrPlus = arr.filter((i) => i > 0).sort((a, b) => a - b);
const arrMinus = arr.filter((i) => i < 0).sort((a, b) => b - a);
const arrLast = [];
let result = 0;

if (
  Math.max(...arrPlus) >=
  Math.abs(Math.min(...arrMinus) > 0 ? 0 : Math.min(...arrMinus))
) {
  for (let i = 0; i < M; i++) {
    if (arrPlus.length === 0) {
      break;
    }
    arrLast.push(arrPlus.pop());
  }
  while (arrPlus.length > 0) {
    const arrTem = [];
    for (let i = 0; i < M; i++) {
      if (arrPlus.length == 0) {
        break;
      }
      arrTem.push(arrPlus.pop());
    }
    result += Math.max(...arrTem) * 2;
  }
  while (arrMinus.length > 0) {
    const arrTem = [];
    for (let i = 0; i < M; i++) {
      if (arrMinus.length == 0) {
        break;
      }
      arrTem.push(arrMinus.pop());
    }
    result += Math.abs(Math.min(...arrTem)) * 2;
  }
  result += Math.max(...arrLast);
} else {
  for (let i = 0; i < M; i++) {
    if (arrMinus.length === 0) {
      break;
    }
    arrLast.push(arrMinus.pop());
  }
  while (arrPlus.length > 0) {
    const arrTem = [];
    for (let i = 0; i < M; i++) {
      if (arrPlus.length == 0) {
        break;
      }
      arrTem.push(arrPlus.pop());
    }
    result += Math.max(...arrTem) * 2;
  }
  while (arrMinus.length > 0) {
    const arrTem = [];
    for (let i = 0; i < M; i++) {
      if (arrMinus.length == 0) {
        break;
      }
      arrTem.push(arrMinus.pop());
    }
    result += Math.abs(Math.min(...arrTem)) * 2;
  }
  result += Math.abs(Math.min(...arrLast));
}
console.log(result);
