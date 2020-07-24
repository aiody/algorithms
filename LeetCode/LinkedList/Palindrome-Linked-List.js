// https://leetcode.com/explore/interview/card/top-interview-questions-easy/93/linked-list/772/

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function (head) {
  let target = head;
  const elements = [];
  while (target != null) {
    elements.push(target.val);
    target = target.next;
  }

  let startIndex = 0;
  let endIndex = elements.length - 1;
  let answer = true;
  while (startIndex <= endIndex) {
    if (elements[startIndex++] != elements[endIndex--]) {
      answer = false;
      break;
    }
  }
  return answer;
};
