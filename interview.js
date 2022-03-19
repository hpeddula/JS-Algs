const profile = {
    name: 'peter',
    age: 56,
    kids: [{
        name: 'jill',
        age: 23,
        kids: [{
            name: 'jeter',
            age: 1
        }, {
            name: 'bill',
            age: 2
        }]
    }]
}

// for(key in profile) {
//     if(key === 'age') {
//         totalAge += profile[key]
//     } else  {
//         function getAge(key) {
//             console.log('Inside getAge')
//             for(let k of profile[key]) {
//             for(let key1 in k) {
//                  if(key1 === 'age') {
//                     totalAge += key[key1]
//                  } else {
//                      if(Array.isArray(key1)) {
//                          getAge(key1)
//                      }
//                  }
//             }
//         }
//         }
        
//     }
//     console.log(totalAge)
// }
let totalAge = 0;
function getAge(key) {
            for(let k of profile[key]) {
            for(let key1 in k) {
                 if(key1 === 'age') {
                    totalAge += k[key1]
                 } else {
                     if(Array.isArray(key1)) {
                         getAge(key1)
                     }
                 }
            }
        }
        }
for (let key in profile) {
    if (key === 'age') {
        totalAge += profile[key]
    } else {
        getAge(key) 
    }
} 

console.log('Total Age',totalAge)