const alphabetTriangle = () => {
    for (let index = 1; index <=5; index++) {
        const chars = getCharacters(index)
        console.log(chars)
    }
}

const getCharacters = (i) => {
    let charCodes = [65,66,67,68,69]
    let charToIterate = charCodes.slice(0,i)
    let s = ''
    for(let i =0;i<charToIterate.length;i++) {
        s +=String.fromCharCode(charToIterate[i])
    }
    return s
}

alphabetTriangle()