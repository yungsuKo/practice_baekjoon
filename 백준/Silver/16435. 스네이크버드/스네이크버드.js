const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
let [N, L] = input.shift().split(' ').map(Number);
const arr = input[0]
  .split(' ')
  .map(Number)
  .sort((a, b) => a - b);

for (let i = 0; i < arr.length; i++) {
  if (L >= arr[i]) {
    L += 1;
  } else {
    break;
  }
}
console.log(L);
