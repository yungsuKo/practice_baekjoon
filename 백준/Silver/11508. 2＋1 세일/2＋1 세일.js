const readline = require('readline');
const rl = readline.createInterface({
    input : process.stdin,
    output : process.stdout
});
let input = [];

rl.on('line', function(line){
    input.push(line)
}).on('close', function(){
    const N = input.shift();
    const arr = input.map(Number).sort((a, b) => b - a);
    let result = BigInt(0);

    for (let i = 0; i < N; i++) {
      if (i % 3 !== 2) {
        result += BigInt(arr[i]);
      }
    }
    console.log(Number(result));
    process.exit();
})
