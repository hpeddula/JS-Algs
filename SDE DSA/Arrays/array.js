const dutchSort= (arr) => {
    let low =0,mid =0, high= arr.length -1;
    while(mid <=  high) {
        if(arr[mid] === 0) {
            let temp = arr[low]
            arr[low] = arr[mid]
            arr[mid] = temp
            mid++
            low++
        } else if(arr[mid] === 1) {
            mid++
        } else if(arr[mid] ===2) {
            let temp = arr[high]
            arr[high] = arr[mid]
            arr[mid] = temp
            high--
        }
    }
    return arr
}

// console.log(dutchSort([0,1,1,0,1,2,1,2,0,0,0,1]))

//Merge Sort

// const merge = (arr,temp,l,m,r) => {
//     // console.log('arr in merge',arr,temp,l,m,r)
//     let i=l,j=m,k=l;
//     while(i <= m-1&& j <=r) {    
//         if(arr[i] <= arr[j]) {
//             temp[k++] = arr[i++]
//         } else {
//             temp[k++] = arr[j++]
//         }
//     }
//     while(i <= m-1) {
//         temp[k++] = arr[i++]
//     }
//     while(j <= r) {
//         temp[k++] = arr[j++]
//     }
//     for(let i = l;i<=r;i++) {
//         arr[i] = temp[i]
//     }
// }
// const mergeSort = (arr,temp,l,r) => {
//     if(l >=r) return
//     if(r > l) {
//         const m = parseInt(arr.length /2)
//         console.log(l,m,r)
//         mergeSort(arr.slice(0,m+1),temp,l,m);
//         mergeSort(arr.sl,temp,m+1,r)
//         merge(arr,temp,l,m,r)
//     }
//     // console.log(arr)
// }
// 
// Merge Sort Implentation (Recursion)
//

function mergeSort (unsortedArray) {
    // No need to sort the array if the array only has one element or empty
    if (unsortedArray.length <= 1) {
      return unsortedArray;
    }
    // In order to divide the array in half, we need to figure out the middle
    const middle = Math.floor(unsortedArray.length / 2);
  
    // This is where we will be dividing the array into left and right
    const left = unsortedArray.slice(0, middle);
    const right = unsortedArray.slice(middle);
  
    // Using recursion to combine the left and right
    return merge(
      mergeSort(left), mergeSort(right)
    );
  }
  
  // Merge the two arrays: left and right
  function merge (left, right) {
    let resultArray = [], leftIndex = 0, rightIndex = 0;
  
    // We will concatenate values into the resultArray in order
    while (leftIndex < left.length && rightIndex < right.length) {
      if (left[leftIndex] < right[rightIndex]) {
        resultArray.push(left[leftIndex]);
        leftIndex++; // move left array cursor
      } else {
        resultArray.push(right[rightIndex]);
              rightIndex++; // move right array cursor
      }
    }
  
    // We need to concat to the resultArray because there will be one element left over after the while loop
    return resultArray
            .concat(left.slice(leftIndex))
            .concat(right.slice(rightIndex));
  }
  
 
// console.log(mergeSort([5,3,2,1,4]))


const dupNumber = (arr) => {
    const ansMap = new Map()
    for(let i =0;i<arr.length;i++) {
        if(ansMap.has(arr[i])) {
            ansMap.set(arr[i],ansMap.get(+arr[i]) +1)
        } else  {
            ansMap.set(arr[i],1)
        }
    }
    let res =[]
    for(let [key,val] of ansMap.entries()) {
        if(val >=2) res.push(key)
    }
    console.log(res)
}

const dupNumLinkedList = (arr) => {
  let slow = arr[0]
  let fast = arr[0]
  do {
    slow = arr[slow]
    fast = arr[arr[fast]]
  } while (slow !== fast);
  fast = arr[0]
  while (slow !== fast) {
    slow = arr[slow]
    fast = arr[fast]
  }
  return slow
}

// console.log(dupNumber([2,5,9,6,9,3,8,9,7,1]))


const mergeTwoArrays  = (n,m) => {
  let i =0,j=0;
  while(i <= n.length) {
    if(n[i] > m[j]) {
      let temp = n[i]
      n[i] = m[j]
      m[j] = temp
      m.sort((a,b)=> a-b)
    }
    i++; 
  }
   
  console.log(n,m)
}

