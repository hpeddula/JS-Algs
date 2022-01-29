class LinkedListNode {
    constructor(val) {
        this.val =val;
        this.next = null
    }
}

const a = new LinkedListNode(1);
const b = new LinkedListNode(2)
const c = new LinkedListNode(3)
const d = new LinkedListNode(4)
const e = new LinkedListNode(5)

a.next = b;
b.next = c;
c.next = d;
d.next = e;
e.next = null;

const linkedListTraversalBFS = (root) => {
    if(!root.next) return
    const queue = [root];
    while (queue.length > 0) {
        const current = queue.pop();
        console.log(current.val)
        queue.push(current.next)
        if(!current.next) return
    }
}

const linkedListTraversalIterative = (head) => {
    if(!head.next) return
    let current = head;
    while(current) {
        console.log(current.val)
        current = current.next
    }
    // if(!root.next) return
    // const queue = [root];
    // while (queue.length > 0) {
    //     const current = queue.pop();
    //     console.log(current.val)
    //     queue.push(current.next)
    //     if(!current.next) return
    // }
}

const linkedListTraversalRecursive =(head) => {
    if(!head) return;
    console.log(head.val)
    linkedListTraversalRecursive(head.next)
}
console.log(linkedListTraversalRecursive(a))