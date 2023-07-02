// const input = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ');
// 3, 5kg 이 있음.
// 주어진 정수가 3*n, 5*m로 나누어 떨어져야함
// x = 3*n + 5*m, n+m의 최솟값을 구하라
// n+m의 최대값은 x/3
// n+m의 최소값은 x/5
const input = 4;
const min = Math.floor(input / 5) + 1;
const max = Math.floor(input / 3) + 1;
let result;

for (i = min; i >= 0; i--) {
  for (j = 0; j <= max; j++) {
    if (5 * i + 3 * j == input) {
      result = i + j;
      console.log(result);
      return;
    }
  }
  if (i == 0 && result == undefined) console.log(-1);
}
