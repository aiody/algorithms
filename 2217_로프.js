const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

/*
  <문제 풀이 과정>

  로프가 버틸 수 있는 최대 중량 구하기.
  w / k = 로프에 걸리는 중량
  최대의 중량으로 버틸 수 있다는 건 가장 약한 로프만 견디면 다 견딜 수 있다는 의미.
  문제 : 10, 15 => 20
  20 / 2 = 10. 로프 2개 썼다는 뜻.
  => 20 = 10 * 2
  최소로 버티는 로프 * 쓴 로프 개수 = 최대 중량

  튼튼한 로프 순으로 정렬
  15
  10

  하나씩 써본다고 가정하면
  15 * 1 = 15
  10 * 2 = 20
  정답 20

- 앞의 선택이 이후 선택에 영향을 주지 않는가?
  => 그렇다. 로프를 선택한다고 해서 다른 로프가 견딜 수 있는 중량이 변하는 것은 아니다. 독립적임.
- 문제 전체에 대한 최적해가 부분 문제에 대해서도 역시 최적해가 되는지?
  => 로프를 튼튼한 순으로 정렬하면 앞에서부터 차례로 로프를 써나가면 가장 버틸 수 있는 무거운 중량을 구할 수 있다.
*/
let input = [];
rl.on('line', (line) => {
  input.push(line);
}).on('close', () => {
  let ropes = input
    .slice(1)
    .map((ele) => parseInt(ele))
    .sort((a, b) => b - a);

  console.log(getMaxWeight(ropes));
});

function getMaxWeight(ropes) {
  let maxWeight = 0;
  for (let i = 0; i < ropes.length; i++) {
    maxWeight = Math.max(maxWeight, ropes[i] * (i + 1));
  }
  return maxWeight;
}

// https://www.acmicpc.net/problem/2217
