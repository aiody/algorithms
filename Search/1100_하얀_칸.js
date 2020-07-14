const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

/*
<문제 풀이 과정>
체스 판이 있는데 하얀 칸 위에 말이 몇 개 올라가있는지 출력하기.
줄 인덱스 짝수 : 흰 검 흰 검 흰 검 흰 검 - 칸 인덱스 짝수는 흰색
줄 인덱스 홀수 : 검 흰 검 흰 검 흰 검 흰 - 칸 인덱스 홀수는 흰색
*/

let input = [];
rl.on('line', (line) => {
  input.push(line);
}).on('close', () => {
  console.log(getNumOfPiecesOnWhiteSquare(input));
});

function getNumOfPiecesOnWhiteSquare(board) {
  let count = 0;
  for (let i = 0; i < 8; i++) {
    for (let j = i % 2 === 0 ? 0 : 1; j < 8; j += 2) {
      if (board[i][j] === 'F') {
        count++;
      }
    }
  }
  return count;
}
