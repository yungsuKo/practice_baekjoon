const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const N = input.shift();
const arr = input.map(Number).sort((a, b) => b - a);
let result = -1;

for (let i = 0; i < arr.length - 2; i++) {
  if (arr[i] < arr[i + 1] + arr[i + 2]) {
    result = arr[i] + arr[i + 1] + arr[i + 2];
    break;
  }
}

console.log(result);