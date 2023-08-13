const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const N = Number(input.shift());
let dasom = Number(input.shift());
const arr = input.map(Number);
let result = 0;
while (dasom <= Math.max(...arr)) {
  arr[arr.indexOf(Math.max(...arr))] -= 1;
  dasom += 1;
  result += 1;
}
console.log(result);
