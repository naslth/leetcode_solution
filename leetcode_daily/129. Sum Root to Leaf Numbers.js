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
 * @return {number}
 */
var sumNumbers = function(root) {
    return sum(root, 0);
};

function sum(root, currSum) {
    if (root == null) return 0;
    currSum = currSum * 10 + root.val;
    if (root.left == null && root.right == null) return currSum;
    return sum(root.left, currSum) + sum(root.right, currSum);
  }