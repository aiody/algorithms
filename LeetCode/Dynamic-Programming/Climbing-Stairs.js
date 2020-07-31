// https://leetcode.com/explore/interview/card/top-interview-questions-easy/97/dynamic-programming/569/

/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function (n) {
  const memo = [];
  for (let i = 0; i < n; i++) {
    const preValue = memo[i - 1] ? memo[i - 1] : 0;
    const beforePreValue = memo[i - 2] ? memo[i - 2] : 1;
    memo.push(preValue + beforePreValue);
  }
  return memo[memo.length - 1] | 0;
};
