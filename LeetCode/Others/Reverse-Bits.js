// https://leetcode.com/explore/interview/card/top-interview-questions-easy/99/others/648/

/**
 * @param {number} n - a positive integer
 * @return {number} - a positive integer
 */
var reverseBits = function (n) {
  let result = 0;
  for (let i = 0; i < 32; i++) {
    result <<= 1;
    if (n & 1) {
      result++;
    }
    n >>= 1;
  }
  return result >>> 0;
};
