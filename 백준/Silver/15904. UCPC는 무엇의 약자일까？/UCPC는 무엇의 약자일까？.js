const input = require('fs').readFileSync('/dev/stdin').toString().trim();
const arr = input.split('');
const newArr = arr.filter(
  (item) => item === item.toUpperCase() && item !== ' '
);
// if (newArr.join('') === 'UCPC') {
//   console.log('I love UCPC');
// } else {
//   console.log('I hate UCPC');
// }
let str = ['U', 'C', 'P', 'C'];
for (let i = 0; i < newArr.length; i++) {
  if (newArr[i] === str[0]) {
    str.shift();
  }
}
if (str.length === 0) {
  console.log('I love UCPC');
} else {
  console.log('I hate UCPC');
}
