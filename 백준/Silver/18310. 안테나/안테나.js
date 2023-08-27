const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const N = Number(input.shift());
const arr = input[0]
  .split(' ')
  .map(Number)
  .sort((a, b) => a - b);

if (arr.length % 2 === 0) {
  console.log(arr[arr.length / 2 - 1]);
} else {
  console.log(arr[Math.floor(arr.length / 2)]);
}
