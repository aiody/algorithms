// https://leetcode.com/explore/interview/card/top-interview-questions-easy/92/array/546/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  /*
  for(let i = 0; i < nums.length; i++) {
      for(let j = i + 1; j < nums.length; j++) {
          if(nums[i] + nums[j] === target) {
              return [i, j];
          }
      }
  }
  */

  /*
  const hashMap = {};
  for(let i = 0; i < nums.length; i++) {
      hashMap[target - nums[i]] = i;
  }
  for(let i = 0; i < nums.length; i++) {
      if(hashMap.hasOwnProperty(nums[i]) && hashMap[nums[i]] !== i) {
          return [i, hashMap[nums[i]]];
      }
  }
  */

  const hashMap = {};
  for (let i = 0; i < nums.length; i++) {
    if (hashMap[nums[i]] >= 0) {
      return [i, hashMap[nums[i]]];
    }
    hashMap[target - nums[i]] = i;
  }
};
