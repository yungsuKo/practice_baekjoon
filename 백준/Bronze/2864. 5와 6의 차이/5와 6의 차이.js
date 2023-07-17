const input = require('fs').readFileSync('/dev/stdin').toString().trim();

const arr = input.split(' ');
let min = 0;
let max = 0;
for (let i = 0; i < arr.length; i++) {
  while (arr[i].indexOf('5') > -1) {
    const position5 = arr[i].indexOf('5');
    const splitArr = arr[i].split('');
    splitArr[position5] = 6;
    arr[i] = splitArr.join('');
  }
  max += Number(arr[i]);

  while (arr[i].indexOf('6') > -1) {
    const position5 = arr[i].indexOf('6');
    const splitArr = arr[i].split('');
    splitArr[position5] = 5;
    arr[i] = splitArr.join('');
  }
  min += Number(arr[i]);
}

console.log(min, max);
