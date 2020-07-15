const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

/*
<문제 풀이 과정>
배열 A, B가 있는데
S = A[0] * B[0] + ... + A[n-1] * B[n-1];
A를 재배열하여 S의 최솟값을 출력하는 프로그램 작성.
A : 1 1 1 6 0
B : 2 7 8 3 1
0 1 1 1 6
8 7 2 3 1
7 + 2 + 3 + 6 = 18

A는 오름차순으로 정렬, B는 내림차순으로 정렬하고 S를 구하면 최솟값이 된다.
*/

let input = [];
rl.on('line', (line) => {
  input.push(line);
}).on('close', () => {
  let A = input[1]
    .split(' ')
    .map((ele) => parseInt(ele))
    .sort((a, b) => a - b);
  let B = input[2]
    .split(' ')
    .map((ele) => parseInt(ele))
    .sort((a, b) => b - a);

  console.log(sumOfMultiplesOfEachEle(A, B));
});

function sumOfMultiplesOfEachEle(A, B) {
  let sum = 0;
  for (let i = 0; i < A.length; i++) {
    sum += A[i] * B[i];
  }
  return sum;
}

// https://www.acmicpc.net/problem/1026
