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


const findNodeIterative =(head,target) => {
    if(!head) return false;
    let current = head;
    while(current) {
        console.log(current.val)
        if(current.val  === target) return true
        current = current.next
    }
}


const findNodeRecursive =(head,target) => {
    if(!head) return false;
    if(head.val === target) return true
   return findNodeRecursive(head.next,target)
}

console.log(findNodeRecursive(a,'harsha'))