// const fs = require('fs');
// const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const input = `5
5 50 50 70 80 100
7 100 95 90 80 70 60 50
3 70 90 80
3 70 90 81
9 100 99 98 97 96 95 94 93 91`;

const arr = input.split('\n');
const T = Number(arr.shift());


for(let i = 0; i<T; i++){
    const classInfo = arr[i].split(' ').map(Number);
    const stuCnt = classInfo.shift();
    const sum = classInfo.reduce((accumulator, value) => {
        return accumulator + value;
    }, 0);
    const avg = sum/stuCnt;
    let cnt = 0;
    for(let j = 0; j<classInfo.length; j++){
        if(classInfo[j]>avg) cnt++;
    }
    console.log((cnt/stuCnt*100).toFixed(3)+"%");
}