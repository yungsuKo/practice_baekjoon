const input = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ').map(Number);

const [A, B, C, M] = input;

let hard = 0;
let work = 0;
for (let i = 0; i < 24; i++) {
  if (M >= hard + A) {
    hard += A;
    work += B;
  } else {
    hard = hard - C > 0 ? hard - C : 0;
  }
}

console.log(work);
