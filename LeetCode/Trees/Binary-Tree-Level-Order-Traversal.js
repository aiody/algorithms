//https://leetcode.com/explore/interview/card/top-interview-questions-easy/94/trees/628/

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function (root) {
  const answer = [];
  function getValueFromTreeByDepth(curTree, depth) {
    if (!curTree) return;
    if (!answer[depth]) {
      answer[depth] = [];
    }
    answer[depth].push(curTree.val);
    getValueFromTreeByDepth(curTree.left, depth + 1);
    getValueFromTreeByDepth(curTree.right, depth + 1);
  }
  getValueFromTreeByDepth(root, 0);
  return answer;
};
