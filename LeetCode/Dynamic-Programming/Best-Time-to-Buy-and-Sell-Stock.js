// https://leetcode.com/explore/interview/card/top-interview-questions-easy/97/dynamic-programming/572/

/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  let bestProfit = 0;
  let minPrice = prices[0];
  for (let i = 1; i < prices.length; i++) {
    minPrice = Math.min(prices[i], minPrice);
    bestProfit = Math.max(prices[i] - minPrice, bestProfit);
  }
  return bestProfit;
};
