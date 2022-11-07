const lengthOfLongestSubstring = (s) => {
    const seen = new Map();
    // keeps track of the starting index of the current substring.
    let start = 0;
    // keeps track of the maximum substring length.
    let maxLen = 0;

    for (let i = 0; i < s.length; i++) {
        // if the current char was seen, move the start to (1 + the last index of this char)
        // max prevents moving backward, 'start' can only move forward
        if (seen.has(s[i])) start = Math.max(seen.get(s[i]) + 1, start)
        seen.set(s[i], i);
        // maximum of the current substring length and maxLen
        maxLen = Math.max(i - start + 1, maxLen);
        console.log(seen.entries(), `I: ${i} ,Start ${start}, Maxlen ${maxLen}`)
    }

    return maxLen;
}
// seen(a,)
// lengthOfLongestSubstring("abcabcbb")

//[1,1,1,0,0,0,1,1,1,1,0], k = 2
const longestOnes = (A, K) => {
    let left = 0, right = 0;

    while (right < A.length) {
        if (A[right] === 0) K--;
        if (K < 0) {
            if (A[left] === 0) K++;
            left++;
        }
        right++;
    }
    return right - left;
};

// longestOnes([1,1,1,0,0,0,1,1,1,1,0],2)
//[0,0,1,1,0,0,1,1,1,0,1,1,0,0,0,1,1,1,1], k =3

// [1,1,1,0,0,0,1,1,1,1,0],2 right = 11 , left =5 k=0

const characterReplacement = (s, k) => {
    let left = 0, right = 0, mostFreq = 0, maxLen = 0;
    let freqMap = {};

    for (right = 0; right < s.length; right++) {
        freqMap[s[right]] = freqMap[s[right]] + 1 || 1;
        mostFreq = Math.max(freqMap[s[right]], mostFreq);

        while (right - left + 1 - mostFreq > k) {
            freqMap[s[left]] -= 1;
            left++;
        }
        maxLen = Math.max(right - left + 1, maxLen);
        console.log(`Right ${right}, left ${left},Most Freq ${mostFreq}, MaxLen = ${maxLen}}`, { ...freqMap })
    }
    return maxLen;
}
// console.log(characterReplacement("AABABBA",1))
//s = "AABABBA", k = 1


const numberOfSubarrays = (nums, k) => {
    // let temp = k;
    // let left=0, right = 0,res=0;
    // while(left < nums.length) {
    //     console.log('Left',left)
    //     console.log('temp',temp)
    //     // console.log(nums[left])
    //     if(nums[left] % 2 !== 0) temp--;
    //     if(temp===0) {
    //         res +=1;
    //         temp=k;
    //         console.log('Inside k condition',left,k);
    //         left = left -k +1
    //     } else {
    //     left++;
    //     }
    // }
    let res = 0, i = 0, count = 0, n = nums.length;
    for (let j = 0; j < n; j++) {
        if (A[j] % 2 == 1) {
            --k;
            count = 0;
        }
        while (k == 0) {
            k += A[i++] & 1;
            ++count;
        }
        res += count;
    }
    return res;
}
// for(let i =0;i<nums.length;i++) {
//     for(let j=i+1;j<nums.length;j++) {
//         let c = nums.slice()
//         let copy = c.slice(j,nums.length)
//         console.log(copy,i,j,nums.length -1)
//     }
// }
// return res
// };
// console.log(numberOfSubarrays([1,1,2,1,1],3))


const maxSubArraySum = (arr, k) => {
    let left = 0, right = 0, sum = 0;
    while (right < arr.length) {
        if (right - left + 1 < k) {
            right++
        }
        if (right - left + 1 === k) {
            let numsCopy = [...arr];
            let values = numsCopy.slice(left, right + 1)
            sum = Math.max(values.reduce((v, acc) => (acc += v), 0), sum)
            right++;
            left++;
        }
    }
    return sum
}

