const reverseNumber = (input)=> {
    if (input.toString()  === '') return '';
    return reverseNumber(input.toString().substr(1)) + input.toString().charAt(0)
}   

console.log(reverseNumber(12345))
'123456'.substring