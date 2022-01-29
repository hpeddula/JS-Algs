
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

const binaryTreeDFS = (root) => {
    if(!root) return
    const stack = [root];
    while(stack.length > 0) {
        const current = stack.pop();
        console.log('Current',current.val)
        if(current.right) stack.push(current.right)
        if(current.left) stack.push(current.left)
    }
}   


const binaryTreeDFSRecursive = (root) => {
  if(!root) return [];
  console.log(root.val)
  const leftValues = binaryTreeDFSRecursive(root.left)
  const rightValues = binaryTreeDFSRecursive(root.right)
  return [root.val,...leftValues,...rightValues]
}   

console.log(binaryTreeDFSRecursive(a))