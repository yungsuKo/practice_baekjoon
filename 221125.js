// const fs = require('fs');
// const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

//첫째 줄에 다음 세 가지 중 하나를 출력한다.
// A가 B보다 큰 경우에는 '>'를 출력한다.
// A가 B보다 작은 경우에는 '<'를 출력한다.
// A와 B가 같은 경우에는 '=='를 출력한다.

//시험 점수를 입력받아 90 ~ 100점은 A, 80 ~ 89점은 B, 70 ~ 79점은 C, 60 ~ 69점은 D, 나머지 점수는 F를 출력하는 프로그램을 작성하시오.


// 윤년은 연도가 4의 배수이면서, 100의 배수가 아닐 때 또는 400의 배수일 때이다.
// 예를 들어, 2012년은 4의 배수이면서 100의 배수가 아니라서 윤년이다. 1900년은 100의 배수이고 400의 배수는 아니기 때문에 윤년이 아니다. 하지만, 2000년은 400의 배수이기 때문에 윤년이다.


//첫째 줄에 (A+B)%C, 둘째 줄에 ((A%C) + (B%C))%C, 셋째 줄에 (A×B)%C, 넷째 줄에 ((A%C) × (B%C))%C를 출력한다.

// 10 10 => 9 25
// 00 30 => 23 45
// 00 45 => 00 00

//첫째 줄에 (A+B)%C, 둘째 줄에 ((A%C) + (B%C))%C, 셋째 줄에 (A×B)%C, 넷째 줄에 ((A%C) × (B%C))%C를 출력한다.

// 1. 입력된 분을 시간, 분으로 나눔
// 2. 현재시간의 분과 입력된 분을 더함
// 3. 


// let totalMin = (Number(nowHM[1]) + Number(cookMin))%60;
// console.log(totalMin);
// let totalHour = Number(nowHM[0]) + Math.floor((Number(nowHM[1]) + Number(cookMin))/60);
// console.log(nowHM[0]);
// console.log(Math.floor((nowHM[1] + cookMin)/60));
// console.log(totalHour);

// if(totalHour>=24){
//     console.log(totalHour%24, totalMin);
// }else{
//     console.log(totalHour, totalMin)
// }
// const a = input[0];
// const b = input[1];
// const c = input[2];

// let count = 0;
// let mulValue;
// if(a == b){
//     count++;
//     mulValue = a;
// }
// if(a == c){
//     count++;
//     mulValue = c;
// }
// if(c == b){
//     count++;
//     mulValue = b;
// }
// if(count==0){
//     console.log(Number(Math.max(a, b, c))*100);
// }else if(count==1){
//     console.log(1000+Number(mulValue)*100);
// }else{
//     console.log(10000+Number(a*1000));
// }
// const x = `5
// 1 1
// 2 3
// 3 4
// 9 8
// 5 2`;
// const input = x.split('\n');
// console.log(input)
// const T = Number(input[0]);

// for(let i = 0; i<T; i++){
//     const [x, y] = input[i+1].split(' ').map(Number);
//     console.log(x+y);
// }

const input = `260000
4
20000 5
30000 2
10000 6
5000 8`;
const input2 = input.split('\n');
const resultPrice = input2.shift();
const resultCount = input2.shift();
let total = 0;
for(let i=0; i<input2.length; i++){
    const [x,y] = input2[i].split(' ').map(Number);
    total = total+ x*y;
}
if(total == resultPrice){
    console.log('Yes');
}else{
    console.log('No');
}