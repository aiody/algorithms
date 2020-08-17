// https://leetcode.com/explore/interview/card/top-interview-questions-hard/116/array-and-strings/832/

/**
 * @param {number[]} nums
 * @return {number}
 */
var firstMissingPositive = function (nums) {
  // O(nlog n)
  /*
  nums.sort((a, b) => a - b);
  
  let theSmallestNum = 1;
  for(let i = 0; i < nums.length; i++) {
      if(theSmallestNum === nums[i]) {
          theSmallestNum++;
      }
  }
  
  return theSmallestNum;
  */

  // O(n) time complexity, O(n) space
  /*
  const storage = [];
  for(let i = 0; i < nums.length; i++) {
      if(nums[i] > 0) {
          storage[nums[i]] = true;
      }
  }
  
  let index = 1;
  while(index < storage.length) {
      if(storage[index] === undefined) {
          return index;
      }
      index++;
  }
  return index;
  */

  // note that is limited range 1 to n + 1
  // n 보다 크거나 0보다 작은 수는 제외한다.
  // https://www.youtube.com/watch?v=9SnkdYXNIzM
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] <= nums.length && nums[i] > 0) {
      nums[nums[i] - 1] = undefined;
    }
  }
  console.log(nums);
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== undefined) {
      return i + 1;
    }
  }
  return nums.length;
};
