// https://leetcode.com/explore/interview/card/top-interview-questions-easy/99/others/762/

/**
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
// 비트 연산자 참고
// https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Operators/Bitwise_Operators
var hammingDistance = function (x, y) {
  let target = x ^ y;
  let count = 0;
  while (target > 0) {
    if (target & 1) {
      count++;
    }
    target = target >> 1;
  }
  return count;
};
