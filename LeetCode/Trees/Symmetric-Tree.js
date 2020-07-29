//https://leetcode.com/explore/interview/card/top-interview-questions-easy/94/trees/627/

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
 * @return {boolean}
 */
var isSymmetric = function (root) {
  const arrOfTree = [];
  getValueFromTreeByDepth(root, 0, arrOfTree);

  for (let i = 0; i < arrOfTree.length; i++) {
    if (!isPalindrome(arrOfTree[i])) {
      return false;
    }
  }
  return true;
};

function getValueFromTreeByDepth(curTree, depth, result) {
  if (!result[depth]) {
    result[depth] = [];
  }
  result[depth].push(curTree ? curTree.val : null);
  if (curTree) {
    getValueFromTreeByDepth(curTree.left, depth + 1, result);
    getValueFromTreeByDepth(curTree.right, depth + 1, result);
  }
}

function isPalindrome(target) {
  let startIndex = 0;
  let endIndex = target.length - 1;
  let answer = true;
  while (startIndex <= endIndex) {
    if (target[startIndex++] != target[endIndex--]) {
      answer = false;
      break;
    }
  }
  return answer;
}
