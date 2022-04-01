// var threeSum = function(nums =[]) {
//     if(!nums.length || nums.length === 1) return []
//     const sortedArray  = nums.sort((a,b) => a -b)
//     let res = []
//     // console.log(sortedArray)
//     for(let i =0;i<nums.length;i++) {
//         const [a,b,c] = sortedArray.slice(i,i+3)
//         if(a !== b && b !==c && a !==c &&  a + b + c === 0) {
//            res.push([a,b,c])
//         }
//     }
//     console.log(res)
//     return res
// };
// //[[-1,-1,2],[-1,0,1]]
// threeSum([-1,0,1,2,-1,-4])

var threeSum = function (nums) {
    if (!nums.length || nums.length === 1) return []
    const sortedArray = nums.sort((a, b) => a - b)
    const sumSet = new Set()
    const sumMap = new Map()
    for (let i = 0; i < nums.length - 2; i++) {
        for (let j = i + 1; j < nums.length - 1; j++) {
            for (let k = j + 1; k < nums.length; k++) {
                if (nums[i] + nums[j] + nums[k] === 0) {
                    let arr = []
                    arr.push(nums[i])
                    arr.push(nums[j])
                    arr.push(nums[k])
                   const values = sumMap.get(`${nums[i]}${nums[j]}${nums[k]}`) 
                   if(!values) sumMap.set(`${nums[i]}${nums[j]}${nums[k]}`,arr)
                }
            }
        }
    }
    let res = []
    for(let v of sumMap.values()) {
        res.push(v)
    }
    return res
};

threeSum([-1,0,1,2,-1,-4])