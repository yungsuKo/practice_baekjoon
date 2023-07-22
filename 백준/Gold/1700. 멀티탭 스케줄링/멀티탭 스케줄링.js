const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const [N, K] = input[0].split(' ');
const nums = input[1].split(' ').map(Number);
let on = [];
let answer = 0;

for (let i = 0; i < K; i++) {
  const now = nums[i];
  if (on.includes(now)) continue;
  if (on.length < N) {
    on.push(now);
  } else {
    let target;
    let value = 0;
    on.forEach((v) => {
      let next = 101;
      for (let j = i + 1; j < K; j++) {
        if (nums[j] == v) {
          next = j;
          break;
        }
      }
      if (value < next) {
        target = v;
        value = next;
      }
    });
    on = on.filter((v) => v != target);
    on.push(now);
    answer++;
  }
}

console.log(answer);