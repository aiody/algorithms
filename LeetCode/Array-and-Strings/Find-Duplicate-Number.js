// https://leetcode.com/explore/interview/card/top-interview-questions-hard/116/array-and-strings/834/

/**
 * @param {number[]} nums
 * @return {number}
 */
var findDuplicate = function (nums) {
  for (let i = 0; i < nums.length; i++) {
    const index = Math.abs(nums[i]) - 1;
    if (nums[index] < 0) {
      return Math.abs(nums[i]);
    }
    nums[index] *= -1;
  }
};
