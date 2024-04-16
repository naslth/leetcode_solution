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
 * @param {number} val
 * @param {number} depth
 * @return {TreeNode}
 */
var addOneRow = function(root, val, depth) {
    if(depth == 1) {
        let newRoot = new TreeNode(val);
        newRoot.left = root;
        return newRoot;
    }
    root = traversal(root,val,depth,1);
    return root;
};

function traversal(node,val,depth,curDepth) {
    if(!node) return;
    if(curDepth == depth -1) {
        let nodeLeft = new TreeNode(val);
        let nodeRight = new TreeNode(val);
        nodeLeft.left = node.left;
        nodeRight.right = node.right;
        node.left = nodeLeft;
        node.right = nodeRight;
        return node;
    }
    traversal(node.left,val,depth,curDepth+1);
    traversal(node.right,val,depth,curDepth+1);
    return node;
}