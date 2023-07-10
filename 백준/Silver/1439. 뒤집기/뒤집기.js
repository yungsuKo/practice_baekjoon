const input = require('fs').readFileSync('/dev/stdin').toString().trim();
const arr = [...input];
const arrSplit = input.split(arr[0]);
let result = 0;
arrSplit.forEach((element) => {
  if (element.length > 0) result += 1;
});

console.log(result);

