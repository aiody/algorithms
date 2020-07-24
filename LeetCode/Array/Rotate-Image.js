// https://leetcode.com/explore/interview/card/top-interview-questions-easy/92/array/770/

/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function (matrix) {
  const n = matrix.length;
  const rotatedMatrix = {};
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      rotatedMatrix[`${j},${n - 1 - i}`] = matrix[i][j];
    }
  }
  for (let key in rotatedMatrix) {
    const [newX, newY] = key.split(',');
    matrix[newX][newY] = rotatedMatrix[key];
  }
};
