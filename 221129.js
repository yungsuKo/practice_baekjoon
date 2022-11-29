// const fs = require('fs');
// const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
const x = `10 5
1 10 4 9 2 3 8 5 7 6`;

const input = x.split('\n');
const input1 = input[0].split(' ');
const input2 = input[1].split(' ');

// let count = 0;
// const arr = input[1].split(' ');
// for(let i = 0; i < input[0]; i++){
//     if(arr[i]==input[2]){
//         count+=1;
//     }
//     console.log("i",i, "count",count);
// }
// console.log(count);

let preResult = [];
for(let i=0; i<input1[0]; i++){
    if(Number(input2[i])<Number(input1[1])){
        preResult.push(input2[i]);
    }
}

const result = preResult.join(' ');
console.log(result);