// https://programmers.co.kr/learn/courses/30/lessons/60059

function solution(key, lock) {
  for (let i = 1 - key.length; i < lock.length; i++) {
    for (let j = 1 - key.length; j < lock.length; j++) {
      let newKey = redefineIndexOfKey(i, j, key);
      for (let i = 0; i < 4; i++) {
        newKey = rotateKey(newKey, key.length);
        if (compareKeyWithLock(newKey, lock)) {
          return true;
        }
      }
    }
  }
  return false;
}

function rotateKey(key, n) {
  let newKey = Array.from(Array(n), () => Array(n).fill(0));
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      newKey[j][n - 1 - i] = key[i][j];
    }
  }
  return newKey;
}

function redefineIndexOfKey(curX, curY, key) {
  let n = key.length;
  let newKey = Array.from(Array(n), () => Array(n).fill(0));
  for (let i = curX; i < curX + n; i++) {
    for (let j = curY; j < curY + n; j++) {
      if (!isInKey(i, j, n)) continue;
      newKey[i][j] = key[i - curX][j - curY];
    }
  }
  return newKey;
}

function isInKey(x, y, N) {
  return x >= 0 && x < N && y >= 0 && y < N;
}

function compareKeyWithLock(key, lock) {
  for (let i = 0; i < lock.length; i++) {
    for (let j = 0; j < lock.length; j++) {
      if (lock[i][j] === key[i][j]) {
        return false;
      }
    }
  }
  return true;
}
