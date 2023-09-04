const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const M = Number(input.shift());
const arr = input.map((i) => i.split(' ').map(Number));
const minTimes = arr.map((i) => {
  return {
    time: i[0],
    isStart: 1,
  };
});
const maxTimes = arr.map((i) => {
  return {
    time: i[1],
    isStart: -1,
  };
});
const timeList = [...minTimes, ...maxTimes].sort((a, b) => {
  return a.time == b.time ? a.isStart - b.isStart : a.time - b.time;
});

let now = 0;
let max = 0;
timeList.forEach((time) => {
  now = time.isStart === 1 ? now + 1 : now - 1;
  max = now >= max ? now : max;
});

console.log(max);