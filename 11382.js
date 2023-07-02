// const input = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ');
// 77 77 7777

const input = `77 77 7777`.split(" ").map(Number);
const result = input.reduce((a, b) => a + b);
console.log(result);
