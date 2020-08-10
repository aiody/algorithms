// https://leetcode.com/explore/interview/card/top-interview-questions-medium/111/dynamic-programming/808/

/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function (m, n) {
  const board = Array.from(Array(m), () => new Array(n).fill(1));

  for (let i = 1; i < m; i++) {
    for (let j = 1; j < n; j++) {
      board[i][j] = board[i - 1][j] + board[i][j - 1];
    }
  }

  return board[m - 1][n - 1];
};
