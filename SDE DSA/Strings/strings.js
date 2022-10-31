const minNum = (s) => {
    // const ans = new Map()
    // ans.set('(',0)
    // ans.set(')',0)
    // for(let v of s.split('')) {
    //         if(v === '(') {
    //             const count = ans.get('(')
    //             ans.set('(',count +1)
    //         } else {
    //             const count = ans.get(')')
    //             ans.set(')',count +1)
    //         }
    // }
    // return Math.abs(ans.get('(') -  ans.get(')'))
    let open = 0, close = 0;
    
    for(let c of s) {
        if(c === '(') open++;
        else if(!open) close++;
        else open--;
    }
    return open + close;
}

console.log(minNum("((("))