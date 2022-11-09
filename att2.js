let mYName ={
    firstName:'Harsha',
    lastName:'Peddula'
}

const printName = (state,city) => {
    console.log(this)
    console.log(`${this.firstName} ${this.lastName} ${state} ${city}`)
}

let printMyName = printName.bind(mYName)

printMyName()


Function.prototype.myBind = (args) => {
    let myThis = this;
    return function(...args2) {
        myThis.apply(...args,[...args.slice(1),...args2])
    }
}

let printMyName2 = printName.myBind('Tel')