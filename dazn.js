/* let input = "AABBCCDDD"
let output ="ABCD0000"

const removeDups = (input) => {
  let inputArray = input.split('').reduce((acc,val)=> {
    if(!acc.includes(val)) acc.push(val)
    return acc
  },[])
  return inputArray.join('').padEnd(input.length,0)
}

console.log('ans',removeDups(input)) */

/* function asyncTask() { 
return functionA()
.then((valueA) => functionB(valueA))
.then((valueB) => functionC(valueB))
.then((valueC) => functionD(valueC))
.catch((err) => logger.error(err)) 
} */

const asyncTask  = async() => {
    try {
        const resA = await functionA()
      const resB= await functionA()
      const resC = await functionA()
      }
      catch(e) {
          logger.error(err)
      }
    }