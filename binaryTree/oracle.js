// const callBack = (val) => console.log('After 2 seconds',val);

// const promise = new Promise((res, rej) => {
//   setTimeout(() => {
//     rej("Hello");
//   }, 2000);
  
// });

// promise.then((val) => callBack(val)).catch((err)=>callBack(err))
// function Person(firstName,lastName) {
//   this.firstName = firstName;
//   this.lastName = lastName;
//   this.getBio= function(){
//     return `${this.firstName} ${this.lastName}`
//   } 
// }
// // Person.prototype.getBio = function(){
// //   return `${this.firstName} ${this.lastName}`
// // }
// const person1 = new Person('Harhsa','Peddula')
// // console.log(person1.firstName,person1.lastName)

// // console.log(person1.getBio())

let arr =[{name:'P',address:[{street:'1',city:'Hyd'}]}]
let arr2 =[]
// for(let obj of arr) {
//   let newObj = JSON.parse(JSON.stringify(obj))
//   // console.log(newObj)
//   arr2.push(newObj)
// }

// console.log(arr2)

// arr[0].name = 'H'
// console.log(arr2)
// console.log(arr)
// console.log(obj,Array.isArray(obj))
// if(Array.isArray(obj))  cloneArray(obj)
// let newObj = JSON.parse(JSON.stringify(obj))
//  arr2.push(newObj)
// // const [key,value] = Object.entries(obj)
// // arr2.push({[key]:value})
// return arr2

const cloneArray =  (input) => {
  for(let obj of input) {
    for(let obj1 in obj) {
      if(Array.isArray(obj1))  cloneArray(obj1)
      let newObj = JSON.parse(JSON.stringify(obj1))
      arr2.push(newObj)
    }
  }
}
// cloneArray(arr)

// console.log(arr2)

// for (var i = 0; i < 3; i++) {
//   (function(i) {
//     setTimeout(function log() {
//   console.log(i);
//   }, 1000)
// })(i);
// }

// (function name() {
//   console.log('I am an IIFE')
// })()


var x;
	x = 10;
	 
	function test() {
		var x;
		if (x > 20) {
			x = 50;
		}
	 
		console.log(x);
	}
	 
	test();