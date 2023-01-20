interface StringClass extends String {
    replaceAt :()=> string
}
const checkIfPalindrome = (input:string):boolean => {
    if(input.length ===0 || input.length ===1) return true
    if(input.charAt(0) === input.charAt(input.length-1)) {
        return checkIfPalindrome(input.substring(1,input.length -1))
    }
    return false
}
String.prototype.replaceAt =  function(index:number, replacement:string) {
    return this.substring(0, index) + replacement + this.substring(index + replacement.length);
}

const func = (S:string):boolean => {
    let copy:string = S;
    for(let i =0;i<S.length/2;i++) {
        if(S[i] === '?' && S[S.length -1] === '?') {
            // S[i] = 'a'
            // S[S.length -1-i] = 'a'
            copy = mutateString(copy,i,'a')
            copy = mutateString(copy,S.length -1-i,'a')
        } else if(S[i] === '?' && S[S.length -1 -i] !== '?') {
            // S[i] === S[S.length -1]
            copy = mutateString(copy,i,S[S.length -1-i])
            // S.replaceAt(i,S[S.length -1-i])
        } else if(S[i] !== '?' && S[S.length -1-i] === '?') {
            // S[S.length -1] = S[i]
            // S.replaceAt(S.length -1-i,S[i])
            copy = mutateString(copy,S.length -1-i,S[i])
        }
        // console.log(S[i],S.length - 1 - i)
    }
    return checkIfPalindrome(copy)
}

const mutateString = (s:string,index:number,char:string):string => {
    return  s.replaceAt(index,char)
}



export {
    func,
    checkIfPalindrome
}