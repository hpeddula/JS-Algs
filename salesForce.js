// In year 2001 on October 2, 2001, 
// the date in MMDDYYYY format was a palindrome 
// (same forwards as backwards), 10/02/2001 -> “10022001”

// When was the last palindrome date before 10/02/2001?
//xy45 is a palindrome

const checkLastPalindromeDate  = () => {
  // const currentPalindromeDate = '10/02/2001'.split('/').join('')
  for(let i= 1990;i< 2002;i++) {
    const palindromeDate = i.toString().split('').reverse()
    const [d1,d2,m1,m2] =palindromeDate
    if(checkIfPalindrome(`${d1}${d2}${m1}${m2}${i}`)) {
      return `${d1}${d2}/${m1}${m2}/${i}`
    } else {
      return `failed`
    }
  }

}
const checkIfPalindrome= (date) => {
  console.log(date)
  return date === date.split('').reverse()
  // const splitDate = date.split('')
  // let pointerOne =0;
  // let pointerTwo = splitDate.length -1
  // while(pointerOne < pointerTwo) {
  //   if(splitDate[pointerOne] === splitDate[pointerTwo]) {
  //     pointerOne +=1
  //     pointerTwo -=1
  //     continue
  //   }
  //   else return false
  // }
  // return true
}

console.log(checkLastPalindromeDate())