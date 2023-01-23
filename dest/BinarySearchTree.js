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
        const rootValue = root?.value || 0;
        if (newNode.value < rootValue) {
            if (root?.left === null) {
                root.left = newNode;
            }
            else {
                this.insertNewNode(root?.left || null, newNode);
            }
        }
        else {
            if (root?.right === null) {
                root.right = newNode;
            }
            else {
                this.insertNewNode(root?.right || null, newNode);
            }
        }
    }
    //PreOrder root, left,right
    preOrder(root) {
        if (root) {
            console.log(root.value);
            this.preOrder(root.left);
            this.preOrder(root.right);
        }
    }
    //Inorder left root right
    inOrder(root) {
        if (root) {
            this.inOrder(root.left);
            console.log(root.value);
            this.inOrder(root.right);
        }
    }
    //PostOrder Left Right Root
    postOrder(root) {
        if (root) {
            this.postOrder(root.left);
            this.postOrder(root.right);
            console.log(root.value);
        }
    }
    min(root) {
        if (!root?.left) {
            return root?.value || 0;
        }
        else {
            return this.min(root.left);
        }
    }
    max(root) {
        if (!root?.right) {
            return root?.value || 0;
        }
        else {
            return this.max(root.right);
        }
    }
}
export { BinarySearchTree };
