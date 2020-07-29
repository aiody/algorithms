//https://leetcode.com/explore/interview/card/top-interview-questions-easy/127/strings/886/

/**
 * @param {number} n
 * @return {string}
 */
https: var countAndSay = function (n) {
  function say(nums, depth) {
    if (depth === n) {
      return nums;
    }
    let count = 1;
    let sayWhat = '';
    for (let i = 0; i < nums.length; i++) {
      if (nums[i] !== nums[i + 1]) {
        sayWhat += count;
        sayWhat += nums[i];
        count = 1;
      } else {
        count++;
      }
    }
    return say(sayWhat, depth + 1);
  }
  return say('1', 1);
};
