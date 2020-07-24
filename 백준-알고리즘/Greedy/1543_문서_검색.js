const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

/*
<문제 풀이 과정>
문서에서 특정 단어가 최대 몇 번 중복되지 않게 등장하는지 구하기.

문서에서 가장 먼저 오는 단어를 찾아서 그 단어까지 문서를 잘라내고 그것을 반복하다가 문서가 단어 길이보다 작아지면 종료하는 방식으로 풀 것임.
*/

let input = [];
rl.on('line', (line) => {
  input.push(line);
}).on('close', () => {
  let document = input[0];
  const word = input[1];

  let count = 0;
  while (document.length >= word.length) {
    const index = document.indexOf(word);
    if (index !== -1) {
      document = document.slice(index + word.length);
      count++;
    } else {
      break;
    }
  }
  console.log(count);
});

// https://www.acmicpc.net/problem/1543
