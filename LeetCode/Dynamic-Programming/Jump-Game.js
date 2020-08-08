// https://leetcode.com/explore/interview/card/top-interview-questions-medium/111/dynamic-programming/807/

// 멈추는 조건만 검사하는게 포인트.

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function (nums) {
  let max = nums[0];
  for (let i = 0; i < nums.length; i++) {
    max = Math.max(max, i + nums[i]);
    if (nums[i] === 0 && max <= i && i < nums.length - 1) {
      return false;
    }
  }
  return true;
};
