// https://leetcode.com/explore/interview/card/top-interview-questions-easy/102/math/743/

/**
 * @param {number} n
 * @return {string[]}
 */
var fizzBuzz = function (n) {
  const answer = [];
  for (let i = 1; i <= n; i++) {
    let eleOfAnswer = '';
    if (i % 3 === 0) {
      eleOfAnswer += 'Fizz';
    }
    if (i % 5 === 0) {
      eleOfAnswer += 'Buzz';
    }
    if (eleOfAnswer.length === 0) {
      eleOfAnswer += i;
    }
    answer.push(eleOfAnswer);
  }
  return answer;
};
