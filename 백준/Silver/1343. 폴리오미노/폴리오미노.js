const input = require('fs').readFileSync('/dev/stdin').toString().trim();
const arr = input.split('.');
let result = '';
for (let i = 0; i < arr.length; i++) {
  if (arr[i].length % 4 === 0) {
    if (arr[i].length / 4 == 0) arr[i] = '';
    else arr[i] = 'AAAA'.repeat(Math.floor(arr[i].length / 4));
  } else if (arr[i].length % 4 === 2) {
    if (Math.floor(arr[i].length / 4) == 0) {
      arr[i] = 'BB';
    } else arr[i] = 'AAAA'.repeat(Math.floor(arr[i].length / 4)) + 'BB';
  } else {
    result = -1;
    break;
  }
}
if (result === -1) console.log(-1);
else console.log(arr.join('.'));
