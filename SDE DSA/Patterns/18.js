
let charCodes  = [65,66,67,68,69]
const printTriangle18 = () => {
    let charString = ''
    for (let i = 5; i >0; i--) {
        charString += String.fromCharCode(charCodes[i -1])
        console.log(charString.split('').reverse().join(' '))
    }
}

printTriangle18()