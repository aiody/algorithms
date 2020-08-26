// https://leetcode.com/explore/interview/card/top-interview-questions-easy/127/strings/883/

/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
  s = s.replace(/[^a-zA-Z0-9]+/g, '').toLowerCase();
  let left = 0;
  let right = s.length - 1;
  while (left < right) {
    if (s[left++] !== s[right--]) {
      return false;
    }
  }
  return true;
};
