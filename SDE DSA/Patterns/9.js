
const padSpacesCombine = () => {
    let res = []
    for (let i = 1; i <= 5; i++) {
        const stars = Array(i === 1 ? 1 : i === 2 ? i + 1 : i + (i - 1)).fill('*').join('')
        const padLength = (9 - stars.length) / 2 + stars.length
        // console.log(stars.length,padLength)
        res.push(i === 5 ? stars : stars.padStart(padLength).padEnd(padLength))
    }
    for (let i = 5; i > 0; i--) {
        const stars = Array(i === 1 ? 1 : i === 2 ? i + 1 : i + (i - 1)).fill('*').join('')
        const padLength = (9 - stars.length) / 2 + stars.length
        // console.log(stars.length,padLength)
        res.push(i === 5 ? stars : stars.padStart(padLength).padEnd(padLength))
    }
    for(let r of res) {
        console.log(r)
    }
}
padSpacesCombine()