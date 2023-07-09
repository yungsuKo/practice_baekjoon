const input = require('fs').readFileSync('/dev/stdin').toString().trim();
const testCaseCnt = Number(input.split("\n")[0]);
let testCases = input.split("\n").slice(1);
let testCase = [];
let start = 0;
let end = 0;
let cnt = 0;

while (testCaseCnt > cnt) {
  let result = 1;
  end = Number(testCases[start]);
  testCase = testCases.slice(start + 1, start + end + 1);
  testCase = testCase
    .map((i) => i.split(" ").map(Number))
    .sort((a, b) => a[0] - b[0]);
  let curr = testCase[0][1];
  for (let i = 0; i < testCase.length; i++) {
    if (testCase[i][1] < curr) {
      curr = testCase[i][1];
      result++;
    }
  }
  console.log(result);
  start += end + 1;
  cnt++;
}

