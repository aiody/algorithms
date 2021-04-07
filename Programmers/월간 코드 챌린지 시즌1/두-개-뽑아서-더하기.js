// https://programmers.co.kr/learn/courses/30/lessons/68644

function solution(numbers) {
  var answer = [];
  let uniqueNum = {};
  for(let i = 0; i < numbers.length; i++) {
      for(let j = i + 1; j < numbers.length; j++) {
          uniqueNum[numbers[i] + numbers[j]] = 1;
      }
  }
  answer = Object.keys(uniqueNum).map((el) => Number(el));
  return answer;
}