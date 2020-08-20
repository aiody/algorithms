// https://leetcode.com/explore/interview/card/top-interview-questions-easy/127/strings/880/

/**
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {
  const max = Math.pow(2, 31);
  const splitedX = String(Math.abs(x)).split('');
  const reverseNum = parseInt(splitedX.reverse().join(''), 10);
  if (reverseNum > max || reverseNum < -max) {
    return 0;
  } else if (x < 0) {
    return -reverseNum;
  } else {
    return reverseNum;
  }
};
