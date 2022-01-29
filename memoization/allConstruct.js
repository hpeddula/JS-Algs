const allConstruct = (inputString,prefixes) => {
    if(inputString === '') return [[]] ;
    let result = []
    for(let prefix of prefixes) {
        if(inputString.indexOf(prefix) === 0) {
            const newInput = inputString.slice(prefix.length);
            let res = allConstruct(newInput,prefixes);
            let targetWays = res.map(way => [prefix,...way])
            result.push(...targetWays)
        }
    }
    return result
}

console.log(allConstruct('abcdef',['ab','abc','cd','def','abcd','ef','c']))
console.log(allConstruct('purple',['purp','p','ur','le','purpl']))


const allConstructMemoize = (inputString,prefixes,memo={}) => {
    if(inputString in memo) return memo[inputString]
    if(inputString === '') return [[]] ;
    let result = []
    for(let prefix of prefixes) {
        if(inputString.indexOf(prefix) === 0) {
            const newInput = inputString.slice(prefix.length);
            let res = allConstructMemoize(newInput,prefixes,memo);
            let targetWays = res.map(way => [prefix,...way])
            result.push(...targetWays)
        }
    }
    memo[inputString] = result
    return  memo[inputString] 
}

//Time Complexity is O(n*m)
//Space Complexity is O(m)
// console.log(allConstructMemoize('abcdef',['ab','abc','cd','def','abcd']))