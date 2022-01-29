const input = [2,6,8,3].sort((a,b)=> a-b);


const findPair = (array) => {
    const diff = 1;
    let i = 0;
    let j = 1;
    const length = array.length;
    while(i<length && j < length ){
        if(i !== j && array[j] - array[i] === diff) {
            return {firstValue:array[i],secondValue:array[j]}
        } else if (array[j] - array[i] < diff) {
            j++;
        } else {
            i++;
        }
    }
    return 'No Such Pair';
}
const res =findPair(input);
console.log(res)