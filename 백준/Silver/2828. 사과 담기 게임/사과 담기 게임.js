const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const [N, M] = input.shift().split(' ').map(Number);
const J = Number(input.shift());
const arr = input.map(Number);

let result = 0;
// 시작점의 표시점을 의미함
let position = 1;

for (let i = 0; i < arr.length; i++) {
  if (position <= arr[i] && position + M > arr[i]) {
    position = position;
  } else {
    if (position > arr[i]) {
      // 현재의 포지션이 떨어지는 위치보다 뒤에 있을 경우
      let move = position - arr[i];
      position = arr[i];
      result += move;
    } else {
      // 현재의 포지션이 떨어지는 위치보다 앞에 있을 경우
      let move = arr[i] - position - M + 1;
      position += move;
      result += move;
    }
  }
}
console.log(result);
