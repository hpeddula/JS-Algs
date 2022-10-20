const characterMap = new Map();
// let charCodes  = [{'a':65},{'b':66},{'c':67},{'d':68},{'e':69}]
let charCodes  = [65,66,67,68,69]
// for (const iterator of charCodes) {
//     const [value] = Object.entries(iterator)
//     const [key,val] = value
// }

const characterTriangle = () => {
    for (let index = 1; index <= 5; index++) {
        console.log(getCharacterString(index))
    }
}


const getCharacterString = (index) => {
    const val = charCodes[index-1]
    let resString = ''
    for(let i=0;i<index;i++) {
        resString += String.fromCharCode(val)
    }
    return resString
}

characterTriangle()