const input = require('fs').readFileSync('/dev/stdin').toString().trim();

const arr = input.split('').sort();
const strCnt = {};

for (let i = 0; i < arr.length; i++) {
  if (!strCnt[arr[i]]) {
    strCnt[arr[i]] = 1;
  } else {
    strCnt[arr[i]] += 1;
  }
}
let strArr = Object.entries(strCnt);

let result = '';

// 홀수인 것이 2개 이상 있는 경우
const isFalse = strArr.filter((i) => i[1] % 2 === 1);
if (isFalse.length > 1) {
  console.log("I'm Sorry Hansoo");
} else if (isFalse.length === 1) {
  const middle = isFalse[0][0];
  for (let i = 0; i < strArr.length; i++) {
    let stopM = strArr[i][1];
    while (stopM > Math.ceil(strArr[i][1] / 2)) {
      result += strArr[i][0];
      stopM -= 1;
    }
  }
  console.log(result + middle + result.split('').reverse().join(''));
} else {
  for (let i = 0; i < strArr.length; i++) {
    let stopM = strArr[i][1];
    while (stopM > Math.ceil(strArr[i][1] / 2)) {
      result += strArr[i][0];
      stopM -= 1;
    }
  }
  console.log(result + result.split('').reverse().join(''));
}
