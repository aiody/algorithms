// https://programmers.co.kr/learn/courses/30/lessons/68645

//        0,0
//      1,0 1,1
//     2,1 2,2 2,3
//   3,3 3,4 3,5 3,6
// 4,6 4,7 4,8 4,9 4,10
// x와 y를 더하면 배열의 인덱스가 되는 좌표.

function solution(n) {
  let maxNum = n * (n + 1) / 2; // 총 배열 길이
  let answer = new Array(maxNum).fill(-1); // 방문하지 않은 곳은 -1
  let direction = 0; // 0: 우측 하향, 1: 우측 방향, 2: 좌측 상향
  let x = 0;
  let y = 0;
  
  for(let i = 1; i <= maxNum; i++) {
      answer[x + y] = i;
      if(i === maxNum) break; // 마지막 숫자는 방향을 검사할 필요가 없다.
      
      let nextX, nextY, doIhaveToTurn;
      switch(direction) {
          case 0:
              nextX = x + 1;
              nextY = x + y;
              doIhaveToTurn = !isInBorder(nextX, n) || answer[nextX + nextY] !== -1;
              break;
          case 1:
              nextX = x;
              nextY = y + 1;
              doIhaveToTurn = nextX + nextY >= maxNum || answer[nextX + nextY] !== -1;
              break;
          case 2:
              nextX = x - 1;
              nextY = y - x;
              doIhaveToTurn = !isInBorder(nextX, n) || answer[nextX + nextY] !== -1;
              break;
      }
      
      if(doIhaveToTurn) {
          direction = (direction + 1) % 3; // 방향 전환
          i--; // 방향을 돌려서 다시 체크하기 위해
      } else {
          x = nextX;
          y = nextY;
      }
      
  }
  return answer;
}

function isInBorder(num, n) {
  return num >= 0 && num < n;
}
