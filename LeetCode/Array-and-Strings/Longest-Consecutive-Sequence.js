// https://leetcode.com/explore/interview/card/top-interview-questions-hard/116/array-and-strings/833/

/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function (nums) {
  let max = 0;
  const record = {};
  for (let i = 0; i < nums.length; i++) {
    if (record[nums[i]]) continue;

    let left = record[nums[i] - 1] || 0;
    let right = record[nums[i] + 1] || 0;
    let len = left + right + 1;

    record[nums[i] - left] = len;
    record[nums[i]] = len;
    record[nums[i] + right] = len;

    max = Math.max(max, len);
  }

  return max;
};
