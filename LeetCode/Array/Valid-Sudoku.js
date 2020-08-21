// https://leetcode.com/explore/interview/card/top-interview-questions-easy/92/array/769/

/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function (board) {
  // time complexity is 9^3

  // check row and column
  for (let i = 0; i < 9; i++) {
    let uniqueNum = {};
    for (let j = 0; j < 9; j++) {
      if (board[i][j] === '.') continue;
      if (uniqueNum[board[i][j]] === undefined) {
        uniqueNum[board[i][j]] = 1;
      } else {
        console.log('1', uniqueNum);
        return false;
      }
    }
    uniqueNum = {};
    for (let j = 0; j < 9; j++) {
      if (board[j][i] === '.') continue;
      if (uniqueNum[board[j][i]] === undefined) {
        uniqueNum[board[j][i]] = 1;
      } else {
        console.log('2', uniqueNum);
        return false;
      }
    }
  }

  // check 9x9 boxes
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      let uniqueNum = {};
      for (let k = 0; k < 3; k++) {
        for (let h = 0; h < 3; h++) {
          let newX = i * 3 + k;
          let newY = j * 3 + h;
          if (board[newX][newY] === '.') continue;
          if (uniqueNum[board[newX][newY]] === undefined) {
            uniqueNum[board[newX][newY]] = 1;
          } else {
            console.log(board[newX][newY]);
            console.log('3', uniqueNum);
            return false;
          }
        }
      }
    }
  }

  return true;
};
