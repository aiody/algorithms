// https://programmers.co.kr/learn/courses/30/lessons/70129

function solution(s) {
  var answer = [0, 0];
  
  while(s !== '1') {
      let beforeLength = s.length;
      s = s.replace(/0/g, '');
      let afterLength = s.length;
      answer[1] += beforeLength - afterLength;
      s = afterLength.toString(2);
      answer[0]++;
  }
  
  return answer;
}
