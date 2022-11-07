const fourSum =  (nums,k) => {
    nums.sort((a,b) => a-b)
    let n = nums.length -1;
    let res = []
    for(let i = 0;i<n;i++) {
        let target1 =  k - nums[i];
        for(let j=i+1;j<n;j++) {
            let target2 = target1 - nums[j];
            let front = j+1;
            let back = n;
            while(front < back) {
                let twoSum = nums[front] + nums[back]
                if(twoSum <target2) front++
                else if(twoSum > target2) back--
                else {
                    let quad1 = nums[i]
                    let quad2 = nums[j]
                    let quad3 = nums[front]
                    let quad4 = nums[back]
                    res.push([quad1,quad2,quad3,quad4])
                }
                while(front < back && nums[front] === quad3) ++front
                while(front < back && nums[back] === quad4) --back
            }
            while(j+1<n && nums[j] === nums[j+1]) ++j
        }
        while(i+1<n && nums[i] === nums[i+1]) ++i
    }   
    return res
}


const threeSum = (nums) => {
    nums.sort((a,b) => a-b)
    let res= []
    for(let i =0;i< nums.length -1;i++) {
        if(i >0 && nums[i] === nums[i-1]) continue
        let left = i+1;
        let right = nums.length -1;
        while(left < right) {
            if(nums[i] + nums[left] + nums[right] === 0) {
                res.push([nums[i] , nums[left] , nums[right]])
                while(left <right && nums[left] === nums[left+1]) left++
                while(left <right && nums[right] === nums[right-1]) right--
                left++
                right--
            } else if(nums[i] + nums[left] + nums[right] <0) {
                left++
            } else  {
                right--
            }
        }
    }
    return res
}


const productExcludingItself = (nums) => {
    let product =1;
    let output = []
    for(let  i=0;i<nums.length;i++) {
        product *= nums[i]
        output.push(product)
    }

    product =1
    for(let i =nums.length -1;i>0;i--) {
        output[i] = output[i-1] * product;
        product *= nums[i]
    }
    output[0] = product
    return product
}


const longestSubSequenceWithoutRepeatingCharacters = (s) => {
    let sArray = s.split('')
    let l =0,r=0,len=0;
    const ansMap = new Map()
    while(r < sArray.length) {
        if(ansMap.has(sArray[r])) {
            len = Math.max(len,ansMap.get[sArray[r]] +1)
        }
        ansMap.set(sArray[r],r)
        len = Math.max(len,r-l+1)
        r++
    }
    return len
}


const longestConsecutiveSubSequence = (arr) => {
    const s = new Set(arr)
    let longestStreak =0
    for(let num of arr) {
        if(!s.has(num -1)) {
            let currentNum = num;
            let currentStreak =1
            while(s.has(currentNum +1)) {
                currentNum +=1
                currentStreak +=1
            }
            longestStreak = Math.max(longestStreak,currentStreak)
        }
    }
    return longestStreak
}


const nMeetings = (s,e,n) => {
    let positions = Array.from({length:n},(_,i)=>(i)).map((_,i)=> ({
        start:s[i],
        end:e[i],
        pos:i+1
      }))
    let ans  = [positions[0].pos]
    let limit = positions[0].end
    for(let i =0;i<n;i++) {
        if(positions[i].start > limit) {
            limit = positions[i].end
            ans.push(positions[i].pos)
        }
    }
    return ans
}