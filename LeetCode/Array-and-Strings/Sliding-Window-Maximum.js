// https://leetcode.com/explore/interview/card/top-interview-questions-hard/116/array-and-strings/837/

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSlidingWindow = function (nums, k) {
  const answer = [];
  for (let i = 0; i <= nums.length - k; i++) {
    answer.push(nums[i]);
  }

  for (let i = 0; i < nums.length; i++) {
    for (
      let j = Math.max(0, i - k + 1);
      j <= Math.min(answer.length - 1, i);
      j++
    ) {
      answer[j] = Math.max(nums[i], answer[j]);
    }
  }

  return answer;
};
