const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

/*
<문제 풀이 과정>
N과 L이 주어질 때, 합이 N이면서, 길이가 적어도 L인 가장 짧은 연속된 음이 아닌 정수 리스트를 구하기.

18 2
18 / 2 = 9
 : 8 9 = 17
 : 9 10 = 19

18 3
18 / 3 = 6
6 7 8 = 21
5 6 7 = 18

N을 L로 쪼개서 (나온 결과 - 1)부터 수열을 세는거지.

수열의 합 공식 찾아보자.
n(a + l) / 2
n 수열 길이, a 처음 값, l 마지막 값

24 2
24 / 2 = 12
11 12 = 23
12 13 = 26

24 / 3 = 8
7 8 9 = 24 정답!

99 2
99 / 2 = 49.5
48 49 = 97
49 50 = 99

131 2
131 / 2 = 65.5
64 65 = 129
65 66 = 131

512 2
512 / 2 = 256
256 - 1
255 256 = 511
256 257 = 513

512 / 3 = 170.66
170 - 1
169 170 171 = 510
170 171 172 = 513

512 / 4 = 128
128 - 2
126 127 128 129 = 510
127 128 129 130 = 514

512 / 5 = 102.4
102 - 2
100 101 102 103 104 = 510
101 102 103 104 105 = 515

512 / 6 = 85.33
85 - 3
82 83 84 85 86 87 = 507
83 84 85 86 87 88 = 513

512 / 7 = 73.14
73 - 3
70 71 72 73 74 75 76 = 511
71 72 73 74 75 76 77 = 518

512 / 8 = 64
64 - 4
60 61 62 63 64 65 66 67 = 508
61 62 63 64 65 66 67 68 = 516

512 / 9 = 56.88
56 - 4
52 53 54 55 56 57 58 59 60 = 504
53 54 55 56 57 58 59 60 61 = 513

512 / 10 = 51.2
51 - 5
46 47 48 49 50 51 52 53 54 55 = 505
47 48 49 50 51 52 53 54 55 56 = 515

512 / 11 = 46.54
46 - 5
41 42 43 44 45 46 47 48 49 50 51 = 506
42 43 44 45 46 47 48 49 50 51 52 = 517

512 / 12 = 42.66
42 - 6
36 37 38 39 40 41 42 43 44 45 46 47 = 498
37 38 39 40 41 42 43 44 45 46 47 48 = 510
38 39 40 41 42 43 44 45 46 47 48 49 = 522

512 / 13 = 39.38
39 - 6
33 34 35 36 37 38 39 40 41 42 43 44 45 = 507
34 35 36 37 38 39 40 41 42 43 44 45 46 = 520

512 / 14 = 36.57
36 - 7
29 30 31 32 33 34 35 36 37 38 39 40 41 42 = 497
30 31 32 33 34 35 36 37 38 39 40 41 42 43 = 511

512 / 15 = 34.13
34 - 7
27 28 29 30 31 32 33 34 35 36 37 38 39 40 41 = 510
28~42 = 525

512 / 16 = 32
32 - 8
24~39 = 504
25 40 = 520

====> https://danco.tistory.com/30
수학적으로 접근하면 더 쉽게 풀 수 있다.

N : 길이가 L인 수열의 합
L : 수열의 길이

N = x + (x + 1) + (x + 2) + ... + (x + (L - 1))
N = Lx + (0 + 1 + 2 + ... + (L - 1))
N = Lx + t
t는 수열의 합 공식을 사용해서 정리하면 L(L - 1) / 2
N - t = Lx
x = (N - t) / L
x = (N - L(L - 1) / 2) / L
여기서 x는 0보다 같거나 크고 정수여야 한다.
*/

let input;
rl.on('line', (line) => {
  input = line;
}).on('close', () => {
  const splitedInput = input.split(' ').map((el) => parseInt(el));
  const targetNum = splitedInput[0];
  let minLength = splitedInput[1];

  // 2번째 방법
  let startSequence = -1;
  while (minLength <= 100) {
    startSequence = (targetNum - minLength * (minLength - 1) * 0.5) / minLength;
    if (startSequence >= 0 && startSequence % 1 === 0) {
      break;
    }
    minLength++;
  }
  console.log(minLength > 100 ? -1 : printAnswer(startSequence, minLength));

  /*
  // 1번째 방법
  let startNumOfAnswer = 0;
  while (minLength <= 100) {
    let sumOfSequence = 0;
    let startNum = Math.max(
      0,
      Math.floor(targetNum / minLength) - Math.floor(minLength / 2)
    );

    while (sumOfSequence < targetNum) {
      const endNum = startNum + minLength - 1;
      sumOfSequence = ((startNum + endNum) * minLength) / 2;
      startNum++;
    }
    if (sumOfSequence === targetNum) {
      startNumOfAnswer = startNum - 1;
      break;
    }
    minLength++;
  }
  console.log(minLength > 100 ? -1 : printAnswer(startNumOfAnswer, minLength));
  */
});

function printAnswer(startNum, length) {
  const answer = [];
  for (let i = startNum; i < startNum + length; i++) {
    answer.push(i);
  }
  return answer.join(' ').toString();
}

// https://www.acmicpc.net/problem/1024
