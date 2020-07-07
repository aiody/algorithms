const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
let input = [];
let arr = [];
rl.on('line', function (line) {
  input.push(line);
}).on('close', function () {
  arr = input[1]
    .split(' ')
    .map((ele) => parseInt(ele))
    .sort((a, b) => a - b);
  let wait = 0;
  let result = 0;
  for (let i = 0; i < input[0]; i++) {
    wait += arr[i];
    result += wait;
  }
  console.log(result);
  process.exit();
});

// https://www.acmicpc.net/problem/11399
/*
<FEEDBACK>
핵심 기능을 함수로 분리해도 좋을 것 같다.
*/
