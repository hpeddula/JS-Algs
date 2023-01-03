const profile = {
    name: 'peter',
    age: 56,
    kids: [{
        name: 'jill',
        age: 23,
        kids: [{
            name: 'jeter',
            age: 1
        }, {
            name: 'bill',
            age: 2
        }]
    }]
}

// for(key in profile) {
//     if(key === 'age') {
//         totalAge += profile[key]
//     } else  {
//         function getAge(key) {
//             console.log('Inside getAge')
//             for(let k of profile[key]) {
//             for(let key1 in k) {
//                  if(key1 === 'age') {
//                     totalAge += key[key1]
//                  } else {
//                      if(Array.isArray(key1)) {
//                          getAge(key1)
//                      }
//                  }
//             }
//         }
//         }
        
//     }
//     console.log(totalAge)
// }
let totalAge = 0;
function getAge(key) {
            for(let k of profile[key]) {
            for(let key1 in k) {
                 if(key1 === 'age') {
                    totalAge += k[key1]
                 } else {
                     if(Array.isArray(key1)) {
                         getAge(key1)
                     }
                 }
            }
        }
        }
for (let key in profile) {
    if (key === 'age') {
        totalAge += profile[key]
    } else {
        getAge(key) 
    }
} 

console.log('Total Age',totalAge)


//Promise Polyfill

function MyPromise (executor) {
    let onReject;
    let onResolve;
    let isCalled = false;
    let isFullFilled = false;
    let isRejected = false;
    let error;
    let value;
    function resolve(val) {
        isFullFilled = true;
        value = val;
        if(typeof onResolve === 'function' && !isCalled) {
            onResolve(val)
            isCalled = true;
        }
    }
    function reject(err) {
        isRejected = true;
        error = err;
        if(typeof onReject === 'function' && !isCalled) {
            onReject(err)
            isCalled = true;
        }
    }
    this.then = function(thenHandler){
        onResolve = thenHandler;
        if(isFullFilled && !isCalled) {
            onResolve(value);
            isCalled = true
        }
        return this
    }

    this.catch  = function(catchHandler) {
        onReject = catchHandler;
        if(isRejected && !isCalled) {
            onReject(error);
            isCalled = true
        }
        return this
    }

    executor(resolve,reject)
}

function curry(fn) {
    return function curried(...args) {
        if(args.length >= fn.length) {
            return fn.apply(this,args)
        } else {
            return function(...args2) {
                return curried.apply(this,args.concat(args2))
            }
        }
    }
}