const countFrequency = (arr) => {
    const map = new Map()
    for(let v of arr) {
        if(map.has(v)) {
            const value = map.get(v)
            map.set(v,value+1) 
        } 
        else map.set(v,1)
    }
    for(let [key,val] of map.entries()) {
        console.log(`${key}: ${val}`)
    }
}

// countFrequency([10,5,10,15,10,5])

const minMaxFrequency = (arr) => {
    const map = new Map()
    for(let v of arr) {
        if(map.has(v)) {
            const value = map.get(v)
            map.set(v,value+1) 
        } 
        else map.set(v,1)
    }
    const minVal = Math.min(...[...map.values()])
    const maxVal = Math.max(...[...map.values()])
    const minKey = getKey(map.entries(),minVal)
    const maxKey = getKey(map.entries(),maxVal)
    console.log(`Min Value ${minKey},Max value ${maxKey}`)
}

const getKey = (val,v) => {
    for(let [key,v1] of val) {
        if(v === v1) return key
    }
}

minMaxFrequency([10,5,10,15,10,5])