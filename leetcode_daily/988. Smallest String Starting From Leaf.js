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
 * @return {string}
 */
var smallestFromLeaf = function (root) {
  const temp = traversal(root);
  // console.log(temp)
  const res =
    temp.length > 1
      ? temp[0].localeCompare(temp[1]) > 0
        ? temp[1]
        : temp[0]
      : temp[0];
  return res;
};
function traversal(node) {
  if (!node) return;
  const nodeLeft = traversal(node.left);
  const nodeRight = traversal(node.right);
  if (nodeLeft && nodeRight) {
    console.log(nodeLeft, nodeRight);
    let maxLeft = nodeLeft[0].concat(String.fromCharCode(97 + node.val));
    let maxRight = nodeRight[0].concat(String.fromCharCode(97 + node.val));
    for (let i = 1; i < nodeLeft.length; i++) {
      maxLeft =
        nodeLeft[i]
          .concat(String.fromCharCode(97 + node.val))
          .localeCompare(maxLeft) > 0
          ? maxLeft
          : nodeLeft[i].concat(String.fromCharCode(97 + node.val));
    }
    for (let i = 1; i < nodeRight.length; i++) {
      maxRight =
        nodeRight[i]
          .concat(String.fromCharCode(97 + node.val))
          .localeCompare(maxRight) > 0
          ? maxRight
          : nodeRight[i].concat(String.fromCharCode(97 + node.val));
    }
    console.log(maxLeft, maxRight);
    node.val = [maxLeft, maxRight];
  } else if (nodeLeft) {
    let maxLeft = nodeLeft[0].concat(String.fromCharCode(97 + node.val));
    for (let i = 1; i < nodeLeft.length; i++) {
      maxLeft =
        nodeLeft[i]
          .concat(String.fromCharCode(97 + node.val))
          .localeCompare(maxLeft) > 0
          ? maxLeft
          : nodeLeft[i].concat(String.fromCharCode(97 + node.val));
    }
    node.val = [maxLeft];
  } else if (nodeRight) {
    let maxRight = nodeRight[0].concat(String.fromCharCode(97 + node.val));
    for (let i = 1; i < nodeRight.length; i++) {
      maxRight =
        nodeRight[i]
          .concat(String.fromCharCode(97 + node.val))
          .localeCompare(maxRight) > 0
          ? maxRight
          : nodeRight[i].concat(String.fromCharCode(97 + node.val));
    }
    node.val = [maxRight];
  } else {
    node.val = [String.fromCharCode(97 + node.val)];
  }
  return node.val;
}
