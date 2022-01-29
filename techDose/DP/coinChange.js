//Unbounded Knapsack where the items can be included without any limit

//Tabulation
const coinChange = (targetSum, coins) => {
    let table = Array(coins.length + 1).fill().map(() => Array(targetSum + 1).fill(0))
    for (let i = 1; i <= targetSum; i++) {
        table[0][i] = Infinity;
    }
    for (let i = 1; i <= coins.length; i++) {
        for (let j = 1; j <= targetSum; j++) {
          if(coins[i-1]>j) {
            table[i][j] = table[i-1][j]
          } else {
            table[i][j] = Math.min(1 + table[i][j - coins[i-1]],table[i-1][j])
          }
        }
    }
    console.log(table)
    return table[coins.length][targetSum] === Infinity ? -1 : table[coins.length][targetSum]
}

console.log(coinChange(6, [1, 2, 5]))
//Recursive
const coinChangeRecursive = (targetSum, coins, index) => {
    if (index < 0) return Infinity;
    if (targetSum === 0) return 0;
    return Math.min((1 + coinChangeRecursive(targetSum - coins[index - 1], coins, index - 1)), coinChangeRecursive(targetSum, coins, index - 1))
}
// console.log(coinChangeRecursive(11,[1,2,5],3))


const coinChangeRecursiveIncrement = (targetSum, coins, index) => {
    // if(index > coins.length) return Infinity;
    if (targetSum === 0) return 0;
    if (targetSum > coins[index]) return coinChangeRecursiveIncrement(targetSum, coins, index + 1)
    return 1 + coinChangeRecursiveIncrement((targetSum - coins[index]), coins, index)
}
// console.log(coinChangeRecursiveIncrement(11,[1,2,5],0))