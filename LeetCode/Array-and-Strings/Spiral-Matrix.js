// https://leetcode.com/explore/interview/card/top-interview-questions-hard/116/array-and-strings/828/

// 사방의 경계선(border)이 있고, 방향을 꺾을 때마다 경계선을 좁혀가면서 언제 꺾을지 판단하는 로직.
// 지나간 부분을 undefined으로 정의해서 undefined으로 판단하는 방법도 있다. (from 기원)

/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function (matrix) {
  if (matrix.length === 0) return [];

  let borderN = 0;
  let borderW = 0;
  let borderS = matrix.length - 1;
  let borderE = matrix[0].length - 1;
  const targetLength = matrix.length * matrix[0].length;
  const answer = [];
  let x = 0;
  let y = 0;

  while (answer.length < targetLength) {
    while (y <= borderE && answer.length < targetLength) {
      answer.push(matrix[x][y]);
      y++;
    }
    y = borderE;
    x = ++borderN;

    while (x <= borderS && answer.length < targetLength) {
      answer.push(matrix[x][y]);
      x++;
    }
    x = borderS;
    y = --borderE;

    while (y >= borderW && answer.length < targetLength) {
      answer.push(matrix[x][y]);
      y--;
    }
    y = borderW;
    x = --borderS;

    while (x >= borderN && answer.length < targetLength) {
      answer.push(matrix[x][y]);
      x--;
    }
    x = borderN;
    y = ++borderW;
  }

  return answer;
};
