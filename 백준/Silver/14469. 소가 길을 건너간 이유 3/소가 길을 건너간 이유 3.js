const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const N = Number(input.shift());
const arr = input
  .map((i) => i.split(' ').map(Number))
  .sort((a, b) => a[0] - b[0]);
let start = 0;
let end = 0;

for (let i = 0; i < arr.length; i++) {
  start = arr[i][0] >= end ? arr[i][0] : end;
  end = start + arr[i][1];
}

console.log(end);
