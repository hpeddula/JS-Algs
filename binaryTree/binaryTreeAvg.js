class Node {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}

const a = new Node(4);
const b = new Node(7)
const c = new Node(9)
const d = new Node(10)
const e = new Node(2)
const f = new Node(6)
const g = new Node(6)
const h = new Node(2)



a.right = c
a.left = b

b.right = e
b.left = d

c.right = f
e.right = g
g.left = h

const bfsAvgValue = (root) => {
    let avgValues = {}
    if(!root) return
    const queue = [[root,0]]
    while (queue.length) {
        const [current,depth] = queue.shift();
        if(depth in avgValues) {
            const {sum,count} = avgValues[depth];
            avgValues[depth]={sum:sum+current.val,count:count +1}
        } else {
            avgValues[depth]={sum:current.val,count:1}
        }
        console.log('Current',current.val)
        if(current.left) queue.push([current.left,depth+1])
        if(current.right) queue.push([current.right,depth+1])
    }
    console.log(avgValues)
    let res = []
    for(let key in avgValues) {
        const {sum,count} = avgValues[key];
        res.push(sum/count)
    }    
    // const data =Object.values(avgValues).map(val=>{
    //     const {sum,count} = val
    //     return sum/count
    // })
    console.log(res)
}
bfsAvgValue(a)