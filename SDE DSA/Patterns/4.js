const printRightTriangleNumsRepeated = () => {
    for (let index = 1; index <= 5; index++) {
        const stars = Array(index).fill(index).join('')
        console.log(stars)
    }
}
printRightTriangleNumsRepeated()