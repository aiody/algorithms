// https://leetcode.com/explore/interview/card/top-interview-questions-easy/97/dynamic-programming/566/

/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
  let solution = nums[0];
  let curMax = nums[0];
  for (let i = 1; i < nums.length; i++) {
    curMax = Math.max(curMax + nums[i], nums[i]);
    solution = Math.max(solution, curMax);
  }
  return solution;
};
