const checkIfPalindrome = (num) => {
    const reverseNum = num.toString().split('').reverse().join('')
    return num === +reverseNum
}