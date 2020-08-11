// https://leetcode.com/explore/interview/card/top-interview-questions-medium/103/array-and-strings/780/

/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {
  let answer = '';
  for (let i = 0; i < s.length; i++) {
    answer = getLongestPalindrome(s, answer, i, i);
    answer = getLongestPalindrome(s, answer, i, i + 1);
  }
  return answer;
};

function getLongestPalindrome(s, answer, start, end) {
  const palindrome = findPalindrome(s, start, end);
  if (palindrome.length > answer.length) {
    return palindrome;
  } else {
    return answer;
  }
}

function findPalindrome(s, start, end) {
  if (s[start] !== s[end]) return '';

  while (s[start] && s[end] && s[start] === s[end]) {
    start--;
    end++;
  }
  return s.slice(start + 1, end);
}
