const bestSum = (targetSum,numbers) => {
    if(targetSum ===0) return [];
    if(targetSum < 0) return null;
    let smallestCombination = null;
    for(let num of numbers) {
        const rem = targetSum - num;
        const results =bestSum(rem,numbers)
        if(results) {
            const combination = [...results,num]
            if(smallestCombination === null || combination.length < smallestCombination.length) {
                smallestCombination= combination
            }
        }
    }
    return smallestCombination
}

// console.log(bestSum(100,[1,2,5,25]))
// m -> is the length of the callTree
//n -> length of the tree
//Time Complexity is O(n^m *m)  additional operation of copying
//Space Complexity is O(m *m ) => O(m^2) because each recursive call has to have it's own smallestCombination array which could be length of m

const bestSumMemoize = (targetSum,numbers,memo={}) => {
    if(targetSum in memo) return memo[targetSum]
    if(targetSum ===0) return [];
    if(targetSum < 0) return null;
    let smallestCombination = null;
    for(let num of numbers) {
        const rem = targetSum - num;
        const results =bestSumMemoize(rem,numbers,memo)
        if(results) {
            const combination = [...results,num]
            if(smallestCombination === null || combination.length < smallestCombination.length) {
                smallestCombination= combination
            }
        }
    }
    memo[targetSum] = smallestCombination
    return memo[targetSum]
}
// Time Complexity m => target sum and n => length of the array O(n*m * m) => O(n*m^2)additional m is for creating a copy of the array
// Space Complexity is O(m*m) => O(m^2) each key in the memo Object can be of length m and again the key might be an array of length m because the result array length can go
// up to the size of m 
console.log(bestSumMemoize(100,[1,2,5,25]))
