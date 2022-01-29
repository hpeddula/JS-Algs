class Node {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}

const a = new Node(5);
const b = new Node(11)
const c = new Node(4)
const d = new Node(15)
const e = new Node(3)
const f = new Node(12)



a.right = c
a.left = b

b.right = e
b.left = d

c.right = f

const binaryTreeMinBFS = (root) => {
    if(!root) return
    let min = Infinity;
    const queue = [root]
    while (queue.length > 0) {
        const current = queue.shift();
        if(current.val < min) min = current.val
        if(current.left) queue.push(current.left)
        if(current.right) queue.push(current.right)
    }
    return min
}
const binaryTreeMinRecursive = (root) => {
    if(!root) return Infinity
    const leftValues = binaryTreeMinRecursive(root.left)
    const rightValues = binaryTreeMinRecursive(root.right)
    return Math.min(root.val,leftValues,rightValues)
}
console.log(binaryTreeMinRecursive(a))