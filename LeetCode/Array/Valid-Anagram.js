// https://leetcode.com/explore/interview/card/top-interview-questions-easy/127/strings/882/

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
  /*
  s = s.split('').sort().join('');
  t = t.split('').sort().join('');
  return s === t;
  */
  if (s.length !== t.length) return false;

  const chars = {};
  for (let i = 0; i < s.length; i++) {
    chars[s[i]] = (chars[s[i]] || 0) + 1;
  }
  for (let i = 0; i < t.length; i++) {
    if (!chars[t[i]]) {
      return false;
    } else {
      chars[t[i]]--;
    }
  }
  return true;
};
