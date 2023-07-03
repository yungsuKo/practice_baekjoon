const input = `11
1 4
3 5
0 6
5 7
3 8
5 9
6 10
8 11
8 12
2 13
12 14`;

const cnt = Number(input.split("\n")[0]);
const arr = input.split("\n").slice(1);

let timeArr = arr.sort((a, b) => {
  if (Number(a.split(" ")[1]) === Number(b.split(" ")[1])) {
    return Number(a.split(" ")[0]) - Number(b.split(" ")[0]);
  }
  return Number(a.split(" ")[1]) - Number(b.split(" ")[1]);
});

let result = 1;
let i = 1;
let current = Number(timeArr[0].split(" ")[1]);

while (i < cnt) {
  if (current <= Number(timeArr[i].split(" ")[0])) {
    current = Number(timeArr[i].split(" ")[1]);
    result++;
  }
  i++;
}

console.log(result);

// 배열의 끝에 달할때 까지 반복
