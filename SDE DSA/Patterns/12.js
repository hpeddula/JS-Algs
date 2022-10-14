const mirror =() => {
    let res =[];
    let reverseRes = []
    let finalRes = []
    for(let i=1;i<=4;i++){
        const nums = Array.from({length:i},(_,i)=>(i+1))
        res.push(nums.join(''))
    }
    for(let i=1;i<=4;i++){
        const nums = Array.from({length:i},(_,i)=>(i+1)).reverse()
        reverseRes.push(nums.join(''))
    }
    for (let index = 0; index < 4; index++) {
        finalRes.push([...res[index],...reverseRes[index]].flat())
        
    }
    for (let index = 0; index < finalRes.length; index++) {
        const gapLength = 8- finalRes[index].length;
        const val= finalRes[index];
        const firstVal = val.slice(0,index+1).join('');
        const lastVal = val.slice(index+1).join('')
        const paddedString = index === finalRes.length -1 ?`${firstVal}${lastVal}` :`${firstVal.padEnd(gapLength+index+1)}${lastVal}`
        console.log(paddedString,gapLength)
    }
}
mirror()