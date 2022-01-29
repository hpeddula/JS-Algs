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


const reverseLinkListIterative = (head) => {
    let current = head;
    let prev = null;
    while(current) {
        let next = current.next;
        current.next  = prev;
        prev = current
        current = next
    }
    return prev.val
}
const reverseLinkListRecursive = (head,prev = null) => {
   if(!head) return prev.val
   const next = head.next
   return reverseLinkListRecursive(next,head)
}
console.log(reverseLinkListRecursive(a))