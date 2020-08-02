// https://leetcode.com/explore/interview/card/top-interview-questions-easy/99/others/721/

/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  const brackets = [];
  for (let i = 0; i < s.length; i++) {
    if (s[i] === '(') {
      brackets.push(')');
    } else if (s[i] === '{') {
      brackets.push('}');
    } else if (s[i] === '[') {
      brackets.push(']');
    } else if (s[i] === brackets[brackets.length - 1]) {
      brackets.pop();
    } else {
      brackets.push(s[i]);
    }
  }
  return brackets.length === 0;
};
