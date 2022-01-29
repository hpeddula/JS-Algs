const canSum = (targetSum,numbers) => {
    if(targetSum ===0) return true;
    if(targetSum < 0) return false;
    for(let num of numbers) {
        const rem = targetSum - num;
        if(canSum(rem,numbers) === true ) {
            return true
        }
    }
    return false
}
const returnValue = canSum(300,[7,14])
console.log(returnValue)
// Time Complexity is O(n ^m) Space Complexity is O(m) m -> height of the tree, n -> is the number of branches

const canSumMemoize = (targetSum,numbers,memo={}) => {
    if(targetSum in memo) return memo[targetSum]
    if(targetSum === 0) return true
    if(targetSum < 0) return false
    for(let num of numbers) {
        const rem = targetSum - num;
        if(canSumMemoize(rem,numbers,memo) === true ) {
            memo[targetSum] = true
            return memo[targetSum]
        }
    }
    memo[targetSum] = false
    return memo[targetSum]
}
// Time Complexity is O(m * n) Space Complexity is O(m) m -> height of the tree, n -> is the number of branches
const returnValue = canSumMemoize(300,[7,14])
console.log(returnValue)