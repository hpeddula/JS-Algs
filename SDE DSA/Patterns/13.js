const incrementTriangle = () => {
    let startValue =1;
    for(let i=1;i<=5;i++) {
    //    const nums =  Array.from({length:i},(_,i=+startValue)=>(+i+1))
    const nums = getIncrementedValues(+startValue,+i + +startValue)
       const lastValue = nums.slice(nums.length -1)
       startValue = +lastValue +1
    //    console.log(startValue,lastValue)
    console.log(nums.join(' '))
    }
}
const getIncrementedValues = (startValue,limit) => {
    // console.log(startValue,limit)
    let res = []
    for(let i = startValue;i<limit;i++) {
        res.push(i)
    }
    // console.log(res)
    return res
}

incrementTriangle()