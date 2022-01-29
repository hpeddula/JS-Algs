class Node {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}

const a = new Node(5);
const b = new Node(11)
const c = new Node(3)
const d = new Node(4)
const e = new Node(2)
const f = new Node(1)



a.right = c
a.left = b

b.right = e
b.left = d

c.right = f

const maxPath = (root) => {
    if(!root) return 0;
    if(root.left === null && root.right === null) return root.val;
    return root.val + Math.max(maxPath(root.right),maxPath(root.left))
}

console.log(maxPath(a))