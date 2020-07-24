const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

/*
<문제 풀이 과정>
노드가 하나 제거된 트리의 리프 노드 개수 구하기.
1. 트리 구성하기 (오브젝트)
tree = {
  0 : {
    1 : {
      3 : null,
      4 : null,
    }
    2 : null,
  }
}

2. 노드 제거하기
tree = {
  0 : {
    2 : null,
  }
}
3. 남은 리프 노드 세기 - 리프 노드 개수는 value가 null인 키의 개수를 세면 된다.

=====> 개수만 세는 거니까 오브젝트로 표시 안 해도 될 것 같아.

-1 0 0 1 1
 0 1 2 3 4

노드 1 삭제

-1 0
 0 2

리프 개수는?
부모가 되지 않은 노드 : 2 - 1개

-1 0 0 1 1
 0 1 2 3 4

노드 2 삭제

-1 0 1 1
 0 1 3 4

부모가 되지 않은 노드 : 3, 4 - 2개

!! 반례 !!
6
4 -1 0 1 2 2
1

=====> 결국 트리를 구현하기로 했다...

!! 이건 뭐지?? !!
// https://www.acmicpc.net/board/view/27741
// https://www.acmicpc.net/board/view/12328

<준현>
배열에서
[-1 -0- 0 -1- -1- ]
1를 지울 때 1번째에 있는 0 지우고
1번째에 있으니까 3, 4번째에 있는 1을 지우는 방식
<기원>
오브젝트에 담아서 삭제하는 방법

=====> 문제를 잘못 이해하고 있었다..!! 다시 생각
11
1 4 3 -1 3 1 2 0 6 6 6 1
2

[1, 4, 3, -1, 3, 1, 2, 0, 6, 6, 6, 1]
여기서 2를 지운다면
1. 2번째 인덱스에 있는 값 3 지우기.
2. 2를 지우기.
[1, 4, 3, -1, 3, 1, 0, 6, 6, 6, 1]
3. 2가 위치한 곳이 인덱스 6이기 때문에 6을 모두 지우기.
[1, 4, -1, 3, 1, 0, 1]
4. 6들이 있었던 인덱스가 8, 9, 10이기 때문에 8, 9, 10을 지워야 하지만 값이 없기 때문에 종료.
*/

let input = [];
rl.on('line', (line) => {
  input.push(line);
}).on('close', () => {
  let tree = input[1].split(' ').map((el, index) => [parseInt(el), index]);
  let nodeToDelete = parseInt(input[2]);

  function deleteNode(num) {
    let toBeDeletedNodes = [];
    tree = tree.filter((el) => {
      if (el[0] === num || el[1] === num) {
        toBeDeletedNodes.push(el[1]);
      } else {
        return true;
      }
    });
    toBeDeletedNodes.forEach((el) => {
      deleteNode(el);
    });
  }

  deleteNode(nodeToDelete);

  const values = tree.map((el) => el[0]);
  const indexes = tree.map((el) => el[1]);

  const leaves = indexes.filter((el) => !values.includes(el));
  console.log(leaves.length);
});

// https://www.acmicpc.net/problem/1068
