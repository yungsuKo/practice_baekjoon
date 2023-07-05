const input = `3
5
10
15`;

const rope_cnt = Number(input.split("\n")[0]);
const rope_w = input
  .split("\n")
  .slice(1)
  .map((item) => Number(item));

rope_w.sort((a, b) => a - b);
const results = [];
for (let i = 0; i < rope_w.length; i++) {
  results.push((rope_w.length - i) * rope_w[i]);
}
console.log(Math.max(...results));
