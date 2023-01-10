import {add} from './att.js';
console.log(add(5,5))
// let mYName ={
//     firstName:'Harsha',
//     lastName:'Peddula'
// }

// const printName = (state,city) => {
//     console.log(this)
//     console.log(`${this.firstName} ${this.lastName} ${state} ${city}`)
// }

// let printMyName = printName.bind(mYName)

// printMyName()


// Function.prototype.myBind = (args) => {
//     let myThis = this;
//     return function(...args2) {
//         myThis.apply(...args,[...args.slice(1),...args2])
//     }
// }

// let printMyName2 = printName.myBind('Tel')


function curry (func) {
    return function curried(...args) {
        if(args.length >= func.length) {
            return func.apply(this,args)
        } else {
            return function(...args2) {
                return curried.apply(this,args.concat(args2))
            }
        }
    }
}

const sum = (a,b,c) => {
    return a+b+c
}

const curriedSum = curry(sum);
// console.log(curriedSum(2)(5)(1))

//Prototypal Inheritance Code Evolution

function Person(fName,lName) {
    this.firstName = fName;
    this.lastName = lName;
}

Person.prototype.sayMyName = function () {
    console.log(`My name is ${this.firstName} ${this.lastName}`)
}
const p1 = new Person('Harsha','Peddula')
// p1.sayMyName()

function SuperHero(fName,lName) {
    Person.call(this,fName,lName)
}
SuperHero.prototype = Object.create(Person.prototype)
SuperHero.prototype.constructor = SuperHero
SuperHero.prototype.cook = function() {
    console.log(`${this.firstName} ${this.lastName} is cooking meth`)
}
const s1 = new SuperHero('Walter','White')

s1.sayMyName()
s1.cook()


function Promise(executor) {
    let onResolve;
    let onReject;
    let isCalled;
    let isFullFilled= false;
    let isRejected= false;
    let error;
    let value;

    function resolve(val) {
        value = val;
        isFullFilled = true
        if(typeof onResolve === 'function' && !isCalled) {
            onResolve(val)
            isCalled= true        
        }
    }
    function reject(err) {
        error = err;
        isRejected = true
        if(typeof onReject === 'function' && !isCalled) {
            onReject(err)
            isCalled= true        
        }
    }
    this.then = function (thenHandler) {
        onResolve = thenHandler;
        if(isFullFilled && !isCalled) {
            onResolve(value)
            isCalled = true
        }
        return this
    }   
    this.catch = function (catchHandler) {
        onReject = catchHandler;
        if(isRejected && !isCalled) {
            onReject(error)
            isCalled = true
        }
        return this
    }  
    executor(resolve,reject)
}


//fact

const fact = (n)  => {
    if(n===1) return n
    else return n* fact(n-1)
}

// console.log(fact(6))

const curriedFact = curry(fact)
// console.log(fact.length)

function currFn2(fn) {
    return function curried(...args) {
        if(fn.length >= args.length) {
            fn.apply(this,args)
        } else {
            return function(...args3){
                return curried.apply(this,args.concat(args3))
            }
        }
    }
}

const factMemo = (n,memo={}) => {
    if(n in memo) return memo[n]
    else if(n ===1) memo[n] =1
    else memo[n] = n* fact(n-1,memo) 
    return memo[n]
}

console.log(factMemo(6))