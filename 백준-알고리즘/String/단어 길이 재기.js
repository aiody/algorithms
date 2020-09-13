// https://www.acmicpc.net/problem/2743

const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let input;
rl.on('line', (line) => {
  input = line;
}).on('close', () => {
  console.log(input.length);
});
