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
 * @param {number} target
 * @return {TreeNode}
 */
var removeLeafNodes = function(root, target) {
    return travelsal(root, target)
};
function travelsal(node,target) {
    if(node == null) return null
    node.left = travelsal(node.left,target)
    node.right = travelsal(node.right,target)
    if(node.left == null && node.right == null && node.val == target) {
        return null
    }
    return node
}