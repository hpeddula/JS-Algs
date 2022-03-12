/**
 * Definition for a binary tree node.
 function TreeNode(val, left, right) {
     this.val = (val===undefined ? 0 : val)
     this.left = (left===undefined ? null : left)
     this.right = (right===undefined ? null : right)
 }
 */
/**
 * @param {TreeNode} root
 * @param {number} val
 * @return {TreeNode}
 */
const isLeaf = (root) => root.left === null && root.right === null
var insertIntoBST = function (root, val) {
    let node = new TreeNode(val)
    if (!root) return node

    let parent = null, current = root;
    while (current !== null) {
        parent = current;
        if (current.val <= val) {
            current = current.right
        } else {
            current = current.left
        }
    }
    if (parent.val <= val) {
        parent.right = node
    } else {
        parent.left = node
    }
    return root
}