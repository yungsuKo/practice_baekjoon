const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n')
  .map((i) =>
    i
      .split(' ')
      .map(Number)
      .sort((a, b) => a - b)
  );

for (let i = 0; i < input.length; i++) {
  let arr = [];
  for (let j = 0; j < 2; j++) {
    arr.push(input[i][j + 1] - input[i][j]);
  }
  console.log(Math.max(...arr) - 1);
}
