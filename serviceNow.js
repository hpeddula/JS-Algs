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


function flatternObject(obj){
        let res = {};
        const [globalKey] = Object.keys(obj);
        for(let key in obj) {
            console.log(key)
            if(Object.keys(obj[key]).length >0) {
               res = {...res,...flatternObject(obj[key])}
            } else  {
                res = {...res,[`${key}`]:obj[key]}
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