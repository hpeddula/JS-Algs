const subSetSumTabular = (targetSum,numbers) => {
    let table =  Array(numbers.length+1).fill().map(()=>Array(targetSum+1).fill(0))
    for(let i=0;i<=numbers.length;i++) {
      table[i][0] = 1;
    }
    for(let i =1;i<=numbers.length;i++) {
        for(let j =1;j<=targetSum;j++) {
            console.log(i,j)
            if(numbers[i-1] >j) {
                table[i][j] = table[i-1][j]
            } else if(numbers[i-1] <=j) {
                table[i][j]= table[i-1][j] + table[i-1][j - numbers[i-1]]
            }
        }
    }
    console.log('After',table)
    return table[numbers.length][targetSum]
}


// console.log(subSetSumTabular(3,[1,2,1]))
console.log(subSetSumTabular(6,[3,1,2,3]))
//Knap Sack Recursive
const subSetSumRecursive =(targetSum,index,numbers) => {
    if(targetSum ===0) return 1;
    if(index === 0) return 0;
    if(numbers[index -1] > targetSum) return subSetSumRecursive(targetSum,index -1,numbers)
    else return  subSetSumRecursive(targetSum,index -1,numbers) + subSetSumRecursive((targetSum - numbers[index-1]),index -1,numbers)
}

// console.log(subSetSumRecursive(6,4,[3,1,2,3]))