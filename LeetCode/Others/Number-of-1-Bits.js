// https://leetcode.com/explore/interview/card/top-interview-questions-easy/99/others/565/

/**
 * @param {number} n - a positive integer
 * @return {number}
 */
var hammingWeight = function (n) {
  let count = 0;
  while (n > 0) {
    if (n & 1) {
      count++;
    }
    n = n >>> 1;
  }
  return count;
};
