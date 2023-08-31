const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

const N = Number(input.shift());
const arr = input[0].split(' ').map(Number);
const arr2 = [];
const arr3 = [];
for (let i = 0; i < 6; i++) {
  for (let j = 0; j < 6; j++) {
    if (i + j !== 5 && i !== j) {
      arr2.push(arr[i] + arr[j]);
    }
  }
}
arr3.push(arr[0] + arr[1] + arr[2]);
arr3.push(arr[0] + arr[1] + arr[3]);
arr3.push(arr[0] + arr[3] + arr[4]);
arr3.push(arr[0] + arr[2] + arr[4]);
arr3.push(arr[5] + arr[1] + arr[2]);
arr3.push(arr[5] + arr[1] + arr[3]);
arr3.push(arr[5] + arr[3] + arr[4]);
arr3.push(arr[5] + arr[2] + arr[4]);

const min1 = Math.min(...arr);
const min2 = Math.min(...arr2);
const min3 = Math.min(...arr3);

const center = min1;
const corner = min3;
const line = min2;
const bottomline = min1;
const bottomcorner = min2;

const result =
  N !== 1
    ? (N - 2) * (N - 2) * center * 5 +
      8 * (N - 2) * line +
      4 * corner +
      4 * bottomline * (N - 2) +
      4 * bottomcorner
    : arr.reduce((a, b) => a + b) - Math.max(...arr);
console.log(result);

