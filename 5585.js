const input = `380`;

const coins = [500, 100, 50, 10, 5, 1];
const money = 1000;

let changes = money - Number(input);
let coin_cnt = 0;

for (let i = 0; i < coins.length; i++) {
  while (changes >= coins[i]) {
    changes -= coins[i];
    coin_cnt++;
  }
}

console.log(coin_cnt);
