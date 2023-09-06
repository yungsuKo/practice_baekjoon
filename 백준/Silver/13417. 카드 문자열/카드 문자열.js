const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const T = Number(input.shift());
for (let i = 0; i < T; i++) {
  const N = Number(input.shift());
  const arr = input.shift().split(' ');
  let result = arr[0];
  for (let j = 1; j < arr.length; j++) {
    if (result[0] < arr[j]) {
      result = result + arr[j];
    } else {
      result = arr[j] + result;
    }
  }
  console.log(result);
}
