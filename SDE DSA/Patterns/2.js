const printRightTriangle = () => {
    for (let index = 1; index <= 5; index++) {
        const stars = Array(index).fill('*').join('')
        console.log(stars)
    }
}
printRightTriangle()

