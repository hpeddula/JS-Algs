class QuickUnion {
    constructor(n) {
        this.id = Array.from({length:n},(_,i)=>(i))
    }
    root(i) {
        while(i != this.id[i]) i = this.id[i]
    }
    union(p,q) {
        let i = this.root(p);
        let j = this.root[q];
        id[i] = j
    }
    connected(p,q) {
        return this.root(p) === this.root(j)
    }
}