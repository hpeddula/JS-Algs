const input = [1, 5, 7, 1];
const input2 =[1,1,1,1]
const input3 =  [2,6,8,3]

const sum = 2;
const findCountPair = (arr,n,k) => {
    let memo = {};
    let i = 0;
    let count = 0;
    for (i; i <n; i++) {
        let j=1;
        // console.log('Data[i]',data[i])
        while(j< n) {
            // console.log('Sum and count',data[i] + data[j],count)
            if(arr[i] + arr[j] === k) {
                console.log((`${arr[i]}${arr[j]}` in memo),{...memo},count)
                if(!memo.hasOwnProperty(`${arr[i]}${arr[j]}`)){
                    memo[`${arr[i]}${arr[j]}`] = k;
                    count++; 
                }
            }
            j++;
        }
        
    }
    return count;
}

// const getPairsCount = (arr, n, sum) => {
//     let count = 0;
//     for (let i = 0; i < n; i++) {
//        for (let j = 1; j < n; j++) {
//            if(arr[i]+ arr[j] === sum) {
//                 count++;
//            }
//        }
//     }
//     return count;
// }

//[1, 5, 7, 1]

// [2,6,8,3]
function getPairsCount(arr , n , k) {
    var m = new Map();
    var count = 0;
    for (var i = 0; i < n; i++) {
        console.log('Map',m,(k - arr[i]),count)
        if (m.has(k - arr[i])) {
            count += m.get(k - arr[i]);
        }
        if (m.has(arr[i])) {
            m.set(arr[i], m.get(arr[i]) + 1);
        } else {
            m.set(arr[i], 1);
        }
    }
    return count;
}

console.log('Final Call',getPairsCount(input3,input3.length,2))