class BinaryTreeNode {
    constructor(val) {
        this.val = val;
        this.right = null;
        this.left = null;
    }
}

const a = new BinaryTreeNode('a');
const b = new BinaryTreeNode('b')
const c = new BinaryTreeNode('c')
const d = new BinaryTreeNode('d')
const e = new BinaryTreeNode('e')
const f = new BinaryTreeNode('f')



a.right = c
a.left = b

b.right = e
b.left = d

c.right = f
const BFS = (root) => {
    if(!root) return
    const queue = [root];
    while(queue.length) {
        const current = queue.shift();
        console.log(current.val)
        if(current.left) queue.push(current.left)
        if(current.right) queue.push(current.right)
    }
}

// console.log(BFS(a))

const DFS = (root) => {
    if(!root) return
    const stack = [root]
    while(stack.length) {
        const current = stack.pop();
        if(current.right) stack.push(current.right)
        if(current.left) stack.push(current.left)
    }
}

const a1 = new BinaryTreeNode('10');
const b1 = new BinaryTreeNode('8')
const c1 = new BinaryTreeNode('2')
const d1 = new BinaryTreeNode('3')
const e1 = new BinaryTreeNode('5')
const f1 = new BinaryTreeNode('6')
a1.right = c1
a1.left = b1

b1.right = e1
b1.left = d1

c1.left = f1

//PreOrder for this tree is Root Left Right DFS == Preoder
//10 8 3 5 2 6
const preOrder = (root) => {
    if(!root) return
    const stack = [root];
    // let ans =[root.val]
    while (stack.length) {
        const current = stack.pop()
        // ans.push(current.val)
        console.log(current.val)
        if(current.right) {
            stack.push(current.right)
            // ans.push(current.right.val)
        }
        if(current.left) {
            stack.push(current.left)
            // ans.push(current.left.val)
        } 
    }
    // console.log(ans)
}

const preOrderRecursive = (node) => {
    if(node === null) return
     node.val ? console.log(node.val) : console.log('')
     preOrderRecursive(node.left)
     preOrderRecursive(node.right)
}
// console.log(preOrderRecursive(a1))
console.log(preOrder(a1))


//InOrder is Left Root Right
//current tree 10 
//             / \
//            8   2
//           / \  /   \
//          3  5  NULL 6
//
//
//
//
//
//in order 3 8 5 10 6 2
const inOrderA = new BinaryTreeNode(1)
const inOrderB = new BinaryTreeNode(2)
const inOrderC = new BinaryTreeNode(3)
const inOrderD = new BinaryTreeNode(4)
const inOrderE = new BinaryTreeNode(5)
inOrderA.left = inOrderB
inOrderA.right = inOrderC
inOrderB.left = inOrderD
inOrderB.right = inOrderE
const inOrder  = (root) => {
    if(!root) return
    let current = root
    const stack = [current] 
    while(stack.length || current !== null) {
       while(current !==null) {
        stack.push(current)
        current = current.left
       }
       current = stack.pop()
       console.log(current.val)
       current = current.right
    }
    // while(current !==null) {
    //     stack.push(current)
    //     current = current.left
    // }
    // let popppedNode = null
    // while(stack.length) {
    //     popppedNode= stack.pop()
    //     console.log(popppedNode.val)
    //     current = popppedNode.right
    //     while(current !==null) {
    //         stack.push(current)
    //         current = current.left
    //     }
    // }
}

// console.log(inOrder(inOrderA))


const inOrderRecursive = (root) => {
    if(root === null) return

    inOrderRecursive(root.left)
    console.log(root.val)
    inOrderRecursive(root.right)
}
// console.log(inOrderRecursive(inOrderA))
const postOrderA = new BinaryTreeNode(1)
const postOrderB = new BinaryTreeNode(2)
const postOrderC = new BinaryTreeNode(3)
const postOrderD = new BinaryTreeNode(4)
const postOrderE = new BinaryTreeNode(5)
const postOrderF = new BinaryTreeNode(6)
const postOrderG = new BinaryTreeNode(7)


postOrderA.left = postOrderB
postOrderA.right = postOrderC
postOrderB.left = postOrderD
postOrderB.right = postOrderE
postOrderC.left = postOrderF
postOrderC.right = postOrderG

//Post Order Left Right Root

const postOrder = (root) => {
    if(!root) return
    const s1= [root]
    const s2 = []
    while(s1.length) {
        const current = s1.pop()
        s2.push(current.val)
        if(current.left) s1.push(current.left)
        if(current.right) s1.push(current.right)
    }
    while(s2.length) {
        console.log(s2.pop())
    }
}

const postOrderRecursive = (root) => {
    if(root === null) return

    postOrderRecursive(root.left)
    postOrderRecursive(root.right)
    console.log(root.val)
}

// console.log(postOrder(inOrderA))

const maxDepth = (root) => {    
    if(!root) return;
    let map = {}
    const stack = [[root,0]]
    while(stack.length) {
        const [current,depth] = stack.pop()
        if(depth in map) {
            map[depth] += map[depth] +1
        } else {
            map[depth] =1
        }
        if(current.right) stack.push([current.right,depth +1])
        if(current.left) stack.push([current.left,depth +1])
    }
    console.log(Object.keys(map).length)    
}
const maxDepthRecursive = (node) => {
    if(node === null) return 0
    let lh = maxDepthRecursive(node.left)
    let rh = maxDepthRecursive(node.right)
    return 1 + Math.max(lh,rh)
}
// console.log(maxDepth(inOrderA))
const balanceA = new BinaryTreeNode(3)
const balanceB = new BinaryTreeNode(9)
const balanceC = new BinaryTreeNode(20)
const balanceD = new BinaryTreeNode(15)
const balanceE = new BinaryTreeNode(7)
 balanceA.left= balanceB
 balanceA.right = balanceC
 balanceB.left = balanceD
 balanceB.right = balanceE
const isBalanced =(node) =>{
    if(node ===  null) return 0
    let lh = isBalanced(node.left)
    if(lh === -1) return false
    let rh = isBalanced(node.right)
    if(rh === -1) return false
    if(Math.abs(lh - rh)>1) return false
    return true
}

console.log(isBalanced(balanceA))