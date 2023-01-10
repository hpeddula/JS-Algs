// Write a function:

// function solution(A);

// that, given an array A of N integers, returns the smallest positive integer (greater than 0) that does not occur in A.

// For example, given A = [1, 3, 6, 4, 1, 2], the function should return 5.

// Given A = [1, 2, 3], the function should return 4.

// Given A = [−1, −3], the function should return 1.

// Write an efficient algorithm for the following assumptions:

// N is an integer within the range [1..100,000];
// each element of array A is an integer within the range [−1,000,000..1,000,000].

function solution(A) {
    // Implement your solution here
    // const max  = Math.max(...A);
    // if(max < 0) return 1
    // else {
    //     if(A.includes(max)) return (max - 1) +2
    //     else return max - 1
    // }
    // const numMap = new Map()
    // for(let num of A) {
    //     numMap.set(num)
    // }

    for(let i=1;i<=A.length+1;i++) {
        if(!A.includes(i)) {
            return i
        }
    }

    return 1
}



function Person(fName,lName) {
	this.fName= fName,
	this.lName = lName,
}

const p1 = new Person('Harsha','Peddula')

Person.prototype.greet = function () {
	return ` Hello ${this.fName} ${this.lName}`
}

function SuperHero(fName,lName) {
	Person.call(this,fName,lName)
}

Supero.pro.constructor = SuperHero
Supero.constructor = SuperHero

//Call Apply Bind

const person = {
	name:"Harsha Peddula",
	getName:function() {
	console.log(`My name is ${this.name}`)
}
}

const boundFunc  = person.getName.bind({name:'Walter White'})

boundFunc()


function error() {
  return new Promise(function willError(resolve, reject) {
    reject(new Error('It will always fail'));
  });
}

error()
.then(()=>{
})
.catch(e => console.log(e))

const nums = {a:1,b:2,c:3}

const nums2= {...nums}

const {a,...rest} = nums
const aysnc handlePromise = () => {
	try {
	const res = await fetch('//')
	const finalData = await res.json()
}
catch (e){
	
}
}


//Fetch Data

import {useEffect,useState} from 'react';


const App = () => {
	const [gridData,setGridData] = useState([]);

	useEffect(()=> {
	const async fetchData = () => {
	const res = await fetch('/endpoint')
	const finalData = await finalData.json()
	
}
	fetchData()
},[])
	return(
	{gridData.map(({},i)=>(
	<table

))}
)
}


const fact = (n) => {
	if(n ===1 ) return n
else return n* fact(n-1)
}

function currFn(fn) {
	return curried(...args) {
	if(args.length === fn.length) {
	fn.apply(this,...args)
} else {
	return function(...args2){
	return curried(this,)
}
}
}
}

const DynamicForm = () => {
	const [form,setForm] = useState([])
	const handleFieldAddition = () => {
	const formCopy = [...form]
	formCopy.push({
	fName:{name:'',onChange:()=>{},value:''},
	lName:{name:'',onChange:()=>{},value:''},
	id:form.length-1
	
})
}

	const handleDelete = (index) => {
		
	}
	return(<div>
	<button onClick=()>Add Field</button>
	{form.map(({fName,lName,id},index)=>(
	<>
	<InputField fName={fName} lName={lName}/>
	<button onClick={() =>handleDelete(id)}>Delete </button>
	</>
))}
</div>)
}

const arr = [1,2,3]

while(arr.length) {arr.pop()}

const handleChange = (e) => {
	const {value} = e.target;
	if(new RegEx(value).test(/d/))
}