const input = `90184242424242424242424242424242424242424242184242424242424242424242424242424242424242184242424242424242424242424242424242424242184242424242424242424242424242424242424242`;

const arr = Array.from(input)
  .map(Number)
  .sort((a, b) => b - a);
if (arr[arr.length - 1] !== 0) {
  console.log(-1);
} else {
  const sumArr = arr.reduce((prev, curr) => prev + curr);
  if (sumArr % 3 === 0) {
    console.log(arr.join(""));
  } else {
    console.log(-1);
  }
}
// const exist = arr.indexOf("0");
// console.log(exist);
// if (exist !== -1) {
//   arr.splice(exist, exist);
//   console.log(arr);
//   const sumArr = arr.reduce((prev, curr) => prev + curr);
//   if (sumArr % 3 === 0) {
//     arr.sort((a, b) => b - a);
//     const result = arr.join("");
//     console.log(result + "0");
//   } else {
//     console.log(-1);
//   }
// } else {
//   console.log(-1);
// }
