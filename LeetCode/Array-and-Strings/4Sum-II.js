// https://leetcode.com/explore/interview/card/top-interview-questions-hard/116/array-and-strings/829/

/**
 * @param {number[]} A
 * @param {number[]} B
 * @param {number[]} C
 * @param {number[]} D
 * @return {number}
 */
var fourSumCount = function (A, B, C, D) {
  // A + B + C + D = 0, O(n^4)
  /*
  let count = 0;
  for(let a = 0; a < A.length; a++) {
      for(let b = 0; b < B.length; b++) {
          for(let c = 0; c < C.length; c++) {
              for(let d = 0; d < D.length; d++){
                  if(A[a] + B[b] + C[c] + D[d] === 0) {
                      count++;
                  }
              }
          }
      }
  }
  return count;
  */

  // A + B = -(C + D), O(2n^2)
  const aPlusB = {};
  for (let i = 0; i < A.length; i++) {
    for (let j = 0; j < B.length; j++) {
      if (aPlusB[A[i] + B[j]] === undefined) {
        aPlusB[A[i] + B[j]] = 1;
      } else {
        aPlusB[A[i] + B[j]]++;
      }
    }
  }

  let count = 0;
  for (let i = 0; i < C.length; i++) {
    for (let j = 0; j < D.length; j++) {
      if (aPlusB[-(C[i] + D[j])] !== undefined) {
        count += aPlusB[-(C[i] + D[j])];
      }
    }
  }

  return count;
};
