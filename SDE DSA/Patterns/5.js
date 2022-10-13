const printRightTriangleReverse = () => {
    for (let index = 5; index >=0; index--) {
        const stars = Array(index).fill('*').join('')
        console.log(stars)
    }
}
printRightTriangleReverse()