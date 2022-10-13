const printRightTriangleNums = () => {
    for (let index = 1; index <= 5; index++) {
        const ans = getDigits(index)
        console.log(ans)
    }
}
const getDigits = (num) => {
    if (num === 1) return '1'
    else {
        let numString = '';
        for (let i = 1; i <=num; i++) {
            numString += i
        }
        return numString
    }
}
printRightTriangleNums()