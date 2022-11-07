const product = (arr,n) => {
    var i,temp =1;
    var prod = Array(n).fill(1);
    for (i = 0; i < n; i++) {
        prod[i] = temp;
        temp *= arr[i]; //1800
    }
    temp = 1;
    // console.log('Prod after inc',prod)
//prod = [1,10,30,150,900]
    /*
      In this loop, temp variable contains
     product of elements on right side
     excluding arr[i]
     */
    for (i = n - 1; i >= 0; i--) {
        prod[i] *= temp;//i=0,180
        temp *= arr[i];//1800
    }
    // console.log('Prod after dec',prod)
    //prod = [180,600,360,300,900]
    return prod;
}
//[ 180, 600, 360, 300, 900 ]
console.log(product([ 10, 3, 5, 6, 2 ],5))


//Tech Dose

const productExcludingItself = (nums) => {
    let product =1;
    let n = nums.length
    let output  =[]
    for(let i =0;i<n;i++) {
        product *= nums[i]
        output.push(product)
    }
    product =1 
    for(let i =n-1;i>0;i--) {
        output[i] = output[i-1] * product;
        product *= nums[i]
    }
    output[0] = product
    return output
}
console.log(productExcludingItself([ 10, 3, 5, 6, 2 ]))