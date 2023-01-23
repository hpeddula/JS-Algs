class BinaryTreeNode {
    value;
    left;
    right;
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}
class BinarySearchTree {
    root;
    constructor() {
        this.root = null;
    }
    isEmpty() {
        return this.root === null;
    }
    insert(val) {
        const newNode = new BinaryTreeNode(val);
        if (this.isEmpty()) {
            this.root = newNode;
        }
        else {
            this.insertNewNode(this.root, newNode);
        }
    }
    insertNewNode(root, newNode) {
        const rootValue = root?.value;
            if (newNode.value < rootValue) {
                if (root.left === null) {
                    root.left = newNode;
                }
                else {
                    this.insertNewNode(root.left, newNode);
                }
            }
            else {
                if (root.right === null) {
                    root.right = newNode;
                }
                else {
                    this.insertNewNode(root.right, newNode);
                }
            }
    }
    preOrder(root) {
        if (root) {
            console.log(root.value);
            this.preOrder(root.left);
            this.preOrder(root.right);
        }
    }
}

const bst = new BinarySearchTree();
bst.insert(10)
bst.insert(5)
bst.insert(7)

bst.preOrder(bst.root)
// export { BinarySearchTree };
