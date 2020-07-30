// https://leetcode.com/explore/interview/card/top-interview-questions-easy/98/design/670/

/**
 * @param {number[]} nums
 */
var Solution = function (nums) {
  this.origin = nums;
};

/**
 * Resets the array to its original configuration and return it.
 * @return {number[]}
 */
Solution.prototype.reset = function () {
  return this.origin;
};

/**
 * Returns a random shuffling of the array.
 * @return {number[]}
 */
Solution.prototype.shuffle = function () {
  let target = this.origin.slice();
  let length = target.length;
  while (length) {
    let index = Math.floor(length-- * Math.random());
    let temp = target[length];
    target[length] = target[index];
    target[index] = temp;
  }
  return target;
};

/**
 * Your Solution object will be instantiated and called as such:
 * var obj = new Solution(nums)
 * var param_1 = obj.reset()
 * var param_2 = obj.shuffle()
 */
