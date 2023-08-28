const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

const N = Number(input.shift());
const arr = input.map(Number);

for (let i = 0; i < arr.length; i++) {
  let sum = arr[i];
  const result = [];
  while (sum !== 0) {
    let a = 0;
    let b = 1;
    while (sum >= b) {
      let c = a + b;
      a = b;
      b = c;
    }
    sum = sum - a;
    result.push(a);
  }
    console.log(result.sort((a, b) => a - b).join(' '));
}
