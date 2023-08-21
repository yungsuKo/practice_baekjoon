const rl = require('readline').createInterface({ input: process.stdin, output: process.stdout });
const input = [];

rl.on('line', (l) => {
    input.push(l)
}).on('close', () => {
    const N = Number(input.shift());
const arr = input.map((i) => i.split(' ').map(Number));
let result = 0;
let newArr = new Array(10000).fill(0);

arr.sort((a, b) => b[1] - a[1]).sort((a, b) => b[0] - a[0]);
let day = arr.length > 0 ? arr[0][1] : 0;

for (let i = 0; i < N; i++) {
  let k = arr[i][1];
  for (let j = k - 1; j >= 0; j--) {
    if (newArr[j] == 0) {
      newArr[j] = arr[i][0];
      break;
    }
  }
}

console.log(newArr.reduce((a, b) => a + b));
    process.exit();
})
