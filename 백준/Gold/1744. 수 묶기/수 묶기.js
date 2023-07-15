const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

const cnt = input.shift();
const arrA = [];
const arrB = [];
let isZero = false;
const arr = input.map(Number).map((i) => {
  if (i > 0) {
    arrA.push(i);
  } else if (i < 0) {
    arrB.push(i);
  } else {
    isZero = true;
  }
  return;
});
arrA.sort((a, b) => b - a);
arrB.sort((a, b) => a - b);

let resultA = 0;
let resultB = 0;

for (let i = 0; i < arrA.length; i += 2) {
  if (arrA[i] == 1 || arrA[i + 1] == 1) {
    resultA += arrA[i] + (arrA[i + 1] ? arrA[i + 1] : 0);
  } else {
    resultA += arrA[i] * (arrA[i + 1] ? arrA[i + 1] : 1);
  }
}

for (let i = 0; i < arrB.length; i += 2) {
  if (arrB[i + 1]) {
    // arrB.length가 짝수인경우
    resultB += arrB[i] * arrB[i + 1];
  } else {
    // arrB.length가 홀수인경우
    if (isZero) {
      resultB += 0;
    } else {
      // 0 여부를 고려해야함
      resultB += arrB[i];
    }
  }
}
// 0이 있는경우

console.log(resultA + resultB);