// console.log( maxSubArraySum([2,5,1,8,2,9,1],3))

const maxSubArray = (arr, k) => {
    let left = 0, right = 0, res = [];
    while (right < arr.length) {
        if (right - left + 1 < k) {
            right++
        }
        if (right - left + 1 === k) {
            let numsCopy = [...arr];
            let values = numsCopy.slice(left, right + 1)
            res.push(Math.max([...values]))
            right++;
            left++;
        }
    }
    return res
}


const negativeNumber = (arr, k) => {
    let left = 0, right = 0, negativeNums = [];
    while (right < arr.length) {
        if (right - left + 1 < k) {
            right++
        }
        if (right - left + 1 === k) {
            let numsCopy = [...arr];
            let values = numsCopy.slice(left, right + 1)
            let [negNum] = values.filter(v => v < 0)
            negativeNums.push(negNum || 0)
            right++;
            left++;
        }
    }
    return negativeNums
}

// console.log(negativeNumber([12,-1,-7,8,-15,30,16,28],3))

const anagramCount = (s, pattern) => {
    let k = pattern.length;
    let left = 0, right = 0;
    let anagrams = getAnagrams(pattern)
    while (right < s.length) {

    }
}

function FindAllPermutations(str, index, buffer) {
    if (typeof str == "string")
        str = str.split("");
    if (typeof index == "undefined")
        index = 0;
    if (typeof buffer == "undefined")
        buffer = [];
    if (index >= str.length)
        return buffer;
    for (var i = index; i < str.length; i++)
        buffer.push(ToggleLetters(str, index, i));
    return FindAllPermutations(str, index + 1, buffer);
}

function ToggleLetters(str, index1, index2) {
    if (index1 != index2) {
        var temp = str[index1];
        str[index1] = str[index2];
        str[index2] = temp;
    }
    return str.join("");
}

const largestSubArraySum = (arr, S) => {
    let left = 0, right = 0, ans = [], sum = 0;
    // for(right =0;right<arr.length;right++) {
    //     sum += arr[right]
    //     if(sum === S) {
    //         ans.push(right -left +1)
    //     }
    //     else if(sum >S) {
    //         while(sum >S && left <right) {
    //             sum -= arr[left];
    //             left++
    //         }
    //     }
    // }
    // return Math.max(...ans)
    // while(right < arr.length) {
    //     // console.log('Sum',sum,right,left,ans)
    //     sum += arr[right];
    //     console.log('Sum',sum,right)
    //     if(sum < S) {
    //         right++;
    //         console.log('Right',right)
    //     }
    //     else if(sum === S) {
    //         ans.push(right-left+1)
    //         // left = right;
    //         right++;
    //     }
    //     else if(sum > S) {
    //         while(sum >S&& left<right) {
    //             sum -= arr[left]
    //             left++
    //         }
    //         right++;
    //     }
    //     return ans
    // }
    while (right < arr.length) {
        sum += arr[right];

        if (sum < S) {
            right++;
        } else if (sum >= S) {
            while (sum > S && left < right) {
                sum -= arr[left++];
            }

            if (sum == S) {
                ans.push(right - left + 1)
                // cnt=max(cnt,size);
            }

            right++;
        }
    }

    return Math.max(...ans);
}

// console.log(largestSubArraySum([4,1,1,1,2,3,5],5))


// co=

//"pwwkew"
//abcabcbb
//bbbbb
const lengthOfLongestSubstring1 = (s) => {
    const stringArray = s.split('');
    let left = 0, right = 0, res = [], finalRes = [], max = 0
    while (right < stringArray.length) {
        res.push(stringArray[right])
        // console.log(left,right)
        if (!checkHasRepeatingCharacters(res.slice(left, right + 1))) {
            right++
        } else {
            const substring = stringArray.slice(left, right)
            max = Math.max(substring.length, max)
            // finalRes.push(substring)
            left++;
            right++;
        }
    }
    // console.log(finalRes)
    return max
}

