
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

const binaryTreeBFS = (root) => {
    if(!root) return
    const queue = [root]
    while (queue.length > 0) {
        const current = queue.shift();
        console.log('Current',current.val)
        if(current.left) queue.push(current.left)
        if(current.right) queue.push(current.right)
    }
}

console.log(binaryTreeBFS(a))