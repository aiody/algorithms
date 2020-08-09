// https://leetcode.com/explore/interview/card/top-interview-questions-medium/111/dynamic-programming/810/

/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function (nums) {
  if (nums.length === 0) return 0;

  let max = 1;
  const memo = new Array(nums.length).fill(1);
  for (let i = 1; i < nums.length; i++) {
    for (let j = 0; j < i; j++) {
      if (nums[i] > nums[j]) {
        memo[i] = Math.max(memo[i], memo[j] + 1);
      }
    }
  }
  return Math.max(...memo);
};
