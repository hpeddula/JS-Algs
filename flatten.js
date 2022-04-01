const flatten = (input) => {
  return input.reduce(
    (acc, val, i) => acc.concat(Array.isArray(val) ? flatten(val) : val),
    []
  );
};

let flatArray = arr.reduce((acc, curVal) => {
  return acc.concat(curVal)
}, []);


function MyPromise(executor) {
  let onResolve;
  let onReject;
  let isFullFilled;
  let isRejected;
  let value;
  let error;
  let isCalled =false;

  function resolve (val) {
    isFullFilled= true
    value = val;
    if(typeof onResolve === 'function' && !isCalled) {
      isCalled = true;
      onResolve(val)
    }
  }

  function reject (err) {
    isRejected= true
    error = err;
    if(typeof onReject === 'function' && !isCalled) {
      isCalled = true;
      onReject(err)
    }
  }

  this.then  = function(thenHandler){
    onResolve = thenHandler;
    if(isFullFilled && !isCalled) {
      onResolve(value)
      isCalled = true
    }
    return this
  }
  this.catch  = function(catchHandler){
    onReject = catchHandler;
    if(isRejected && !isCalled) {
      onReject(error)
      isCalled = true
    }
    return this
  }
  executor(resolve,reject)
}

MyPromise.resolve = (val) => {
  return new MyPromise((resolve,reject)=> {
    resolve(val)
  })
}


//Bind PolyFill

Function.prototype.myBind = function(context,...args) {
  let fn = this;
  return function(...args2) {
    fn.apply(context,[...args,args2])
  }
}