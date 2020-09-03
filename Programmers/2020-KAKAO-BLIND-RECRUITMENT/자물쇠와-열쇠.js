// https://programmers.co.kr/learn/courses/30/lessons/60059

function solution(key, lock) {
  for (let i = 1 - key.length; i < lock.length; i++) {
    for (let j = 1 - key.length; j < lock.length; j++) {
      for (let k = 0; k < 4; k++) {
        let whatToCompare = findWhatToCompareWithLock(
          i,
          j,
          key,
          lock.length,
          k
        );
        if (compareKeyWithLock(whatToCompare, lock)) {
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

function findWhatToCompareWithLock(curX, curY, key, n, numOfRotation) {
  let whatToCompare = Array.from(Array(n), () => Array(n).fill(0));
  for (let i = 0; i < numOfRotation; i++) {
    key = rotateKey(key, key.length);
  }
  for (let i = curX; i < curX + key.length; i++) {
    for (let j = curY; j < curY + key.length; j++) {
      if (!isInLock(i, j, n)) continue;
      whatToCompare[i][j] = key[i - curX][j - curY];
    }
  }
  return whatToCompare;
}

function isInLock(x, y, N) {
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
