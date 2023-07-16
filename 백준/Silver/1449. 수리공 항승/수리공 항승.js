const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const [cnt, leng] = input.shift().split(' ').map(Number);
let points = input
  .shift()
  .split(' ')
  .map(Number)
  .sort((a, b) => a - b);
let result = 0;

while (points.length > 0) {
  const start = points[0] - 0.5;
  const end = points[0] + leng - 0.5;
  points = points.filter((i) => i > end);
  result += 1;
}

console.log(result);
