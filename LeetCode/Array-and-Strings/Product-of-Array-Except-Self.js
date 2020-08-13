// https://leetcode.com/explore/interview/card/top-interview-questions-hard/116/array-and-strings/827/

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function (nums) {
  let leftProduct = 1;
  const output = [];
  for (let i = 0; i < nums.length; i++) {
    output[i] = leftProduct;
    leftProduct *= nums[i];
  }

  let rightProduct = 1;
  for (let i = nums.length - 1; i >= 0; i--) {
    output[i] *= rightProduct;
    rightProduct *= nums[i];
  }

  return output;
};
