const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const N = Number(input.shift());
const before = input.shift().split('').map(Number);
const before2 = [...before];
before2[0] = 1 - before2[0];
before2[1] = 1 - before2[1];
const after = input.shift().split('').map(Number);
let result1 = 0;
let result2 = 1;

for (let i = 1; i < N; i++) {
  if (before[i - 1] !== after[i - 1]) {
    for (let j = i - 1; j <= i + 1; j++) {
      if (j >= 0 && j < N) {
        before[j] = 1 - before[j];
      }
    }
    result1++;
  }
}

for (let i = 1; i < N; i++) {
  if (before2[i - 1] !== after[i - 1]) {
    for (let j = i - 1; j <= i + 1; j++) {
      if (j >= 0 && j < N) {
        before2[j] = 1 - before2[j];
      }
    }
    result2++;
  }
}

if (before.join('') == after.join('')) {
  console.log(result1);
} else if (before2.join('') == after.join('')) {
  console.log(result2);
} else {
  console.log(-1);
}
