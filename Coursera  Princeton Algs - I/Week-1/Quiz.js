class QuickUnion {
    constructor(n) {
        this.id = []
        if (n <= 0) {
            throw new Error('Invalid size');
        }
       this.id = Array.from({length:n},(_,i)=>(i))
    }
      root(i) {
        while (i != id[i]) i = id[i];
        return i;
    }

      connected( p,  q) {
        return root(p) == root(q);
    }

     union( p,  q) {
         i = root(p);
         j = root(q);
        id[i] = j;
    }
      find(p) {
        let elements = Array(this.id.length);
         maxValue  =0;
         pRoot = root(p);
        for ( i = 0; i < id.length ; i++) {
            if(id[i] == pRoot) {
                elements[i] = id[i];
            }
        }
        for ( i = 0; i < elements.length; i++) {
            if(elements[i] > maxValue) {
                maxValue = elements[i];
            }
        }
        return maxValue;
    }
}

//Successor with delete. Given a set of nn integers  S = \{ 0, 1, ... , n-1 \}S={0,1,...,n−1} and a sequence of requests of the following form:

// Remove xx from SS

// Find the successor of xx: the smallest yy in SS such that y \ge xy≥x.

// design a data type so that all operations (except construction)  take logarithmic time or better in the worst case.

class Successor {
    constructor(n) {
        this.data = new Set(Array.from({length:n},(_,i)=>(i)))
    }
    delete (val) {
        this.data.delete(val);
        return this.data
    }
    findSuccesor(x) {
        const successor = [...this.data.values()].find(v => v > x);
        return successor;
    }
}

const test = new Successor(5)
console.log(test.delete(4))
console.log(test.findSuccesor(2))



