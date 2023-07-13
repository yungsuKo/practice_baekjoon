const input = require('fs').readFileSync('/dev/stdin').toString().trim();
const arr = input.split('\n').map((i) => i.split(' ').map(Number));

let i = 1;
while (arr[i - 1][0] !== 0 && arr[i - 1][1] !== 0 && arr[i - 1][2] !== 0) {
  if (arr[i - 1][2] % arr[i - 1][1] >= arr[i - 1][0]) {
    console.log(
      `Case ${i}: ${
        arr[i - 1][0] +
        Math.floor(arr[i - 1][2] / arr[i - 1][1]) * arr[i - 1][0]
      }`
    );
  } else {
    console.log(
      `Case ${i}: ${
        (arr[i - 1][2] % arr[i - 1][1]) +
        Math.floor(arr[i - 1][2] / arr[i - 1][1]) * arr[i - 1][0]
      }`
    );
  }
  i++;
}
