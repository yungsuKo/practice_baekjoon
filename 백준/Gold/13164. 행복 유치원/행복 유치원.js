const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const [N, K] = input.shift().split(' ').map(Number);
const arr = input[0].split(' ').map(Number);
const temp = [];
let minSum = 0;

for (let i = 1; i < arr.length; i++) {
  temp.push(arr[i] - arr[i - 1]);
}
temp.sort((a, b) => a - b);
for (let i = 0; i < K - 1; i++) {
  temp.pop();
}
for (let i = 0; i < temp.length; i++) {
  minSum += temp[i];
}

console.log(minSum);

