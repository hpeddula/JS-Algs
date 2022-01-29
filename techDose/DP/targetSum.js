//Knap Sack Recursive find a sum value which is equal to 
//break down the problem of dividing an array into two sets where the difference between 2 sets is equal to the target
// S1-S2 = DIFF
// therefore S1 +S2= S
// S2 = SUM - S1
// S1- S2 = target
// S1 -(SUM - S1) = DIFF
// 2S1 -SUM = DIFF
//S1= SUM+DIFF /2
// using the same code where we found the subset equal  to a particular sum, the only thing changes is the arguments to the function
const targetSumRecursive =(targetSum,index,numbers) => {
    if(targetSum ===0) return 1;
    if(index === 0) return 0;
    if(numbers[index -1] > targetSum) return targetSumRecursive(targetSum,index -1,numbers)
    else return  targetSumRecursive(targetSum,index -1,numbers) + targetSumRecursive((targetSum - numbers[index-1]),index -1,numbers)
}

console.log(targetSumRecursive(1,1,[1]))