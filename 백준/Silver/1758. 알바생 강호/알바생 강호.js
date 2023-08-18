const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const N = Number(input.shift());
const arr = input.map(Number).sort((a, b) => b - a);
let result = 0;

for (let i = 0; i < N; i++) {
  let tip = arr[i] - i > 0 ? arr[i] - i : 0;
  result += tip;
}

console.log(result);
