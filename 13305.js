const input = `2
3 2 3 1
2 3 1 6 2`;

const cnt = BigInt(input.split("\n")[0]);
const kmArr = input
  .split("\n")[1]
  .split(" ")
  .map((i) => BigInt(i));
const priceArr = input
  .split("\n")[2]
  .split(" ")
  .map((i) => BigInt(i));

let currPrice = priceArr[0];
let result = BigInt(0);
for (let i = 0; i < kmArr.length; i++) {
  if (currPrice > priceArr[i]) {
    currPrice = priceArr[i];
  }
  result += currPrice * kmArr[i];
}

console.log(String(result));
