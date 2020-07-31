// https://leetcode.com/explore/interview/card/top-interview-questions-easy/97/dynamic-programming/576/

/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function (nums) {
  const memo = [];
  for (let i = 0; i < nums.length; i++) {
    memo.push(Math.max(nums[i] + (memo[i - 2] | 0), memo[i - 1] | 0));
  }
  return memo[memo.length - 1] | 0;
};
