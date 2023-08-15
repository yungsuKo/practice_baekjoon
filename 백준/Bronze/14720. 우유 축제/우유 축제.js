const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const N = Number(input[0]);
const arr = input[1].split(' ').map(Number);

let now = 0;
let result = 0;
for (let i = 0; i < N; i++) {
  if (arr[i] == now) {
    now += 1;
    result += 1;
    if (now > 2) {
      now = 0;
    }
  }
}
console.log(result);
