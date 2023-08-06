const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

const raw = ['A', 'C', 'G', 'T'];
const [N, M] = input.shift().split(' ');
const arr = input;

let strResult = '';
let result = 0;

for (i = 0; i < M; i++) {
  let semiObj = { A: 0, C: 0, G: 0, T: 0 };
  for (j = 0; j < N; j++) {
    semiObj[arr[j][i]] = semiObj[arr[j][i]] + 1;
  }
  let max = Math.max(...Object.values(semiObj));
  let key = Object.keys(semiObj).find((key) => {
    if (max === semiObj[key]) {
      return key;
    }
  });
  result = result + Number(N) - max;
  strResult += key;
}

console.log(strResult);
console.log(result);