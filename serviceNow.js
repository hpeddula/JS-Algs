//Flattening of a nested objectinput:
let obj = {
    parent: {
                child1: 1, 
                child2:2,            
                child3: {
                            subchild1: 3,
                            subchild2: 4,
                            subchild3 : {
                                scc: 5
                            }                      
                        }
                }
}


// function flatternObject(obj){
//         let res = {};
//         // let temp = {}
//         // console.log(nameKey)
//         const [globalKey] = Object.keys(obj)
//         for(let key in obj) {
//             // nameKey = nameKey === '' ? key : `${nameKey}_${key}`
//             let subKeys = Object.keys(obj[key]);
//             console.log('Subkeys',subKeys,key)
//             for(let subKey of subKeys) {
//                 if(typeof obj[key][subKey] === 'object') {
//                     res[`${key}_${subKey}`] = flatternObject(obj[key][subKey])
//                 } else {
//                     res[`${key}_${subKey}`] = obj[key][subKey]
//                 }  
//             }

//             // return temp
//             // if(Object.keys(obj[key]).length >0) {
//             //    res = {...res,...flatternObject(obj[key],nameKey)}
//             // } else  {
//             //     res = {...res,[`${nameKey}`]:obj[key]}
//             // }
//         }
//         // for(let i=0;i< Object.keys(obj).length;i++) {
//         //     if(Object.keys(obj[key]).length >0) {
//         //        res = {...res,...flatternObject(obj[key])}
//         //     } else  {
//         //         res = {...res,[`${key}`]:obj[key]}
//         //     }
//         // }
//         return res
// }

// console.log(flatternObject(obj))

// const flatOject = (obj) => {
//     let res= {}
//     for(let key in obj) {
//         let temp = {}
//         let subKeys = Object.keys(obj[key])
//         if(subKeys.length >1) {
//             temp = {}
//         }

//         res={...temp}
//         temp ={}
//     }
// }

function problem(input) {
     let res = {};
     for(let key in input) {
      if(typeof input[key] !== 'object') res[key] = input[key];
      else {
       for(let subKey in input[key]) {
        res[`${key}_${subKey}`] = input[key][subKey];
       }
      }
      
     }
     return res;
    }
    
    function concatKeys(input) {
     
     const checkCount = (input) => {
      const len = Object.keys(input).length;
      let count = 0;
      for(let key in input) {
       if(typeof input[key] !== 'object') count++;
      }
      return count !== len;
     }
     
     while(checkCount(input)) {
      input = problem(input);
     }
     return input;
    }
    
    const output = concatKeys(obj);
    console.log(output);
    console.log(Object.keys(obj['parent']))
    
// Output:
//     {
//         parent_child1: 1,
//         parent_child2: 2,
//         parent_child3_subchild1: 3,
//         parent_child3_subchild2: 4
//     }