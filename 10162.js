const input = `101`;

const timeArr = [300, 60, 10];
let restTime = Number(input);
const results = [];

if (input % timeArr[2] > 0) {
  result = -1;
  console.log(result);
} else {
  for (let i = 0; i < timeArr.length; i++) {
    let result = 0;
    while (restTime >= timeArr[i]) {
      restTime -= timeArr[i];
      result += 1;
    }
    results.push(result);
  }
  console.log(results.join(" "));
}
