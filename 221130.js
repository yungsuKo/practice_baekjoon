// const fs = require('fs');
// const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
const input = `3
1
4
5
7
9
6
10
11
12
13
14
15
16
17
18
19
20
21
22
23
24
25
26
27
28
29
30`;
// const T = Number(input.split("\n"));
// const arr = input.split("\n")[1].split(' ');
// let min = Number(arr[0]);
// let max = Number(arr[0]);

// for(let i = 0; i<T; i++){
//     if(Number(arr[i]) < min) min = arr[i];
//     if(Number(arr[i]) > max) max = arr[i];
// }
// console.log(min, max);

// const arr = input.split("\n");
// let max = Number(arr[0]);
// let index = 0;
// for(let i = 0; i<arr.length; i++){
//     if(Number(arr[i]) > max){
//         max = Number(arr[i]);
//         index = i;
//     }
// }
// console.log(max);
// console.log(index);
const arr = input.split("\n");
const arrMap = arr.map(Number);
for(let i = 1; i<= 30; i++){
    if(arrMap.indexOf(i,0) == -1) console.log(i)
}