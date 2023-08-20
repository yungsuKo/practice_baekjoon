const input = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ');
let [N, K] = input.map(Number);
if (N <= K) {
  console.log(0);
} else {
  for (let i = 1; i < K; i++) {
    let j = 0;
    while (2 ** j <= N) {
      j += 1;
    }

    N = N - 2 ** (j - 1);
  }

  let k = 0;
  while (2 ** k < N) {
    k += 1;
  }
  if (k == 0) {
    console.log(0);
  } else {
    console.log(2 ** k - N);
  }
}
