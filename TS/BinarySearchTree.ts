interface IBinaryTreeNode {
    value:number;
    left:IBinaryTreeNode | null;
    right:IBinaryTreeNode | null;
}

class BinaryTreeNode implements IBinaryTreeNode {
    left: IBinaryTreeNode | null;
    right: IBinaryTreeNode | null;
    constructor(public value:number) {
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree {
    root: null|IBinaryTreeNode;
    constructor() {
        this.root = null
    }

    isEmpty():boolean {
        return this.root === null
    }

    insert(val:number):void {
        const newNode = new BinaryTreeNode(val)
        if(this.isEmpty()) {
            this.root = newNode
        } else {
            this.insertNewNode(this.root,newNode)
        }
    }


    search(root:IBinaryTreeNode|null,value:number) {
        if(!root) return false
        else {
            if(root.value === value) {
                return true
            } else if(root.value < value) {
                this.search(root.left,value)
            } else {
                this.search(root.right,value)
            }
        }
    }

    insertNewNode(root:IBinaryTreeNode|null,newNode:IBinaryTreeNode) {
        const rootValue = root?.value || 0
            if(newNode.value < rootValue) {
                if(root?.left === null) {
                    root.left = newNode
                } else {
                    this.insertNewNode(root?.left || null, newNode)
                }
            } else {
                if(root?.right === null) {
                    root.right = newNode
                } else {
                    this.insertNewNode(root?.right || null, newNode)
                }
            }
    }
    //PreOrder root, left,right
    preOrder(root:IBinaryTreeNode|null) {
        if(root) {
            console.log(root.value)
            this.preOrder(root.left)
            this.preOrder(root.right)
        }
    }
    //Inorder left root right
    inOrder(root:IBinaryTreeNode|null) {
        if(root) {
            this.inOrder(root.left)
            console.log(root.value)
            this.inOrder(root.right)
        }
    }

    //PostOrder Left Right Root
    postOrder(root:IBinaryTreeNode|null) {
        if(root) {
            this.postOrder(root.left)
            this.postOrder(root.right)
            console.log(root.value)
        }
    }

    min(root:IBinaryTreeNode|null):number{
        if(!root?.left) {
            return root?.value ||0
        } else {
          return  this.min(root.left)
        }
    }

    
    max(root:IBinaryTreeNode|null):number{
        if(!root?.right) {
            return root?.value || 0
        } else {
           return this.max(root.right)
        }
    }
}

export {BinarySearchTree}