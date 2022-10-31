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

console.log(atoi('42asdf'))