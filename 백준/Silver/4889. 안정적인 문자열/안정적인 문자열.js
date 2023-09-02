const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
let count = 0;
while (!input[0].includes('-')) {
  count += 1;
  const str = input.shift().trim().split('');
  const arr = [];
  let result = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] == '}') {
      if (arr.includes('{')) {
        arr.pop();
      } else {
        arr.push('{');
        result += 1;
      }
    } else {
      arr.push(str[i]);
    }
  }
  console.log(`${count}. ${result + arr.length / 2}`);
}
