const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

/*
<문제 풀이 과정>
그룹 단어의 개수를 출력하기.
그룹 단어란? 문자가 1번 이상 연속해서 나타나는 경우. 'aba'의 a처럼 떨어져서 나온 경우는 그룹 단어가 아니다.

그룹 단어인지를 검사해주는 함수를 만들 것임.
그룹 단어인지 어떻게 검사하냐면.
새 단어를 검사할 때 히스토리에 있는지 검사.
없으면 추가, 현재 단어로 선택. 있으면 현재 단어인지 검사.
현재 단어가 아니면 그룹 단어 아님.
// happy에서 현재단어 = 'h', history = ['h'], a 검사 : history = ['h', 'a'], 현재단어 = 'a'
*/

let input = [];
rl.on('line', (line) => {
  input.push(line);
}).on('close', () => {
  let groupWords = input.slice(1);
  let count = 0;
  groupWords.forEach((ele) => {
    if (isGroupWord(ele)) {
      count++;
    }
  });
  console.log(count);
});

function isGroupWord(word) {
  let history = [];
  let curWord = word[0];
  for (let i = 0; i < word.length; i++) {
    if (!history.includes(word[i])) {
      history.push(word[i]);
      curWord = word[i];
      continue;
    } else if (curWord != word[i]) {
      return false;
    }
  }
  return true;
}
