const [y, x] = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ').map(Number);

if (y == 1) {
  console.log(1);
} else if (y == 2) {
  console.log(Math.min(4, Math.floor((x + 1) / 2)));
} else {
  if (x <= 6) {
    console.log(Math.min(4, x));
  } else {
    console.log(x - 2);
  }
}
