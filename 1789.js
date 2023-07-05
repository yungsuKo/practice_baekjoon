const input = `2`;
let sum = Number(input);
let i = 1;

while (i < sum) {
  sum -= i;
  i++;
  console.log(i, sum);
}
if (sum === i) {
  console.log(i);
} else {
  console.log(i - 1);
}

// 1 -> 1
// 2 -> 1
// 3 -> 1 + 2
// 4 -> 1 + 3
// 5 -> 2 + 3
// 6 -> 1 + 2 + 3
// 7 -> 1 + 2 + 4
// 8 -> 1 + 2 + 5
// 9 -> 1 + 2 + 6 -> 2 + 3 + 4
// 10 -> 1 + 2 + 3 + 4
