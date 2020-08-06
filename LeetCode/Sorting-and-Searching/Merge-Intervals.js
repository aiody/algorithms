// https://leetcode.com/explore/interview/card/top-interview-questions-medium/110/sorting-and-searching/803/

/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function (intervals) {
  if (intervals.length === 0) {
    return intervals;
  }

  intervals.sort((a, b) => a[0] - b[0]);
  let min = intervals[0][0];
  let max = intervals[0][1];
  const answer = [];
  for (let i = 0; i < intervals.length - 1; i++) {
    if (max >= intervals[i + 1][0]) {
      max = Math.max(max, intervals[i + 1][1]);
    } else {
      answer.push([min, max]);
      min = intervals[i + 1][0];
      max = intervals[i + 1][1];
    }
  }
  answer.push([min, max]);
  return answer;
};
