const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

const N = Number(input.shift());
const arr = input
  .map((i) => i.split(' ').map(Number))
  .sort((a, b) => a[0] - b[0]);
const arrA = arr.map((i) => i[0]);
const max = Math.max(...arrA);

let newArr = [];
let result = 0;
for (let i = max; i >= 1; i--) {
  while (arr[arr.length - 1] && arr[arr.length - 1][0] >= i) {
    newArr.push(arr.pop());
  }
  if (newArr[0]) {
    newArr.sort((a, b) => a[1] - b[1]);
    result += newArr.pop()[1];
  }
}

console.log(result);