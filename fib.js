const fib = (n,memo={}) => {
    if(n in memo) return memo[n];
    if (n <= 2) return 1;
    memo[n] =  fib(n-1) + fib(n-2) 
    console.log('MEmo',{...memo})
    return memo[n]
}

console.log(fib(2))