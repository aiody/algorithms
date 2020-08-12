// https://leetcode.com/explore/interview/card/top-interview-questions-medium/103/array-and-strings/778/

/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
  const record = {};
  strs.forEach((el) => {
    const sorted = el.split('').sort().join('');
    if (record[sorted]) {
      record[sorted].push(el);
    } else {
      record[sorted] = [];
      record[sorted].push(el);
    }
  });
  return Object.values(record);
};
