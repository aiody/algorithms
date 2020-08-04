// https://leetcode.com/explore/interview/card/top-interview-questions-medium/109/backtracking/797/

/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function (board, word) {
  const offsetX = [0, 1, 0, -1];
  const offsetY = [1, 0, -1, 0];
  const checkedBoard = Array.from(Array(board.length), () =>
    new Array(board[0].length).fill(false)
  );
  function DFS(x, y, index) {
    checkedBoard[x][y] = true;
    if (index === word.length) {
      return true;
    }
    let result = false;
    for (let i = 0; i < 4; i++) {
      if (result) break;
      const newX = x + offsetX[i];
      const newY = y + offsetY[i];
      if (
        isInBoard(newX, newY, board) &&
        !checkedBoard[newX][newY] &&
        board[newX][newY] === word[index]
      ) {
        if (DFS(newX, newY, index + 1)) {
          result = true;
        }
      }
    }
    checkedBoard[x][y] = false;
    return result;
  }

  let answer = false;
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[i].length; j++) {
      if (!answer && board[i][j] === word[0]) {
        if (DFS(i, j, 1, board, word)) {
          answer = true;
        }
      }
    }
  }
  return answer;
};

function isInBoard(x, y, board) {
  return x >= 0 && x < board.length && y >= 0 && y < board[0].length;
}
