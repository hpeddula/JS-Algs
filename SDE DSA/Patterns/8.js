// let s= '*'
// s.padEnd(2,'')
// console.log(s.padStart(20))


const padSpacesReverse = () => {
    for(let i=5;i>0;i--) {
        const stars = Array(i === 1 ? 1 :i===2 ? i+1 : i + (i - 1)).fill('*').join('')
        const padLength = (9-stars.length)/2 + stars.length
        // console.log(stars.length,padLength)
        console.log(i===5 ? stars :stars.padStart(padLength).padEnd(padLength))
    }
}

// const getPaddedString = () => {

// }

padSpacesReverse()