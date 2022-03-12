/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function (root, p, q) {
    console.log(root.val, p, q)
    if (root.val === p.val || root.val === q.val) {
        return root
    }
    if (!root.left && !root.right) return null;
    let left = null, right = null
    if (root.left) {
        left = lowestCommonAncestor(root.left, p, q)
    }
    if (root.right) {
        right = lowestCommonAncestor(root.right, p, q)
    }
    if (left && right) return root
    return !left ? right : left
}