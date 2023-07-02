const input = `5
3 1 4 3 2`;
const cnt = Number(input.split("\n")[0]);
const times = input.split("\n")[1];
const timeArr = times.split(" ").map(Number);

timeArr.sort((a, b) => a - b);
let personTime = 0;
let result = 0;

for (let i = 1; i < cnt + 1; i++) {
  personTime = 0;
  for (let j = 0; j < i; j++) {
    personTime += timeArr[j];
  }
  result += personTime;
}

console.log(result);
