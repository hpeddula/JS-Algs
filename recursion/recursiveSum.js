const iterativeSum = (num) => {
    let sum = 0;
    for (let index = 1; index <=num; index++) {
        sum += index
    }
    return sum
}

console.log(iterativeSum(3))

const recursiveSum = (num) => {
    if( num === 0) return 0;
    if(num ===1) return 1;
    // return recursiveSum(num-1) + recursiveSum(num-2)
    return num + recursiveSum(num -1)
}

console.log(recursiveSum(3))