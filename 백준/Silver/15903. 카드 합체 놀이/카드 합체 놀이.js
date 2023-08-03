const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

const [n, m] = input[0].split(' ');
const arr = input[1].split(' ').map(Number);
let i = 0;
let instant;

function MinHeap() {
  this.heap = [0];
  this.insert = (v) => {
    this.heap.push(v);
    let p = this.heap.length - 1;
    while (p > 1 && this.heap[Math.floor(p / 2)] > this.heap[p]) {
      let tmp = this.heap[Math.floor(p / 2)];
      this.heap[Math.floor(p / 2)] = this.heap[p];
      this.heap[p] = tmp;
      p = Math.floor(p / 2);
    }
  };
  this.getLength = () => {
    return this.heap.length;
  };
  this.delete = () => {
    if (this.heap.length - 1 < 1) {
      return 0;
    }
    let deletedItem = this.heap[1];
    this.heap[1] = this.heap[this.heap.length - 1];
    this.heap.pop();
    let p = 1;
    while (p * 2 < this.heap.length) {
      let min = this.heap[p * 2];
      let minP = p * 2;
      if (p * 2 + 1 < this.heap.length && min > this.heap[p * 2 + 1]) {
        min = this.heap[p * 2 + 1];
        minP = p * 2 + 1;
      }
      if (this.heap[p] < min) {
        break;
      }
      let tmp = this.heap[p];
      this.heap[p] = this.heap[minP];
      this.heap[minP] = tmp;
      p = minP;
    }
    return deletedItem;
  };
}

let list = new MinHeap();
for (let j = 0; j < n; j++) {
  let tmp = arr.shift();
  list.insert(tmp);
}

while (i < m) {
  let card1 = list.delete();
  let card2 = list.delete();
  let sum = card1 + card2;
  list.insert(sum);
  list.insert(sum);
  i++;
}

let answer = BigInt(0);
while (list.getLength() > 1) {
  answer += BigInt(list.delete());
}

console.log(answer.toString());