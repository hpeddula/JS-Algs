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


const getNodeValueIterative =(head,index) => {
    let count = 0;
    let current = head
    while (current) {
        if(count === index) return current.val;
        current = current.next;
        count +=1;
    }
    return null
}

const getNodeValueRecursive =(head,index,pos=0) => {
    if(!head) return false;
    if(pos === index) return head.val;
    return getNodeValueRecursive(head.next,index,pos +1)
}
const getNodeValueRecursiveWithIndex =(head,index) => {
    if(!head) return false;
    if(index === 0) return head.val;
    return getNodeValueRecursive(head.next,index-1)
}

console.log(getNodeValueIterative(a,7))