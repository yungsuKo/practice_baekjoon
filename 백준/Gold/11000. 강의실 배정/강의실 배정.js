const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

const cnt = input.shift();
const times = [];
input
  .map((i) => i.split(' ').map(Number))
  .forEach((i) => {
    times.push([i[0], 1]);
    times.push([i[1], -1]);
  });

times.sort((a, b) => {
  if (a[0] === b[0]) return a[1] - b[1];
  return a[0] - b[0];
});

let room = 0;
let answer = 0;
for (let i = 0; i < times.length; i++) {
  room += times[i][1];
  answer = room > answer ? room : answer;
}

console.log(answer);