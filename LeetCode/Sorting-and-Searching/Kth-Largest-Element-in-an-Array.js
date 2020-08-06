// https://leetcode.com/explore/interview/card/top-interview-questions-medium/110/sorting-and-searching/800/

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function (nums, k) {
  nums.sort((a, b) => b - a);
  return nums[k - 1];
};
