// let obj= {}

// let newObj = Object.create(obj)

function Person(firstName,lastName) {
    this.firstName = firstName,
    this.lastName = lastName
}
Person.prototype.getBio = function(address) {
    return `${this.firstName},${this.lastName},${address}`
}

let person  = new Person('Harsha','Peddula')
// console.log(person.getBio('Hyderabad'))


//Object Literal
let person1 = {
    name:'Harsha',
    age:'26',
    getBio: function(address) {
        console.log(`${this.name},${this.age},${address}`)
    }
}

// person1.getBio('Begumpet')


//Call Apply Bind
let person2= {
    name:'Saul',
    age:55,
}
let getBioCopy = person1.getBio;
// getBioCopy.call(person2,'Begumpet')
// getBioCopy.apply(person2,['Begumpet'])

// let boundFunc = person1.getBio.bind(person2,'Begumpet')
// boundFunc()


let promiseDemo = new Promise((res,rej) => res('Hello'))



// promiseDemo
// .then(val => Promise.resolve(val))
// .then(v2 => Promise.resolve(v2))
// .then(v3 => console.log(v3))


// add() -> 5
// add(5)  -> 10
// add(10) -> 15

// function makeAddFactory (firstArg) {
//     return function() {
//         return firstArg ? firstArg + 5 :5
//     }
// }
// const add = makeAddFactory()
// const add5 = makeAddFactory(5)
// const add10 = makeAddFactory(10)

// console.log(add(),add5(),add10())

// async function asynDemo() {
//     const res = await promiseDemo;

//     console.log(res)
// }

// asynDemo()


const x1 = [{
    name: 'John',
    doj: '2021-12-31'
}, {
    name: 'Axin',
    doj: '2022-03-05'
}, {
    name: 'Kera',
    doj: '2021-11-25'
}, {
    name: 'Xoi',
    doj: '2022-02-01'
}, {
    name: 'Yui',
    doj: '2022-03-28'
}, {
    name: 'Pai',
    doj: '2022-'
}, {
    name: 'Yunn',
    doj: '2022-04-20'
}];

let users = x1.filter(({name,doj})=> {
    const [y,m,d] = doj.split('-');
    if(+m === 1 || +m === 2 || +m ===3) return name
})

// console.log(users)


let nonDuplicates = [1,2,3,'a','a','f',3,4,2,'d','d'].reduce((acc,val)=> {
    if(!acc.includes(val)) {
        acc.push(val)
    } 
    return acc
},[])

console.log(nonDuplicates)