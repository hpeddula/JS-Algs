//LCS Code
//To Retrieve the characters start from the last, check it with top,left and diagnoal values
//if any one of those three are greater than current take the max path
// if all values are same and less than current element take the diagonal way and add the character ,add it only when moving diagonally
// if all the values are same and also same as the diagonal value then take left or top
const LCS = (s1,s2) => {
    let table =  Array(s1.length+1).fill().map(()=>Array(s1.length+1).fill(0))
    for(let i =0;i<s1.length;i++) {
        for (let j = 0; j < s2.length; j++) {
            if( i === 0 || j ===0) {
                table[i][j] = 0;
            }
            if(s1[i] === s2[j]) {
                table[i][j] = 1 + table[i-1][j-1]
            }else{
                table[i][j] = Math.max(table[i-1][j],table[i][j-1])
            }
            
        }
    }
    return table[s1.length][s1.length]
}

//For extracting the characters implement the same logic , and instead of adding 1 append the character at the index during the iteration
// this would eventualy give us the LRS
const LRS = (s1,s2) => {
    let table =  Array(s1.length+1).fill().map(()=>Array(s1.length+1).fill(0))
    for(let i =0;i<s1.length;i++) {
        for (let j = 0; j < s2.length; j++) {
            if( i === 0 || j ===0) {
                table[i][j] = 0;
            }
            if(s1[i] === s2[j] && i !==j) {
                table[i][j] = 1 + table[i-1][j-1]
            }else{
                table[i][j] = Math.max(table[i-1][j],table[i][j-1])
            }
            
        }
    }
    return table[s1.length][s1.length]
}