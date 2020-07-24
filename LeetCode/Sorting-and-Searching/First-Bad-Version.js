// https://leetcode.com/explore/interview/card/top-interview-questions-easy/96/sorting-and-searching/774/

/**
 * Definition for isBadVersion()
 *
 * @param {integer} version number
 * @return {boolean} whether the version is bad
 * isBadVersion = function(version) {
 *     ...
 * };
 */

/**
 * @param {function} isBadVersion()
 * @return {function}
 */
var solution = function (isBadVersion) {
  /**
   * @param {integer} n Total versions
   * @return {integer} The first bad version
   */
  return function (n) {
    let start = 1;
    let end = n;
    let target = 0;
    let answer = Infinity;
    while (start <= end) {
      target = Math.floor((start + end) * 0.5);
      if (isBadVersion(target)) {
        answer = Math.min(answer, target);
        end = target - 1;
      } else {
        start = target + 1;
      }
    }
    return answer;
  };
};
