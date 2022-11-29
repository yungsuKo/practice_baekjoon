// const fs = require('fs');
// const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

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
// const arr = input.split("\n");
// const arrMap = arr.map(Number);
// for(let i = 1; i<= 30; i++){
//     if(arrMap.indexOf(i,0) == -1) console.log(i)
// }

// const arr = input.split("\n");
// const arrMap = arr.map(Number);
// let resultArr = [];
// for(let i = 1; i<= arrMap.length; i++){
//     resultArr.push(arrMap[i] % 42);
// }
// const set = new Set(resultArr);
// const result = [...set];
// console.log(result.length);

// const input = `5
// OOXXOXXOOO
// OOXXOOXXOO
// OXOXOXOXOXOXOX
// OOOOOOOOOO
// OOOOXOOOOXOOOOX`;

// const T = Number(input.split("\n"));
// const arr = input.split("\n")[1].split(' ');
// const numArr = arr.map(Number);

// // max를 찾는다.
// let max = numArr[0];
// let total = 0;
// for(let i = 0; i< numArr.length; i++){
//     if(max < numArr[i]) max =  numArr[i];
// }

// for(let i = 0; i< numArr.length; i++){
//     total += numArr[i];
// }
// console.log(total);
// console.log(total/numArr.length/max*100);

const input = `5
OOXXOXXOOO
OOXXOOXXOO
OXOXOXOXOXOXOX
OOOOOOOOOO
OOOOXOOOOXOOOOX`;
const input2 = input.split("\n");
const T = Number(input2.shift(0));


for(let i = 0; i<T; i++){
    let total = 0;
    for(let j = 0; j<input2[i].length; j++){
        let score = 0;
        if(input2[i][j] == 'O'){
            let iter = j;
            while(input2[i][iter] == 'O'){
                score += 1;
                iter -= 1;
            }
            console.log(score);
        }
        total+=score;
    }
    console.log("total",total);
}