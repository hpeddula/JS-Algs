const canConstruct = (inputString,prefixes) => {
    if(inputString === '') return true;
    for(let prefix of prefixes) {
        if(inputString.indexOf(prefix) === 0) {
            const newInput = inputString.slice(prefix.length);
            if(canConstruct(newInput,prefixes) === true) {
                return  true
            }
        }
    }
    return false
}

// console.log(canConstruct('abcdef',['ab','abc','cd','def','abcd']))
//Time complexity is O(n^m *m)
//Space Complexity is O(m * m) first m is the stack frame size is the length of the target string and second m is the each slice copy of target word length for each call

const canConstructMemoize = (inputString,prefixes,memo={}) => {
    if(inputString in memo) return memo[inputString]
    if(inputString === '') return true;
    for(let prefix of prefixes) {
        if(inputString.indexOf(prefix) === 0) {
            const newInput = inputString.slice(prefix.length);
            if(canConstructMemoize(newInput,prefixes,memo) === true) {
                memo[inputString] = true;
                return    memo[inputString]
            }
        }
    }
    memo[inputString] = false;
    return  memo[inputString]
}
//Time Complexity is O(n*m * m)
//Space Complexity is O(m*m)
console.log(canConstructMemoize('abcdef',['ab','abc','cd','def','abcd']))