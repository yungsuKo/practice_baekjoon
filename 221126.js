// const fs = require('fs');
// const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
const input = `5
1 1
2 3
3 4
9 8
5 2`;
const x = input.split('\n');
const T = x.shift();

for(let i = 0; i<T; i++){
    let [a,b] = x[i].split(" ").map(Number);
    console.log("Case #"+(i+1)+": "+(a+b));
}