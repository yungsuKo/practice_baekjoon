const input = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ');
const [N, K] = input.map(Number);

let minSum = 0;
for (let i = 0; i < K; i++) {
  minSum += i + 1;
}

if (minSum > N) {
  console.log(-1);
} else if ((N - minSum) % K == 0) {
  console.log(K - 1);
} else {
  console.log(K);
}
