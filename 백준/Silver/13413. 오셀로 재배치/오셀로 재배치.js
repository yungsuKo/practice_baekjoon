const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

const T = Number(input.shift());

for (let i = 0; i < T; i++) {
  const N = Number(input.shift());
  const before = input.shift().split('');
  const after = input.shift().split('');
  const beforeT = [];
  const afterT = [];
  let result = 0;

  for (let j = 0; j < N; j++) {
    if (before[j] !== after[j]) {
      beforeT.push(before[j]);
      afterT.push(after[j]);
    }
  }

  let countW = beforeT.filter((x) => x == 'W').length;
  let countB = beforeT.filter((x) => x == 'B').length;

  result = countW > countB ? countW : countB;
  // let countB = beforeT.filter((x) => x == 'W').length;
  // let countA = afterT.filter((x) => x == 'W').length;
  // if (countB == countA) {
  //   result = beforeT.length / 2;
  // } else {
  //   let k = 0;
  //   while (countA !== countB) {
  //     if (beforeT[k] !== afterT[k]) {
  //       beforeT[k] = afterT[k];
  //       result += 1;
  //     } else {
  //       k += 1;
  //     }
  //     countB = beforeT.filter((x) => x == 'W').length;
  //     countA = afterT.filter((x) => x == 'W').length;
  //   }
  //   for (let j = 0; j < N; j++) {
  //     if (beforeT[j] !== afterT[j]) result += 1 / 2;
  //   }
  // }
  console.log(result);
}