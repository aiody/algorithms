// https://leetcode.com/explore/interview/card/top-interview-questions-easy/92/array/727/

/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
  let curNum;
  let targetIndex = 0;
  for (let i = 0; i < nums.length; i++) {
    if (curNum !== nums[i]) {
      curNum = nums[i];
      [nums[targetIndex], nums[i]] = [nums[i], nums[targetIndex]];
      targetIndex++;
    }
  }
  nums.splice(targetIndex, nums.length - targetIndex);
};
