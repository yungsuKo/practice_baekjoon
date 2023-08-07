const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

const T = Number(input.shift());
for (let i = 0; i < T; i++) {
  let length = input.shift();
  let arr = input.shift().split(' ').map(Number);
  arr.sort((a, b) => a - b);
  let max = 0;
  for (let j = 2; j < length; j++) {
    max = Math.max(max, Math.abs(arr[j - 2] - arr[j]));
  }
  console.log(max);
}
