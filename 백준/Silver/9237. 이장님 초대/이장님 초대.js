const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const n = Number(input.shift());
const arr = input[0]
  .split(' ')
  .map(Number)
  .sort((a, b) => b - a);
const days = [];
for (let i = 0; i < arr.length; i++) {
  days.push(arr[i] + i + 2);
}

console.log(Math.max(...days));
