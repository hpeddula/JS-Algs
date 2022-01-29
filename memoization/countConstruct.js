const countConstruct = (inputString,prefixes) => {
    let totalNumber = 0;
    if(inputString === '') return 1;
    for(let prefix of prefixes) {
        if(inputString.indexOf(prefix) === 0) {
            const newInput = inputString.slice(prefix.length);
           totalNumber +=countConstruct(newInput,prefixes)
        }
    }
    return totalNumber
}

// console.log(countConstruct('abcdef',['ab','abc','cd','def','abcd']))
// console.log(countConstruct('purple',['purp','p','ur','le','purpl']))
//Time complexity is O(n^m *m)
//Space Complexity is O(m * m) first m is the stack frame size is the length of the target string and second m is the each slice copy of target word length for each call

const countConstructMemoize = (inputString,prefixes,memo={}) => {
    let totalNumber = 0;
    if(inputString in memo) return memo[inputString]
    if(inputString === '') return 1;
    for(let prefix of prefixes) {
        if(inputString.indexOf(prefix) === 0) {
            const newInput = inputString.slice(prefix.length);
            totalNumber +=countConstructMemoize(newInput,prefixes,memo)
        }
    }
    memo[inputString] = totalNumber;
    return  memo[inputString]
}
//Time Complexity is O(n*m * m)
//Space Complexity is O(m*m)
console.log(countConstructMemoize('abcdef',['ab','abc','cd','def','abcd']))