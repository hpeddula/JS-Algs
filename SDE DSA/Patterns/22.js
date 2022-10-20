const numberGrid = () => {
    let table =  Array(7).fill().map(()=>Array(7).fill(4))
    // for(let i=1;i<=7;i++) {
    //     const resString = getNumbers(i)
    //     console.log(resString)
    // }
    // for(let  i =0;i<table.length;i++) {
    //     for(let j =i;j<table[i].length;j++) {
    //         console.log(table[i][j])
    //     }
    // }
  
        let i,j
        for(i=4; i>1; i--)
        {
            let res = []
            for(j=4;j>=1;j--)
            {
                if(j>i) res.push(j);
                else res.push(i);
            }
            for(j=2;j<=4;j++)
            {
                if(j>i) res.push(j);
                else res.push(i);
            }
            console.log(res.join(' '))
        }    
        for(i=1; i<=4; i++)
        {
            let res = []
            for(j=4;j>=1;j--)
            {
                if(j>i) res.push(j);
                else  res.push(i);
            }
            for(j=2;j<=4;j++)
            {
                if(j>i)  res.push(j);
                else  res.push(i);
            }
            console.log(res.join(' '))
        }
    // console.log(table)
}

const getNumbers = (i) => {
    let res= []
    for (let index = 0; index < 7; index++) {
        if(i=== 1 || i===7) {
            res.push(4)
        }else  {

        }
    }
    return res.join(' ')
}

numberGrid()