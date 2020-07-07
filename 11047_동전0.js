const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];
rl.on('line', (line) => {
  input.push(line);
}).on('close', () => {
  let targetPrice = input[0].split(' ')[1];
  let coins = input.slice(1, input.length);
  console.log(getMinNumOfCoin(coins, targetPrice));
});

function getMinNumOfCoin(coins, targetPrice) {
  let count = 0;
  for (let i = coins.length - 1; i >= 0; i--) {
    if (targetPrice === 0) break;
    while (targetPrice - coins[i] >= 0) {
      targetPrice -= coins[i];
      count++;
    }
  }
  return count;
}

// https://www.acmicpc.net/problem/11047
/*
<FEEDBACK>
*/
