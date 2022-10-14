const binaryTriangle = () => {
    for (let index = 1; index <=5; index++) {
        let binaryString = getBinaryString(index);
        console.log(binaryString)
    }
}

const getBinaryString = (index) => {
    let returnString = Array(index).fill('')
    if(index %2 === 0) returnString[0] = 0
    else returnString[0] = 1
    // console.log(returnString)
    for(let i=1;i<returnString.length;i++) {
        if(returnString[i-1] === 0) returnString[i] = 1
        else returnString[i] = 0
    }
    return returnString.join('')
}

binaryTriangle()