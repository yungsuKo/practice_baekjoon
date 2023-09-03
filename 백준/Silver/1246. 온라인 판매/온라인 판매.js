const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

const [N, M] = input.shift().split(' ').map(Number);
const arr = input.map(Number).sort((a, b) => a - b);
let revenue = arr.length >= N ? N * arr[0] : arr.length * arr[0];
let price = arr[0];

if (arr.length >= N) {
  for (let i = arr.length - N; i < arr.length; i++) {
    if (revenue < arr[i] * (arr.length - i)) {
      revenue = arr[i] * (arr.length - i);
      price = arr[i];
    }
  }
} else {
  for (let i = 0; i < N; i++) {
    if (revenue < arr[i] * arr.filter((j) => j >= arr[i]).length) {
      revenue = arr[i] * arr.filter((j) => j >= arr[i]).length;
      price = arr[i];
    }
  }
}

console.log(price, revenue);