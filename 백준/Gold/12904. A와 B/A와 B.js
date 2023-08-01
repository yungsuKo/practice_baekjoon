const input = require('fs').readFileSync('/dev/stdin').toString().trim();
let [S, T] = input.split('\n');
let result = '0';

while (S.length !== T.length) {
  let arr = T.split('');

  if (arr[arr.length - 1] == 'A') {
    arr.pop();
    T = arr.join('');
  } else {
    arr.pop();
    T = arr.reverse().join('');
  }
}

if (S == T) {
  result = '1';
} else {
  result = '0';
}

console.log(result);
