const input= [1,2,4];

const reverse = (input) =>{
    let start =0;
    let end = input.length - 1;
    while(start <input.length && end > 0 &&start !== end){
        console.log('Start and end value',input[start],input[end])
        const startValue =  input[start];
        input[start] = input[end];
        input[end] = startValue
        start +=1;
        end -=1;
    }
    return input
}

console.log('Reversed Array',reverse(input))