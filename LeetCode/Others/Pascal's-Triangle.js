// https://leetcode.com/explore/interview/card/top-interview-questions-easy/99/others/601/

/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function (numRows) {
  const answer = [];

  function makeTriangle(depth) {
    if (depth === numRows) {
      return;
    }
    const layer = [];
    for (let i = 0; i <= depth; i++) {
      if (i === 0 || i === depth) {
        layer.push(1);
      } else {
        let newValue = answer[depth - 1][i - 1] + answer[depth - 1][i];
        layer.push(newValue);
      }
    }
    answer[depth] = layer;
    makeTriangle(depth + 1);
  }

  makeTriangle(0);
  return answer;
};
