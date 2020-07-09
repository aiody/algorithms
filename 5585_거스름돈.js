const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

/*
<문제 풀이 과정>
거스름돈 개수를 가장 적게 잔돈을 줘야 함. '가장 적게' -> 그리디인가?
- 앞의 선택이 이후 선택에 영향을 주지 않는가?
  => 그렇다. 거스름돈으로 어떤 돈을 택하더라도 전체 거스름돈이 바뀌거나 하지 않는다. 잔돈을 선택하는 것은 독립적이다.
- 문제 전체에 대한 최적해가 부분 문제에 대해서도 역시 최적해가 되는지?
  => 그렇다. 가장 적게 잔돈을 주려면 가장 큰 잔돈을 먼저 계산하면 된다. 남은 돈 중에 가장 크게 잔돈 줄 수 있는 걸 고려해보면 됨.
*/

let input;
rl.on('line', (line) => {
  input = parseInt(line);
}).on('close', () => {
  console.log(getCountOfChanges(1000 - input));
});

function getCountOfChanges(targetPrice) {
  let coins = [500, 100, 50, 10, 5, 1];
  let count = 0;
  coins.forEach((coin) => {
    if (coin <= targetPrice) {
      count += Math.floor(targetPrice / coin);
      targetPrice %= coin;
    }
  });
  return count;
}