// mergeTwoArrays([1,4,7,8,10],[2,3,9])

const mergeIntervals = (intervals) => {
  intervals.sort((a,b)=>a[0] - b[0])
  const res= [intervals[0]]
  for(let i=1;i<intervals.length;i++) {
    const[start,end] = intervals[i]
    if(res[res.length -1][1] >= start) {
      const lastEnd = res[res.length -1][1];
      res[res.length -1][1] = Math.max(lastEnd,end)
    } else {
      res.push([start,end])
    }
  }
  return res
}


const setZeroes = (matrix) => {
    let col0=1,rows= matrix.length,cols = matrix[0].length;
    for(let i =0;i<rows;i++) {
      if(matrix[i][0] === 0) col0 =0;
      for(let j=1;j<cols;j++) {
        if(matrix[i][j] === 0) {
          matrix[i][0] = matrix[0][j] = 0
        }
      }
    }
    console.log('Materix after first for loop',matrix,col0)
    for(let i=rows -1;i>=0;i--) {
      for(let j= cols -1;j>=1;j--) {
        if(  matrix[i][0] === 0 || matrix[0][j] === 0)  matrix[i][j] = 0
      }
      if(col0 === 0)matrix[i][0] === 0
    }
    // console.log(matrix)
}

setZeroes([[1,1,1],[1,0,1],[1,1,1]])
const kadaneAlgo = (nums) => {
  let meh,msf =0;
  for(let num of nums) {
    meh += num
    if(meh < num) {
      meh = num
    }
    if(msf < meh) {
      msf = meh
    }
  }
  return msf
}
const bestTimeToBuySellStock = (nums) => {
  let minNum = Number.MAX_SAFE_INTEGER,maxPro =0
  for(let num of nums) {
    minNum = Math.min(num,minNum)
    maxPro = Math.max(maxPro,num- minNum)
  }

  return maxPro
}
// console.log(bestTimeToBuySellStock([7,1,5,3,6,4]))

const pascalTriangle = (numRows) => {
  let pascal = []
  for(let i=1;i<=numRows;i++) {
    pascal[i-1] =[]
    pascal[i-1][0] =1
    for(let j=2;j<i;j++) {
      pascal[i-1][j-1] = pascal[i-2][j-2] +pascal[i-2][j-1]
    }
    pascal[i-1][i-1] =1
  }
}
/*let p = []
undefined
> p[0] =[]
[]
> p[0][0] =1
1
> p
[ [ 1 ] ]
> p[1]= []
[]
> p[1][0]=1
1
> p[1][1] =1
1
> p
[ [ 1 ], [ 1, 1 ] ]
> p[2] =[]
[]
> p
[ [ 1 ], [ 1, 1 ], [] ]
> p[1][0]=1
1
> p
[ [ 1 ], [ 1, 1 ], [] ]
> p[2][0]=1
1
> p
[ [ 1 ], [ 1, 1 ], [ 1 ] ]
> p[2][2] =1
1
> p
[ [ 1 ], [ 1, 1 ], [ 1, <1 empty item>, 1 ] ]
> p[2][1] = p[1][0] + p[1][1]
2
> p
[ [ 1 ], [ 1, 1 ], [ 1, 2, 1 ] ] */


const rotateImage = (matrix) => {
  for(let i =0;i< matrix.length;i++) {
    for(let j =i;j<matrix[i].length;j++) {
      let temp = matrix[i][j]
      matrix[i][j] = matrix[j][i]
      matrix[j][i] = temp
    }
  }
  for(let i =0;i< matrix.length;i++) {
    matrix[i] = matrix[i].reverse()
  }
  console.log(matrix)
}

// rotateImage([[1,2,3],[4,5,6],[7,8,9]])


const pascal2 = (numRows) => {
  let result = []
  for(let i=1;i<= numRows;i++) {
    result[i-1] =[]
    result[i-1][0] =1
    for(let j =2;j<i;j++) {
      result[i-1][j-1] = result[i-2][j-2] + result[i-2][j-1]
    }
    result[i-1][i-1] =1
  }
  console.log(result)
}


const pow = (x,n) => {
  let prod = 1
  for(let i=0;i<n;i++) {
    prod *=x
  }

  return prod
}

// console.log(pow(2.10000,3))


