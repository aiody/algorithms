// https://leetcode.com/explore/interview/card/top-interview-questions-easy/92/array/578/

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function (nums) {
  const record = {};
  for (let i = 0; i < nums.length; i++) {
    if (record[nums[i]]) return true;
    record[nums[i]] = 1;
  }
  return false;
};
