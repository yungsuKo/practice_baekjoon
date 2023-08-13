const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const [N, K] = input.shift().split(' ').map(Number);
const arr = input[0].split('');
let result = 0;

for (let i = 0; i < N; i++) {
  if (arr[i] === 'P') {
    // 주변에 햄버거 조회
    for (let j = i - K; j <= i + K; j++) {
      if (arr[j] === 'H') {
        arr[j] = 'X';
        result += 1;
        break;
      }
    }
  }
}

console.log(result);