const input = `10 4790
1
5
10
50
100
500
1000
5000
10000
50000`;

const coinCnt = Number(input.split("\n")[0].split(" ")[0]);
const sum = Number(input.split("\n")[0].split(" ")[1]);
const coinArr = input.split("\n").slice(1).map(Number);

console.log(coinCnt, sum, coinArr);

let remain = sum;
let cnt = 0;

while (remain > 0) {
  for (let i = coinCnt - 1; i >= 0; i--) {
    while (remain >= coinArr[i]) {
      remain -= coinArr[i];
      cnt++;
    }
  }
}

console.log(cnt);
