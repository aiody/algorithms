const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

/*
<문제 풀이 과정>
종말의 숫자 666이 들어간 수 중에서 N번째로 큰 수를 출력하기
666 1666 2666 3666 4666 5666 6660 6661 6662 6663 6664 6665 6666 6667 6668 6669 7666
8666 9666 10666 11666 12666 13666 14666 15666 16661 16662 16663 16664 16665 16666 16667 16668 16669 17666

6 16 26 36 46 56 60 61 62 63 64 65 66 67 68 69 76 86 96 106 116 126 136 146 156 161 162 163 164 165 166 167 168 169 176
186 196 206 216 226 236 246 256 261 262 263 264 265 266 267 268 269 276 286 296 306 316
... 596 606 600 606 59666 60666 66606 66600

6이 들어가는 수를 찾아서 6을 666으로 바꿔주면 될 것 같다. => 아니다.. 600대부터는 어떻게 처리해?

1부터 쭉 세면서 666이 들어가면 하나씩 카운트하자.
더 빠르게 할 수 있는 방법이 없을까?

*/

let input = [];
rl.on('line', (line) => {
  input = parseInt(line);
}).on('close', () => {
  let seriesNum = [];
  let compareNum = 666;
  while (seriesNum.length < input) {
    if (String(compareNum).includes('666')) {
      seriesNum.push(compareNum);
    }
    compareNum++;
  }
  console.log(seriesNum[input - 1]);
});
