function MyPromise1(executor) {
    let isFullFilled;
    let isRejected;
    let onResolve;
    let onReject;
    let value;
    let error;
    let isCalled = false;


    function resolve (val) {
        value = val;
        isFullFilled = true
        if(typeof onResolve === 'function' && !isCalled) {
            onResolve(val)
            isCalled = true;
        }
    }
    function reject (err) {
        error = err;
        isRejected = true
        if(typeof onReject === 'function' && !isCalled) {
            onReject(err)
            isCalled = true;
        }
    }
    this.catch = function(catchHandler) {
        onReject = catchHandler;
        if(!isCalled && isRejected){
            isCalled = true;
            onReject(error)
        }
        return this
    }

    this.then = function(thenHandler) {
        onResolve = thenHandler;
        if(!isCalled && isFullFilled){
            isCalled = true;
            onResolve(value)
        }
        return this
    }

    executor(resolve,reject)
}

Function.prototype.myBind = function(context,...args) {
    let fn = this;
    return function(...args2) {
        fn.apply(context,[...args,...args2])
    }
}



const arr = [1,1,2,3,5,4,5,6,7,8,9]
// let resMap = new Map();
// for (let index = 0; index < arr.length; index++) {
//     const diff = 10 - arr[index];
//     let i = arr.indexOf(diff) 
//     if(i!== -1) {
//         resMap.set(`${index}`,[arr[index],arr[i]])
//     }
    
// }

const twoSum = (arr,target) => {
    let res = []
    let pointerOne = 0;
    let pointerTwo = arr.length -1;
    while(pointerOne < pointerTwo) {
        let sum  = arr[pointerOne] + arr[pointerTwo]
        if(sum === target) {
            res.push([ arr[pointerOne],arr[pointerTwo]])
            pointerOne +=1
            pointerTwo -=1
        }
        else if (sum < target) pointerOne +=1
        else pointerTwo -=1
    }
    console.log(res)
    return res
}

twoSum(arr,10)


//Majority