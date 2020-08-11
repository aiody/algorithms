// https://leetcode.com/explore/interview/card/top-interview-questions-medium/103/array-and-strings/777/

/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function (matrix) {
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[0].length; j++) {
      if (matrix[i][j] === 0) {
        fillTheRowZero(matrix, i);
        fillTheColZero(matrix, j);
      }
    }
  }

  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[0].length; j++) {
      if (matrix[i][j] === 'm') {
        matrix[i][j] = 0;
      }
    }
  }
};

function fillTheRowZero(matrix, row) {
  for (let i = 0; i < matrix[row].length; i++) {
    if (matrix[row][i] !== 0) {
      matrix[row][i] = 'm';
    }
  }
}

function fillTheColZero(matrix, col) {
  for (let i = 0; i < matrix.length; i++) {
    if (matrix[i][col] !== 0) {
      matrix[i][col] = 'm';
    }
  }
}
