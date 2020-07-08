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
  let coins = input
    .slice(1)
    .map((ele) => parseInt(ele))
    .filter((ele) => targetPrice >= ele)
    .reverse();
  console.log(getMinNumOfCoin(coins, targetPrice));
});

function getMinNumOfCoin(coins, targetPrice) {
  let count = 0;
  for (let i = 0; i < coins.length; i++) {
    if (targetPrice === 0) break;
    if (targetPrice >= coins[i]) {
      count += Math.floor(targetPrice / coins[i]);
      targetPrice %= coins[i];
    }
  }
  return count;
}

// https://www.acmicpc.net/problem/11047
/*
<FEEDBACK>
while문을 안 써도 가능할 것 같다.
*/
