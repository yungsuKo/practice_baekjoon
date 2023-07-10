const input = require('fs').readFileSync('/dev/stdin').toString().trim();

const testCase = Number(input.split('\n')[0]);
const testArr = input.split('\n').slice(1).map(Number);
const coins = [25, 10, 5, 1];

for (let i = 0; i < testCase; i += 1) {
  const result = [];
  let value = testArr[i];
  for (let j = 0; j < coins.length; j += 1) {
    result.push(Math.floor(value / coins[j]));
    value = value % coins[j];
  }
  console.log(result.join(' '));
}
