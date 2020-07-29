//https://leetcode.com/explore/interview/card/top-interview-questions-easy/127/strings/881/

/**
 * @param {string} s
 * @return {number}
 */
https: var firstUniqChar = function (s) {
  for (let i = 0; i < s.length; i++) {
    if (s.indexOf(s[i]) === s.lastIndexOf(s[i])) {
      return i;
    }
  }
  return -1;
};
