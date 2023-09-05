const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const num = Number(input.shift());
const arr = input.map((i) => {
  const j = i.split(' ');
  return [j[1], j[2]];
});
const startTimes = arr.map((i) => {
  return { time: Number(i[0]), isStart: 1 };
});
const endTimes = arr.map((i) => {
  return { time: Number(i[1]), isStart: -1 };
});
const times = [...startTimes, ...endTimes].sort((a, b) =>
  a.time === b.time ? a.isStart - b.isStart : a.time - b.time
);
let max = 0;
let now = 0;
times.forEach((time) => {
  now += time.isStart;
  max = max < now ? now : max;
});
console.log(max);
