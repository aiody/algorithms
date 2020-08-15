// https://leetcode.com/explore/interview/card/top-interview-questions-hard/116/array-and-strings/831/

/**
 * @param {number[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var gameOfLife = function (board) {
  const eightDirX = [0, 1, 1, 1, 0, -1, -1, -1];
  const eightDirY = [1, 1, 0, -1, -1, -1, 0, 1];

  function SearchEightNeighbors(x, y) {
    let neighborCount = 0;
    for (let i = 0; i < 8; i++) {
      if (
        board[x + eightDirX[i]] &&
        board[x + eightDirX[i]][y + eightDirY[i]]
      ) {
        neighborCount++;
      }
    }
    return neighborCount;
  }

  // 2 means will die, undefined means will live
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[0].length; j++) {
      const count = SearchEightNeighbors(i, j);
      if (board[i][j] && (count <= 1 || count > 3)) {
        board[i][j] = 2;
      } else if (!board[i][j] && count === 3) {
        board[i][j] = undefined;
      }
    }
  }

  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[0].length; j++) {
      if (board[i][j] === 2) {
        board[i][j] = 0;
      } else if (board[i][j] === undefined) {
        board[i][j] = 1;
      }
    }
  }
};
