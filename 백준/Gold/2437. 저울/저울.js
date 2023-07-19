const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const cnt = Number(input.shift());
const numArr = input[0]
  .split(' ')
  .map(Number)
  .sort((a, b) => a - b);
let sum = 1;

for (let i = 0; i < numArr.length; i++) {
  if (sum >= numArr[i]) {
    sum += numArr[i];
  } else {
    break;
  }
}
console.log(sum);
