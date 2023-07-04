// const input = require('fs').readFileSync('/dev/stdin').toString().trim();
// 괄호를 적절히 쳐서 최소값을 만들어라
const input = "55-50+40";

const arr = input.split("-");

let result = 0;
for (let i = 0; i < arr.length; i++) {
  if (i === 0) {
    result += arr[i].split("+").reduce((acc, cur) => acc + Number(cur), 0);
  } else {
    result -= arr[i].split("+").reduce((acc, cur) => acc + Number(cur), 0);
  }
}

console.log(result);
