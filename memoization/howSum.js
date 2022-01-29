const howSum = (targetSum,numbers) => {
    if(targetSum ===0) return [];
    if(targetSum < 0) return null;
    for(let num of numbers) {
        const rem = targetSum - num;
        const results =howSum(rem,numbers)
        if(results) {
            return [...results,num]
        }
    }
    return null
}
// console.log(howSum(7,[2,3]))
// Time Complexity m => target sum and n => length of the array O(n^m * m) additional m is for creating a copy of the array
// Space Complexity is O(m)
const howSumMemoize = (targetSum,numbers,memo={}) => {
    if(targetSum in memo) return memo[targetSum]
    if(targetSum ===0) return [];
    if(targetSum < 0) return null;
    for(let num of numbers) {
        const rem = targetSum - num;
        const results =howSumMemoize(rem,numbers,memo)
        if(results) {
            memo[targetSum] = [...results,num]
            return memo[targetSum]
        }
    }
    memo[targetSum] = null
    return  memo[targetSum]
}
// Time Complexity m => target sum and n => length of the array O(n*m * m) => O(n*m^2)additional m is for creating a copy of the array
// Space Complexity is O(m*m) => O(m^2) each key in the memo Object can be of length m and again the key might be an array of length m because the result array length can go
// up to the size of m 
console.log(howSumMemoize(6,[3,1,2,3]))