const checkHasRepeatingCharacters = (input) => {
    const map = new Map();
    for (let res of input) {
        if (map.has(res)) {
            let count = map.get(res)
            map.set(res, count + 1)
        } else {
            map.set(res, 1)
        }
    }
    // console.log(map.entries())
    for (let value of map.values()) {
        if (value > 1) return true
    }
    return false
}

// console.log(lengthOfLongestSubstring1('bbbbb'))

//[1,1,1,0,0,0,1,1,1,1,0], k = 2
const longestOnes1 = (nums, k) => {
    let left = 0, right = 0, maxLen = 0, res = []
    while (right < nums.length) {
        res.push(nums[right]);
        if (!checkZeroCount(res.slice(left, right + 1), k)) {
            right++;
        } else {
            const subArray = nums.slice(left, right)
            maxLen = Math.max(subArray.length, maxLen)
            left++;
            right++;
        }
        // if(nums[right] === 0) {
        //     count +=1
        // }
        // // console.log('Top',nums[right],right,count)
        // console.log('Count',left,right,count)
        // if(count <k) {
        //     right++;
        // } else if(count >=k) {
        //     while(count> k) {
        //         left++;
        //         if(nums[left] === 0)count -=1
        //     }
        //     if(count === k) {
        //         maxLen = Math.max(right-left+1,maxLen)
        //         right++
        //     }
        // }
        // console.log(left,right)
    }
    return maxLen
}

const checkZeroCount = (input, k) => {
    const map = new Map();
    for (let res of input) {
        if (map.has(res)) {
            let count = map.get(res)
            map.set(res, count + 1)
        } else {
            map.set(res, 1)
        }
    }
    console.log(map.entries())
    for (let [key, value] of map.entries()) {
        if (key === 0 && value > k) return true
    }
    return false
}
// console.log (longestOnes1([0,0,0,1],4))
// console.log (longestOnes1([0,0,1,1,0,0,1,1,1,0,1,1,0,0,0,1,1,1,1],3))


const numSubarraysWithSum = (nums, goal) => {
    let left = 0, right = 0, finalRes = 0, sum = 0;
    while (right < nums.length&& left < nums.length) {
        sum += nums[right];
        if (sum < goal) {
            right++;
        }
        // console.log(left, right,sum)
        else if (sum > goal) {
            sum =0
            left++
            right = left
            // while (sum > goal) {
            //     sum 
            //     left++
            // }
        }
        // console.log(left, right,sum)
        // if (sum === goal) {
        //     const windowSize = right -left +1
        //     // console.log('windowSize',windowSize)
        //     finalRes.push(nums.slice(left, right+1))
        //     right++
        // }
        else{
            finalRes++
            right++;
            if(nums.length === right) {
                sum =0
                left++
                right = left
            }
        }
        // console.log('Bottom',left,right)
    }
    return finalRes
};

// console.log(numSubarraysWithSum([1, 0, 1, 0, 1], 2))
// console.log(numSubarraysWithSum([0,0,0,0,0],0))


const slidingWindowMaximum = (arr,k) => {
    let left =0,right =0,ans =[];
    while(right < arr.length) {
        if(right -left +1 < k) {
            right++
        }
        if(right -left +1 === k) {
            const max = Math.max(...arr.slice(left,right+1))
            ans.push(max)
            left++;
            right++
        }
    }
    return ans
}

// console.log(slidingWindowMaximum([1,3,-1,-2,5,3,6,7],3))


const kadaneAlgo = (nums) => {
    let meh =0, msf = Number.MIN_SAFE_INTEGER;
    for(let num of nums) {
        meh = meh + num;
        if(meh <num) {
            meh = num
        }
        if(msf < meh) {
            msf = meh
        }
    }
    return msf
}

console.log(kadaneAlgo([-2,1,-3,4,-1,2,1,-5,4]))