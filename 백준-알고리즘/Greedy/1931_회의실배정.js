const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

/*
- 앞의 선택이 이후 선택에 영향을 주지 않는가?
  => 그렇다. 회의를 선택한다고 해서 다른 회의의 시간이 바뀌거나 하지 않는다. 회의 시간은 각각 독립적이다.
- 문제 전체에 대한 최적해가 부분 문제에 대해서도 역시 최적해가 되는지?
  => 그렇다. 가장 많은 회의를 배정 받기 위해서는 가장 짧은 회의를 선택하고 그 회의가 끝나면 또 가장 짧은 회의를 선택하면 된다.
*/

// 가장 많은 회의 배정 -> 짧은 회의를 많이, 그리고 연속으로 넣으면 됨.

// 끝나는 회의의 시간으로 정렬?
// - 시작부분에서 끝나는 시간이 빠르면 언제 시작하든 짧은 회의를 찾을 수 있음.
// - 맨 첫 번째 회의부터 체크. 이후에 맨 첫번째 회의의 끝나는 시간 이후의 것을 찾음.
// - 8 8, 7 8 이렇게 들어올 경우에도 답이 2가 되어야 하기 때문에 끝나는 시간이 같을 경우 시작 시간도 정렬해줘야 함.

let input = [];
rl.on('line', (line) => {
  input.push(line);
}).on('close', () => {
  let meetings = input
    .slice(1)
    .map((ele) => ele.split(' ').map((ele2) => parseInt(ele2)))
    .sort((a, b) => (a[1] === b[1] ? a[0] - b[0] : a[1] - b[1]));

  console.log(getMinCountOfMeeting(meetings));
});

function getMinCountOfMeeting(meetings) {
  let count = 0;
  let endTime = 0;
  meetings.forEach((ele) => {
    if (endTime <= ele[0]) {
      count++;
      endTime = ele[1];
    }
  });
  return count;
}

// https://www.acmicpc.net/problem/1931

/*
<FEEDBACK>
*/
