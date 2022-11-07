const printName = (n) => {
    if(n ===0) return
    console.log('Harsha')
    printName(n -1)
}

// printName(5)

const print1ToN = (n,maxValue) => {
    if(n===0) throw new Error('Invalid Input')
    if(n > maxValue) return
    console.log(n)
    print1ToN(n+1,maxValue)
}

// print1ToN(1,5)


const printNto1 = (n) => {
    if(n===0) return
    console.log(n)
    printNto1(n-1)
}
// printNto1(5)


const sumN = (n) => {
    if(n === 0) return 0
    if(n === 1) return 1
    return n + sumN(n-1)
}

// console.log(sumN(5))

const fact = (n) => {
    if(n === 0) return 0
    if(n === 1) return 1
    return n * fact(n-1)
}

// console.log(fact(5))

const reverseArray = (array) => {
    if(array.length ===0) return
    // if(array.length === 1) return [array[0]]
    return [array.pop(),...reverseArray(array) || []]
}
// console.log(reverseArray([1,2,3,4,5]))

const palindrome = (str) => {
    if(str.length === 0 || str.length === 1) return true;
    if(str.charAt(0) === str.charAt(str.length -1)) {
        return palindrome(str.substr(1,str.length -2))
    }
    return false
}

// console.log(palindrome('10022001'))

const fib = (n,memo={}) => {
    if(n in memo) return memo[n]
    if(n <=2) return 1
    memo[n] = fib(n-1) + fib(n-2)
    return [fib(n-1),fib(n-2)]
}
// console.log(fib(4))

const atoi = (input) => {
    if(!input.length) return
    if(input.length ===1 && /^\d+$/.test(input)) return input
    return input + atoi(input.substr(input.length -1))
}

// console.log(atoi('42asdf'))


const printSubsequence = (index,arr,ds,n) => {
    if(index ===n ) {
        // for(let val of ds) {
        //     console.log(val)
        // }
        if(ds.length) console.log(ds.join(' '))
        else console.log({})
        return
    }
    printSubsequence(index+1,arr,ds,arr.length)
    ds.push(arr[index])
    printSubsequence(index+1,arr,ds,arr.length)
    ds.pop()
   
}
// printSubsequence(0,[3,1,2],[],3)


const allPairSum = (index,arr,ds,n,sum,S) => {
    if(index === n) {
        if(S === sum) {
            console.log(ds.join(' '))
        }
        return
    }
    ds.push(arr[index])
    sum += arr[index]
    allPairSum(index+1,arr,ds,arr.length,sum,S)
    ds.pop()
    sum -= arr[index]
    allPairSum(index+1,arr,ds,arr.length,sum,S)
}

// allPairSum(0,[1,2,1],[],3,0,2)
// allPairSum(0,[10,1,2,7,6,1,5],[],7,0,8)

const allPairSumOne = (index,arr,ds,n,sum,S) => {
    if(index === n) {
        if(S === sum) {
            console.log(ds.join(' '))
            return true
        } else return false
    } 
    ds.push(arr[index])
    sum += arr[index]
    if(allPairSumOne(index+1,arr,ds,arr.length,sum,S)) return true
    ds.pop()
    sum -= arr[index]
    if(allPairSumOne(index+1,arr,ds,arr.length,sum,S)) return true
    return false
}
// allPairSumOne(0,[1,2,1],[],3,0,2)

// let count = 0
const allPairSumCount = (index,arr,ds,n,sum,S) => {
    if(index === n) {
        if(S === sum) {
            // console.log(ds.join(' '))
            return true
        } else return false
    } 
    ds.push(arr[index])
    sum += arr[index]
    let l =allPairSumCount(index+1,arr,ds,arr.length,sum,S)
    ds.pop()
    sum -= arr[index]
    let r = allPairSumCount(index+1,arr,ds,arr.length,sum,S)
    return l + r
}

// console.log(allPairSumCount(0,[1,2,1],[],3,0,2))


  
  function exists(arr, search) {
        console.log('Exisits',arr,search)
      return arr.some(row => row.includes(search));
  }
const allPairSumUnique = (index,arr,ds,n,sum,S,sumSet) => {
    if(index === n) {
        if(S === sum) {
            // console.log(ds.join(' '))
            const val = [...ds.sort((a,b)=> a -b)]
            console.log('Ds',ds[ds.length -1])
            if(!exists2(Array.from(sumSet.values()),val)) sumSet.add(val)
        }
        return
    }
    ds.push(arr[index])
    sum += arr[index]
    allPairSumUnique(index+1,arr,ds,arr.length,sum,S,sumSet)
    ds.pop()
    sum -= arr[index]
    allPairSumUnique(index+1,arr,ds,arr.length,sum,S,sumSet)
    return Array.from(sumSet.values())
}
// console.log(allPairSumUnique(0,[10,1,2,7,6,1,5],[],7,0,8,new Set()))


const subSetSum1 = (index,arr,ds,n,ans) => {
    if(index >=n) {
        ans.push(ds.reduce((acc,val) => (acc+val),0))
        return
    }
    ds.push(arr[index])
    subSetSum1(index+1,arr,ds,n,ans)
    ds.pop()
    subSetSum1(index+1,arr,ds,n,ans)
    return ans.sort((a,b)=> (a-b))
}
// console.log(subSetSum1(0,[3,1,2],[],3,[]))
function exists2(arr, search) {
  return arr.some(row => row.join('') === search.join(''));
}
const subSetSum2 = (index,n,arr,ds,sumSet) => {
    if(index === n) { 
        // console.log(ds.join(' '))
        const val = [...ds.sort((a,b)=> a -b)]
        if(!exists2(sumSet,val)) sumSet.push(val)
        return
    }
    ds.push(arr[index])
    subSetSum2(index+1,arr.length,arr,ds,sumSet)
    ds.pop()
    subSetSum2(index+1,arr.length,arr,ds,sumSet)
    // return Array.from(sumSet.values())
    return sumSet
}
// console.log(subSetSum2(0,3,[1,2,2],[],[]))
// console.log(subSetSum2(0,1,[0],[],[]))
//Not working
// const subSetSum2WithoutExtraSpace = (index,n,arr,ds,ans) => {
//     ans.push(ds)
//     for(let i = index;i<n;i++) {
//         if(i !== index && arr[i] === arr[i-1]) continue
//         ds.push(arr[i])
//         subSetSum2WithoutExtraSpace(index+1,arr.length,arr,ds,ans)
//         ds.pop()
//     }
   
//     // return Array.from(sumSet.values())
//     return ans
// }

// console.log(subSetSum2WithoutExtraSpace(0,3,[1,2,2],[],[]))

const permutation1 = (arr,ds,ans,freq) => {
    // console.log(ds.length,arr.length)
    if(ds.length === arr.length) {
        // console.log(ans)
        ans.push(ds)
        return
    }
    for(let i=0;i<arr.length;i++) {
        if(!freq[i]) {
            ds.push(arr[i])
            freq[i] =1
            console.log(ans)
            permutation1(arr,ds,ans,freq)
            freq[i] =0
            ds.pop()
        }
    }
    // console.log(ans)
    return ans
}

// console.log(permutation1([1,2,3],[],[],[0,0,0]))
const swap = (arr,i,j) => {
    let temp = arr[i];
    arr[j] = arr[i]
    arr[i] = temp
}
const permutation2 = (index,nums,ans) => {
    if(index === nums.length) {
        ans.push(nums)
    }
    for(let i = index;i< nums.length;i++) {
        swap(nums,i,index)
        permutation2(index+1,nums,ans)
        swap(nums,i,index)
    }
}
