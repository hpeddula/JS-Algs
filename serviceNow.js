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


function flatternObject(obj,nameKey=''){
        let res = {};
        console.log(nameKey)
        const [globalKey] = Object.keys(obj)
        for(let key in obj) {
            nameKey = nameKey === '' ? `${key}` : `${nameKey}_${key}`
            if(Object.keys(obj[key]).length >0) {
                console.log('Key',Object.keys(obj[key]).length )
               res = {...res,...flatternObject(obj[key],nameKey)}
            } else  {
                res = {...res,[nameKey]:obj[key]}
            }
        }
        // for(let i=0;i< Object.keys(obj).length;i++) {
        //     if(Object.keys(obj[key]).length >0) {
        //        res = {...res,...flatternObject(obj[key])}
        //     } else  {
        //         res = {...res,[`${key}`]:obj[key]}
        //     }
        // }
        return res
}

console.log(flatternObject(obj))

// Output:
//     {
//         parent_child1: 1,
//         parent_child2: 2,
//         parent_child3_subchild1: 3,
//         parent_child3_subchild2: 4
//     }