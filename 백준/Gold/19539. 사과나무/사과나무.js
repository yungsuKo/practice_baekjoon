const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const position = input.shift();
const arr = input[0].split(' ').map(Number);

let turn = Math.floor(arr.reduce((prev, curr) => prev + curr) / 3);
if (arr.reduce((prev, curr) => prev + curr) % 3 !== 0) {
  console.log('NO');
} else {
  arr.forEach((i) => (turn -= i % 2));
  if (turn < 0) {
    console.log('NO');
  } else {
    console.log('YES');
  }
}
