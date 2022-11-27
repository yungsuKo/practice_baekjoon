// const fs = require('fs');
// const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

// const input = `1 1
// 2 3
// 3 4
// 9 8
// 5 2
// 0 0`;
// const x = input.split('\n');
// const T = x.shift();

// for(let i = 0; i<T; i++){
//     let [a,b] = x[i].split(" ").map(Number);
//     console.log(`Case ${i+1}: ${a} + ${b} = ${a+b}`);
// }
// const x = Number(input);

// for(let i = 0; i <= x.length; i++){
//     const y = x[i].split(' ');
//     if(y[0]=='0'){
//         break;
//     }
//     console.log(Number(y[0])+Number(y[1]));
// }

const input = '1';
let x = input;
let y = '';

let cycle = 0;
while(1){
    y = Math.floor(Number(x)/10) + Number(x)%10;
    x = String(Number(x)%10)+String(y%10);
    cycle += 1;
    if(Number(input) == Number(x)) break;
}
console.log(cycle);