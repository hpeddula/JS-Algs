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

const getLinkedListValueIterative = (head) => {
    if (!head) return;
    let values = [];
    let current = head;
    while (current) {
        values = [...values, current.val]
        current = current.next
    }
    return values
}
const getLinkedListValueRecursive = (head,values =[]) => {
    if (!head) return;
    values.push(head.val)
    getLinkedListValueRecursive(head.next,values)
    return values
}
const fillValues = (head,values) => {
    return values.push(head.val)
}
console.log(getLinkedListValueRecursive(a))