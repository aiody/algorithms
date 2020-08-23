// https://leetcode.com/explore/interview/card/top-interview-questions-hard/116/array-and-strings/837/

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSlidingWindow = function (nums, k) {
  // brute force
  /*
  const answer = [];
  for(let i = 0; i <= nums.length - k; i++) {
      answer.push(nums[i]);
  }
  
  for(let i = 0; i < nums.length; i++) {
      for(let j = Math.max(0, i - k + 1); j <= Math.min(answer.length - 1, i); j++) {
          answer[j] = Math.max(nums[i], answer[j]);
      }
  }
  
  return answer;
  */

  // https://leetcode.com/explore/interview/card/top-interview-questions-hard/116/array-and-strings/837/discuss/135919/JavaScript-solution-using-Monotonic-queue

  let queue = [];
  const answer = [];

  for (let i = 0; i < nums.length; i++) {
    while (queue.length && nums[i] > queue[queue.length - 1]) {
      queue.pop();
    }
    queue.push(nums[i]);

    let veryLeftIndexOfWindow = i - k + 1;
    if (veryLeftIndexOfWindow >= 0) {
      answer.push(queue[0]);
      if (nums[veryLeftIndexOfWindow] === queue[0]) {
        queue.shift();
      }
    }
  }
  return answer;
};
