const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

/*
<문제 풀이 과정>
주어진 값보다 작은 모든 한수의 개수를 알아내기.
완전 탐색으로 풀어야겠다.

1부터 주어진 값까지 반복문을 돌면서 한수인지 아닌지 검사하는 방식으로 진행.
한수인지 아닌지를 알 수 있는 함수는 숫자를 잘라서 그 차이가 같은지 검사함.

*/

let input;
rl.on('line', (line) => {
  input = Number(line);
}).on('close', () => {
  let count = 0;
  if (input < 100) {
    count += input;
  } else {
    count += 99;
    for (let i = 100; i <= input; i++) {
      if (isHansu(i)) {
        count++;
      }
    }
  }
  console.log(count);
});

function isHansu(num) {
  let splitNum = String(num)
    .split('')
    .map((ele) => parseInt(ele));
  if (splitNum.length === 1) return true;
  let diff = splitNum[0] - splitNum[1];
  for (let i = 0; i < splitNum.length - 1; i++) {
    if (splitNum[i] - splitNum[i + 1] !== diff) {
      return false;
    }
  }
  return true;
}

// https://www.acmicpc.net/problem/1065
