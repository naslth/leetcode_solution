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
var evaluateTree = function(root) {
    return travelsal(root);
};
function travelsal(node) {
    if(node.val == 0) return false;
    if(node.val == 1) return true;
    let valLeft = travelsal(node.left)
    let valRight= travelsal(node.right)
    if(node.val == 2) return valLeft || valRight
    return valLeft && valRight;
}