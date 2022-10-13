const arrowHead = () => {
    let res = [];
    for (let index = 1; index <= 5; index++) {
        const stars = Array(index).fill('*').join('')
        res.push(stars)
    }
    for (let index = 4; index >=0; index--) {
        const stars = Array(index).fill('*').join('')
        res.push(stars)
    }
    for(let r of res) {
        console.log(r)
    }
}

arrowHead()