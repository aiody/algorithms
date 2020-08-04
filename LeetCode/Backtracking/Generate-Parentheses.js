// https://leetcode.com/explore/interview/card/top-interview-questions-medium/109/backtracking/794/

/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function (n) {
  // 길이 6의 답을 내야 하지. 열린 괄호 3개, 닫힌 괄호 3개
  // 사용한 괄호가 3개를 넘지 않으면 됨.
  // 닫힌 괄호의 개수는 반드시 열린 괄호의 개수보다 커야함.
  let answer = [];
  let numOfOpenParentheses = n;
  let numOfCloseParentheses = n;
  const result = [];
  function DFS(isOpen) {
    if (isOpen) {
      answer.push('(');
      numOfOpenParentheses--;
    } else {
      answer.push(')');
      numOfCloseParentheses--;
    }

    if (numOfOpenParentheses > 0) {
      DFS(true);
      answer.pop();
      numOfOpenParentheses++;
    }
    if (
      numOfCloseParentheses > 0 &&
      numOfOpenParentheses < numOfCloseParentheses
    ) {
      DFS(false);
      answer.pop();
      numOfCloseParentheses++;
    }
    if (numOfOpenParentheses === 0 && numOfCloseParentheses === 0) {
      result.push(answer.slice().join(''));
    }
  }
  DFS(true);
  return result;
};
