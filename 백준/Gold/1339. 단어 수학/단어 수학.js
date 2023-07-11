const input = require('fs').readFileSync('/dev/stdin').toString().trim();
const testCase = Number(input.split('\n')[0]);
const testArr = input.split('\n').slice(1);

const alphaObj = {};
for (let i = 0; i < testCase; i++) {
  for (let j = 0; j < testArr[i].length; j++) {
    if (!Object.keys(alphaObj).includes(testArr[i][j])) {
      alphaObj[testArr[i][j]] = 0;
    }
    alphaObj[testArr[i][j]] += 10 ** (testArr[i].length - j - 1);
  }
}
let result = 0;
Object.values(alphaObj)
  .sort((a, b) => b - a)
  .forEach((val, i) => (result += val * (9 - i)));
console.log(result);
