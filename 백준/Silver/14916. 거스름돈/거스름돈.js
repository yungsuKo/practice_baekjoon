const input = require('fs').readFileSync('/dev/stdin').toString().trim();

let change = Number(input);
let i = 1;
let notDiv = 0;

if (change % 5 === 0) {
  console.log(change / 5);
    notDiv = 1;
} else {
  while (input >= 2 * i) {
    change -= 2;
    if (change % 5 === 0) {
      notDiv = 1;
      i += change / 5;
      console.log(i);
      break;
    }
    i += 1;
  }
}

if (notDiv === 0) {
  console.log(-1);
}
