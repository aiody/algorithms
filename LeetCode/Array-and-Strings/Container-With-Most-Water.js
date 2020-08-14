// https://leetcode.com/explore/interview/card/top-interview-questions-hard/116/array-and-strings/830/

/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
  let leftWall = 0;
  let rightWall = height.length - 1;
  let maxWater = 0;
  while (leftWall != rightWall) {
    const curWater =
      Math.min(height[leftWall], height[rightWall]) * (rightWall - leftWall);
    maxWater = Math.max(maxWater, curWater);
    if (height[leftWall] <= height[rightWall]) {
      leftWall++;
    } else {
      rightWall--;
    }
  }
  return maxWater;
};
