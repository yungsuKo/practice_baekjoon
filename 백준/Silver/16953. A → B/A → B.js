const input = require('fs').readFileSync('/dev/stdin').toString().trim();
const A = Number(input.split(" ")[0]);
let B = input.split(" ")[1];
let result = 1;

while (A !== Number(B)) {
  if (B[B.length - 1] === "1") {
    B = B.slice(0, B.length - 1);
    result += 1;
  } else if (Number(B) < A) {
    result = -1;
    break;
  } else if (Number(B) % 2 === 0) {
    B = B / 2;
    B = String(B);
    result += 1;
  } else {
    result = -1;
    break;
  }
}
console.log(result);