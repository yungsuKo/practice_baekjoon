const input = `4
6
2
2
3
3
4
4`.split('\n');

const G = Number(input.shift()); // 게이트 수
const P = Number(input.shift()); // 비행기 수
const arr = input.map(Number); // 비행기

const init = (N) => {
  //N개의 노드
  return Array(N)
    .fill(0)
    .map((value, idx) => idx);
};

const find = (x, parent) => {
  if (parent[x] === x) {
    return x;
  }
  const currentParent = find(parent[x], parent);
  parent[x] = currentParent;

  return currentParent;
};

const union = (A, B, parent) => {
  const rootA = find(A, parent);
  const rootB = find(B, parent);
  rootA < rootB ? (parent[rootB] = rootA) : (parent[rootA] = rootB);
};

const test = init(G);
console.log(test);

// ------------------------------
// const G = Number(input.shift()); // 게이트 수
// const P = Number(input.shift()); // 비행기 수
// const arr = input.map(Number); // 비행기

// const test = Array(G).fill('n');
// const currentG = Object.assign({}, test);

// for (let j = 0; j < Number(P); j++) {
//   let k = 1;
//   while (true) {
//     if (arr[j] - k < 0) {
//       break;
//     } else if (currentG[arr[j] - k] == 'n') {
//       currentG[arr[j] - k] = 'y';
//       break;
//     } else {
//       // (currentG[j - k] == 'y')
//       k++;
//     }
//   }
//   if (arr[j] - k < 0) {
//     break;
//   }
// }

// console.log(Object.values(currentG).filter((item) => item == 'y').length);
