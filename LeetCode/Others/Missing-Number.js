// https://leetcode.com/explore/interview/card/top-interview-questions-easy/99/others/722/

/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function (nums) {
  let totalSum = 0;
  for (let i = 0; i < nums.length; i++) {
    totalSum += nums[i];
  }
  const expectedSum = ((nums.length + 1) * nums.length) / 2;
  return expectedSum - totalSum;
};
