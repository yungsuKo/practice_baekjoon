const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

const N = Number(input.shift());
const arr = input[0]
  .split(' ')
  .map(Number)
  .sort((a, b) => a - b);

arr.pop();

console.log(arr.reduce((a, b) => a + b));
