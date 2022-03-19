const debounce = (fn,delay) => {
    let timeOutId;
    return function(...args){
        if(timeOutId) clearTimeout(timeOutId)
        timeOutId = setTimeout(()=> fn(...args),delay)
    }
}

const throttle = (fn,delay) => {
    let last =0;
    return function(...args){
        let now = new Date().getTime()
        if(now - last < delay)  return 
        last = now
        fn(...args)
    }
}