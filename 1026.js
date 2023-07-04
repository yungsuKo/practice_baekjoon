// const input = require('fs').readFileSync('/dev/stdin').toString().trim();
// S = A[0] × B[0] + ... + A[N-1] × B[N-1]

const input = `5
1 1 1 6 0
2 7 8 3 1`;

const arr = input.split("\n");
const num = Number(arr[0]);
const arrA = arr[1].split(" ").map((el) => Number(el));
const arrB = arr[2].split(" ").map((el) => Number(el));

// B 배열의 최댓값이 있는 곳에 A배열의 최솟값이 있게 함

arrA.sort((a, b) => a - b);
arrB.sort((a, b) => b - a);
let result = 0;
for (let i = 0; i < num; i++) {
  result += arrA[i] * arrB[i];
}

console.log(result);
