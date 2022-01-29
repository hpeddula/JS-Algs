class Node {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}

const a = new Node('a');
const b = new Node('b')
const c = new Node('c')
const d = new Node('d')
const e = new Node('e')
const f = new Node('f')



a.right = c
a.left = b

b.right = e
b.left = d

c.right = f

const binaryTreeIncludesDFS= (root,target) => {
    if(!root) return
    const stack = [root];
    while(stack.length > 0) {
        const current = stack.pop();
        if(current.val === target) return 'target found'
        if(current.right) stack.push(current.right)
        if(current.left) stack.push(current.left)
    }
    return 'target not found'
}


const binaryTreeIncludesBFS= (root,target) => {
    if(!root) return
    const queue = [root];
    while(queue.length > 0) {
        const current = queue.shift();
        if(current.val === target) return 'target found'
        if(current.right) queue.push(current.right)
        if(current.left) queue.push(current.left)
    }
    return 'target not found'
}

const binaryTreeIncludesRecursive= (root,target) => {
    if(!root) return false
    if(root.val === target) return true
    const res = binaryTreeIncludesRecursive(root.left,target) ||  binaryTreeIncludesRecursive(root.right,target)
    return res
}

console.log(binaryTreeIncludesRecursive(a,'b'))