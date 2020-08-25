// https://leetcode.com/explore/interview/card/top-interview-questions-easy/92/array/559/

/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function (digits) {
  let index = digits.length - 1;
  while (index >= 0) {
    if (digits[index] === 9) {
      digits[index--] = 0;
    } else {
      digits[index]++;
      break;
    }
  }
  if (index < 0) {
    digits.unshift(1);
  }
  return digits;
};
