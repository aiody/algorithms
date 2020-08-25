// https://leetcode.com/explore/interview/card/top-interview-questions-easy/92/array/567/

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function (nums) {
  // like bubble sort

  // 0, 1, 0, 3, 12
  // 1, 0, 0, 3, 12
  // 1, 3, 0, 0, 12
  // 1, 3, 0, 12, 0
  // 1, 3, 12, 0, 0

  let zeroTargetIndex = -1;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 0) {
      zeroTargetIndex = i;
      let index = zeroTargetIndex + 1;
      while (index < nums.length) {
        if (nums[index] !== 0) {
          [nums[index], nums[zeroTargetIndex]] = [
            nums[zeroTargetIndex],
            nums[index]
          ];
          zeroTargetIndex = index;
        }
        index++;
      }
    }
  }
};
