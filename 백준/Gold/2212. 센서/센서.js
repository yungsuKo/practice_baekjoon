const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const [N, K, arr] = input;

const distArr = [];
let newarr = arr
  .split(' ')
  .map(Number)
  .sort((a, b) => a - b);
for (let i = 0; i < newarr.length - 1; i++) {
  distArr.push(newarr[i + 1] - newarr[i]);
}
distArr.sort((a, b) => b - a);

let result = 0;
for (let i = K - 1; i < N - 1; i++) {
  result += distArr[i];
}
console.log(result);