const majorityElement =(arr) => {
    let candidate =0,count =0;

    for(let num of arr) {
      if(count === 0) {
        candidate = num
      }
      if(num === candidate) count +=1
      else count -=1
    }
    return candidate
}

// console.log(majorityElement([7,7,5,7,5,1,5,7,5,5,7,7,5,5,5,5]))


const largestSubArraySumWithZero = (arr) => {
  const ansMap = new Map()
  let max =0,sum =0;
  for(let i=0;i< arr.length;i++) {
    sum += arr[i];
    if(sum === 0) {
      max = i
    } else {
      if(ansMap.has(sum)) {
        max = Math.max(max,i - ansMap.get(sum))
      } else {
        ansMap.set(sum,i)
      }
    }
  }

  return max
}
// console.log(largestSubArraySumWithZero([1,-1,3,2,-2,-8,1,7,10,23]))


const longestConsecutiveSubSequence = (nums) => {
  let longestStreak =0
  const set = new Set(nums)
  for(let num of nums) {
    if(!set.has(num -1)) {
      let currentNum = num;
      let currentStreak = 1
      while(set.has(currentNum +1)) {
        currentNum = currentNum +1
        currentStreak +=1
      }
      longestStreak = Math.max(longestStreak,currentStreak)
    }
  }
  return longestStreak
}

// console.log(longestConsecutiveSubSequence([102,100,1,101,3,2]))


const longestSubSequenceWithoutRepeatingCharacters = (str) => {
  let sArray = str.split('')
  let l=0,r=0,len =0;
  let ans = new Set()
  while(r < sArray.length) {
    if(ans.has(sArray[r])) {
      ans.delete(sArray[r])
      r++;
    } else if(!ans.has(sArray[r])) {
      let currLen = r-l +1;
      len = Math.max(currLen,len);
      ans.add(sArray[r])
      r++;
      l++;
    } 
  } 
  // while(r < sArray.length) {
  //   if(ans.has(sArray[r])) {
  //      l = Math.max(ans.get(sArray[r])+1,l)
  //   }
  //   ans.set(sArray[r],r)
  //   len = Math.max(len,r -l +1)
  //   r++;
  //  }
  //  return len
  return len
}

// console.log(longestSubSequenceWithoutRepeatingCharacters('abcaabcda'))
// console.log(longestSubSequenceWithoutRepeatingCharacters('abcaabcdba'))

const removeDupFromSortedArray = (nums) => {
  let i=0,j=0;
  while(j <nums.length) {
    if(nums[i] !== nums[j]) {
      nums[++i] = nums[j];
      // nums[j] = temp;
    } else {
      j++;
    }
  }
  return i+1
}

// console.log(removeDupFromSortedArray([1,1,2,2,2,3,3,3,3]))
// console.log(removeDupFromSortedArray([0,0,1,1,1,2,2,3,3,4]))

const maxConsecutiveOnes = (nums) => {
  let len =0,count =0
  const ansMap = new Map()
  for(let i=0;i<nums.length;i++) {
    if(nums[i] ===1) {
      ansMap.set(1,count++)
    } else {
      count =0
    }
    len = Math.max(count,len)
  }
  return len
}

// console.log(maxConsecutiveOnes([1,1,0,1,1,1]))

const nMeetings = (s,e,n) => {
  let positions = Array.from({length:n},(_,i)=>(i)).map((_,i)=> ({
    start:s[i],
    end:e[i],
    pos:i+1
  }))
  let ans = [positions[0].pos]
  let limit = positions[0].end
  for(let i=0;i<n;i++) {
    if(positions[i].start >limit) {
      limit = positions[i].end;
      ans.push(positions[i].pos)
    }
  }
  return ans
}

// console.log(nMeetings([1,3,0,5,8,5],[2,4,5,7,9,9],6))


const setZeroes1 = (matrix) => {
  let col0 =1, rows= matrix.length,cols = matrix[0].length;
  for(let i=0;i<rows;i++) {
    if(matrix[i][0] === 0) col0 =0
    for(let j=1;j<cols;j++) {
      if(matrix[i][j] === 0) {
        matrix[i][0] = matrix[0][j] = 0
      }
    }
  }

  for(let i= rows-1;i>=0;i--) {
    for(let j = cols-1;j>=1;j++) {
      if(matrix[i][0] === 0 || matrix[0][j] === 0) matrix[i][j] =0
      if(col0 === 0) matrix[i][0] = 0
    }
  }
}