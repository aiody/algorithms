const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

/*
<문제 풀이 과정>
플러그를 빼는 횟수를 최소화 하고 싶다.

<1번째 시도>
전기용품의 사용순서 리스트를 멀티탭의 구멍 개수만큼 잘라서 확인한다.
2 7
2 3 2 3 1 2 7
2 3 / 2 3 / 1 2 / 7
-> 다음 것을 확인할 때 다른 전기용품을 사용하게 되면 그것을 빼면 된다.

!! 반례 !!
3 9
1 2 3 4 1 1 1 1 3
답 1인데 2를 출력함

<2번째 시도>
다음 것을 확인할 때, 사용 순서를 멀티탭 구멍 개수만큼 확인하는 게 아니라 사용 기기 종류가 멀티탭 구멍 개수만큼 확인하기.

!! 반례 !!
2 11
1 2 3 4 5 1 1 1 2 2 2
답 4인데 5를 출력함

<3번째 시도>
어떤 것을 뽑으려고 할 때 뒤에 남은 순서를 확인해서 있으면 안 뽑으면 되는 건가. 기준은 outlet에 뭘 뺄지 하나 찾기.

!! 반례 !!
3 11
11 8 11 7 2 8 2 7 5 10 2
답 3인데 4를 출력함

<4번째 시도>
처음 outlet에 초기화할 때 바로 넣으면 안 되겠다.

- 앞의 선택이 이후 선택에 영향을 주지 않는가?
=> 그렇다. 멀티탭에 어떤 전기용품을 사용하는지가 다음 전기용품의 순서를 바꾸거나 하는 일은 없다.
- 문제 전체에 대한 최적해가 부분 문제에 대해서도 역시 최적해가 되는지?
=> 그렇다. 전기용품의 사용순서를 멀티탭 구멍의 개수만큼 잘라서 다음에도 사용하지 않을 것들만 빼는 식으로 검사하면 된다.
*/

let input = [];
rl.on('line', (line) => {
  input.push(line);
}).on('close', () => {
  let numOfSocket = parseInt(input[0].split(' ')[0]);
  let orders = input[1].split(' ').map((ele) => parseInt(ele));

  console.log(getMinNumOfTimesToUnplug(orders, numOfSocket));
});

function getMinNumOfTimesToUnplug(orders, numOfSocket) {
  let outlet = [];
  let count = 0;

  for (let i = 0; i < orders.length; i++) {
    if (!outlet.includes(orders[i])) {
      if (outlet.length < numOfSocket) {
        outlet.push(orders[i]);
      } else {
        count++;
        // 뭘 뺄지 알아내기
        let whatIUnplug = outlet.slice();
        let inspectList = orders.slice(i + 1);
        for (let j = 0; j < inspectList.length; j++) {
          if (whatIUnplug.length === 1) break;
          if (whatIUnplug.includes(inspectList[j])) {
            let index = whatIUnplug.indexOf(inspectList[j]);
            whatIUnplug.splice(index, 1);
          }
        }

        // 빼고 새 것을 넣기
        let index = outlet.indexOf(whatIUnplug[0]);
        outlet.splice(index, 1);
        outlet.push(orders[i]);
      }
    }
  }

  return count;
}

// https://www.acmicpc.net/problem/1700
