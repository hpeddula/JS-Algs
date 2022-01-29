// import {Node} from './binaryNode'
class Node {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}

const a = new Node(3);
const b = new Node(11)
const c = new Node(4)
const d = new Node(4)
const e = new Node(2)
const f = new Node(1)



a.right = c
a.left = b

b.right = e
b.left = d

c.right = f

const binaryTreeSumBFS = (root) => {
    if(!root) return
    let sum = 0;
    const queue = [root]
    while (queue.length > 0) {
        const current = queue.shift();
        sum += current.val
        console.log('Current',current.val)
        if(current.left) queue.push(current.left)
        if(current.right) queue.push(current.right)
    }
    return sum
}

const binaryTreeSumRecursive = (root) => { 
    if(!root) return 0
  
    return root.val +   binaryTreeSumRecursive(root.left)+
    binaryTreeSumRecursive(root.right)
}
console.log(binaryTreeSumRecursive(a))