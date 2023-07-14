const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

let [buyCnt, prodCnt] = input.shift().split(' ');
let prods = input.map((a) => a.split(' ').map((b) => Number(b)));

const packPrice = prods.map((i) => i[0]).sort((a, b) => a - b)[0];
const onePrice = prods.map((i) => i[1]).sort((a, b) => a - b)[0];

let result = 0;

while (buyCnt > 0) {
  if (buyCnt >= 6) {
    if (packPrice <= onePrice * 6) {
      buyCnt = buyCnt - 6;
      result += packPrice;
    } else {
      buyCnt = buyCnt - 6;
      result += onePrice * 6;
    }
  } else {
    if (packPrice <= onePrice * buyCnt) {
      buyCnt = buyCnt - 6;
      result += packPrice;
    } else {
      buyCnt = buyCnt - 1;
      result += onePrice;
    }
  }
}

console.log(result);
