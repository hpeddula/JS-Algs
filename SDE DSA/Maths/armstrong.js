const armstrong = (num) => {
    let strNum = num.toString().split('').map((v)=> (Math.pow(+v,3))).reduce((acc,v)=> (acc += v),0)
    console.log(strNum)
    return num === strNum
}

console.log(armstrong(170))