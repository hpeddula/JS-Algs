let charCodes = [65, 66, 67, 68, 69]
const printTriangle17 = () => {
    for (let i = 1; i < 5; i++) {
        const charString = getCharStrings(i)
        console.log(charString)
    }
}

const getCharStrings = (index) => {
    let resString = '';
    let reverse =''
    if (index === 1) resString = String.fromCharCode(charCodes[index - 1])
    else {
        for (let i = 0; i < index; i++) {
            resString += String.fromCharCode(charCodes[i])
        }
    }
    if (index !== 1) {
        reverse = resString.split('').slice(0,index-1).reverse().join('')
    }
    resString += reverse
    let diff = 7- index
    let paddedString = resString.padStart(index === 1 ?diff/2 + index :diff/2 + index +1)
    return paddedString
}

printTriangle17()