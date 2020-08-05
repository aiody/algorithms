// https://leetcode.com/explore/interview/card/top-interview-questions-medium/103/array-and-strings/781/

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var increasingTriplet = function (nums) {
  let first = Infinity;
  let second = Infinity;
  for (let i = 0; i < nums.length; i++) {
    if (first >= nums[i]) {
      first = nums[i];
    } else if (second >= nums[i]) {
      second = nums[i];
    } else {
      return true;
    }
  }
  return false;
};
