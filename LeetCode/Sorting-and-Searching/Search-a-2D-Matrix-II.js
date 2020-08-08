// https://leetcode.com/explore/interview/card/top-interview-questions-medium/110/sorting-and-searching/806/

/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function (matrix, target) {
  if (matrix.length === 0) return false;
  let curRow = 0;
  let curCol = matrix[0].length - 1;

  while (curRow < matrix.length && curCol >= 0) {
    if (matrix[curRow][curCol] < target) {
      curRow++;
    } else if (matrix[curRow][curCol] > target) {
      curCol--;
    } else {
      return true;
    }
  }
  return false;

  // previous solution
  /*
  for(let row = 0; row < matrix.length; row++) {
      for(let col = 0; col < matrix[0].length; col++) {
          if(matrix[row][col] === target) {
              return true;
          }
      }
  }
  return false;
  */
};
