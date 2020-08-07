// https://leetcode.com/explore/interview/card/top-interview-questions-medium/110/sorting-and-searching/806/

/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function (matrix, target) {
  for (let row = 0; row < matrix.length; row++) {
    for (let col = 0; col < matrix[0].length; col++) {
      if (matrix[row][col] === target) {
        return true;
      }
    }
  }
  return false;
};
