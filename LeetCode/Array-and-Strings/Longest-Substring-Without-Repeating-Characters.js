// https://leetcode.com/explore/interview/card/top-interview-questions-medium/103/array-and-strings/779/

/**
 * @param {string} s
 * @return {number}
 */
// 'dvdf'
var lengthOfLongestSubstring = function (s) {
  let longestSubstringLength = 0;
  let curSubstring = '';
  for (let i = 0; i < s.length; i++) {
    if (!curSubstring.includes(s[i])) {
      curSubstring += s[i];
      longestSubstringLength = Math.max(
        longestSubstringLength,
        curSubstring.length
      );
    } else {
      let startIndex = curSubstring.indexOf(s[i]);
      curSubstring = curSubstring.slice(startIndex + 1);
      curSubstring += s[i];
    }
  }
  return longestSubstringLength;
};
