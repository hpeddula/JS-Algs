class LinkedListNode {
    constructor(val) {
        this.val = val;
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

const getLinkedListSumIterative = (head) => {
    if(!head) return;
    let sum = 0;
    let current = head;
    while(current) {
        sum += current.val;
        current = current.next
    }
    return sum;
}
const getLinkedListSumRecursive = (head) => {
    if(!head) return 0;
    return head.val + getLinkedListSumRecursive(head.next);
}
console.log(getLinkedListSumRecursive(a))