//[   0, 1, 2, 3, 4,5, 6, 7, 8, 9]
class WeightedQuickUnion {
    constructor(n) {
        this.id = Array.from({length:n},(_,i)=>(i));
        this.size = Array(n).fill(1);
    }
    root(i) {
        while(i !== this.id[i]) i = this.id[i];
        return i
    }
    union(p,q){
        let i = root(p)
        let j = root(q)
        if(i === j) return;
        if(this.size[i] <= this.size[j]) this.size[j] += this.size[i]
        else this.size[i] += this.size[j]
    }
    connected(p,q) {
        return this.root(p) === this.root(q)
    }
}

class WeightedQuickUnionPC {
    constructor(n) {
        this.id = Array.from({length:n},(_,i)=>(i));
        this.size = Array(n).fill(1);
    }
    root(i) {
        while(i !== this.id[i]) {
            this.id[i] = this.id[this.id[i]]// make each child to point to it's grandparent
            i = this.id[i];
        }
        return i
    }
    union(p,q){
        let i = root(p)
        let j = root(q)
        if(i === j) return;
        if(this.size[i] <= this.size[j]) this.size[j] += this.size[i]
        else this.size[i] += this.size[j]
    }
    connected(p,q) {
        return this.root(p) === this.root(q)
    }
}