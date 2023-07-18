const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

const flip = function (x, y) {
  for (let i = x; i < x + 3; i++) {
    for (let j = y; j < y + 3; j++) {
      list1[i][j] = 1 - list1[i][j];
    }
  }
};

const [n, m] = input.shift().split(' ');
const list1 = input.slice(0, n).map((i) => i.split('').map(Number));
const list2 = input.slice(n).map((i) => i.split('').map(Number));
let count = 0;
for (let i = 0; i < n - 2; i++) {
  for (let j = 0; j < m - 2; j++) {
    if (list1[i][j] !== list2[i][j]) {
      //3*3테이블의 제일 왼쪽 위에 값만 비교해서 틀리면 3*3테이블의 값을 전체 바꿈
      flip(i, j);
      count += 1;
    }
  }
}

for (let i = 0; i < n; i++) {
  for (let j = 0; j < m; j++) {
    if (list1[i][j] !== list2[i][j]) {
      count = -1;
      break;
    }
  }
}

console.log(count);