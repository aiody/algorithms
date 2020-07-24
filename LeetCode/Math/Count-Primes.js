// https://leetcode.com/explore/interview/card/top-interview-questions-easy/102/math/744/

/**
 * @param {number} n
 * @return {number}
 */
var countPrimes = function (n) {
  let count = 0;
  for (let i = 2; i < n; i++) {
    if (isPrimeNum(i)) {
      count++;
    }
  }
  return count;
};

function isPrimeNum(n) {
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) {
      return false;
    }
  }
  return true;
}
