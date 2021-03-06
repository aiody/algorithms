// https://leetcode.com/explore/interview/card/top-interview-questions-medium/111/dynamic-programming/809/

/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function (coins, amount) {
  const dp = new Array(amount + 1).fill(amount + 1); // amount + 1 is to include amount 0, fill(amount + 1) is arbitrarily large value.
  dp[0] = 0;
  for (let i = 1; i <= amount; i++) {
    for (let j = 0; j < coins.length; j++) {
      if (coins[j] <= i) {
        dp[i] = Math.min(dp[i], dp[i - coins[j]] + 1);
      }
    }
  }
  return dp[amount] === amount + 1 ? -1 : dp[amount];
};
