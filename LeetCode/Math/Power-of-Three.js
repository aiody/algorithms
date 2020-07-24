// https://leetcode.com/explore/interview/card/top-interview-questions-easy/102/math/745/

/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfThree = function (n) {
  let i = 0;
  while (Math.pow(3, i) < n) {
    i++;
  }
  return Math.pow(3, i) === n;
};
