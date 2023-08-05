const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const N = input[0];
let originStr = input[1];
let str = input[1];

let result = 0;
while (str.includes('LL')) {
  str = str.replace('LL', 'T');
}
result = str.length + 1;
if (result > originStr.length) {
  result = originStr.length;
}

console.log(result);
