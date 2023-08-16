const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const N = Number(input.shift());
const arr = input.map(Number).sort((a, b) => a - b);
let result = 0;

for (let i = 0; i < N; i++) {
  result += Math.abs(i + 1 - arr[i]);
}

console.log(result);
