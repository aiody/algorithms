// https://leetcode.com/explore/interview/card/top-interview-questions-easy/102/math/878/

/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
  const symbol = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000
  };
  let index = 0;
  let answer = 0;
  while (index < s.length) {
    const targetNum = symbol[s[index]];
    const nextTargetNum = symbol[s[index + 1]];
    if (targetNum < nextTargetNum) {
      answer += nextTargetNum - targetNum;
      index += 2;
    } else {
      answer += targetNum;
      index++;
    }
  }
  return answer;
};
