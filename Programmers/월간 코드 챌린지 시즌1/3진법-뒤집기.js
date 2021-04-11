// https://programmers.co.kr/learn/courses/30/lessons/68935

function solution(n) {
  var answer = 0;
  // n이 100,000,000 이하이므로 3진법으로 18자리를 넘을 수 없다.
  let maxDigit = 18;
  
  // 3진법의 각 자리수의 값을 참고할 레퍼런스 생성
  let refer = [];
  let ternary = [];
  for(let i = maxDigit; i >= 0; i--) {
      refer.push(Math.pow(3, i));
      ternary[i] = 0;
  }
  
  // 3진법 변환
  let firstValidIndex = -1; // 유효한 값의 자릿수 구하기
  for(let i = 0; i <= maxDigit; i++) {
      if(n === 0) break;
      if(n - refer[i] >= 0) {
          n -= refer[i];
          ternary[i]++;
          if(firstValidIndex === -1) {
              firstValidIndex = i;
          }
          i--; // 연산이 수행되었던 같은 i 값으로 n - refer[i] 값이 또 0보다 클 수 있으므로
      }
  }
  
  // 유효한 범위만 잘라내기
  refer = refer.slice(firstValidIndex);
  ternary = ternary.slice(firstValidIndex);
  
  // 반전
  ternary.reverse();
  
  // 10진법으로 변환
  for(let i = 0; i < refer.length; i++) {
      answer += refer[i] * ternary[i];
  }
  
  return answer;
}
