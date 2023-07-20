const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const num = Number(input.shift());
const arr = input.map(Number);
let result = 0;

for (let i = arr.length - 1; i > 0; i--) {
  while (arr[i - 1] >= arr[i]) {
    arr[i - 1] = arr[i - 1] - 1;
    result += 1;
  }
}

console.log(result);