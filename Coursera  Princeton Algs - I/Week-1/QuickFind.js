class QuickFind {
    constructor(n) {
        if(n <=0) {
            throw new Error('Invalid Length')
        }
        this.id = Array.from({length:n},(_,i)=>(i))
    }
    connected(p,q) {
        this.id[p] === this.id[q]
    }
    union(p,q){
        let pid = id[p];
        let qid = id[q];
        for(let val in id) {
            if(id[val] === pid) id[val] = qid
        }
    }
}