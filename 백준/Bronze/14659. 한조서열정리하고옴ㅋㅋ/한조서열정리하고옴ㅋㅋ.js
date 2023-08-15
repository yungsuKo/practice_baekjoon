const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const N = Number(input[0]);
const arr = input[1].split(' ').map(Number);

let lastResult = 0;

for (let i = 0; i < N; i++) {
  let result = 0;
  for (let j = i + 1; j < N; j++) {
    if (arr[i] > arr[j]) {
      result += 1;
    } else {
      break;
    }
  }
  if (lastResult < result) lastResult = result;
}
console.log(lastResult);
