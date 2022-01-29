const zipperListRecursive=(header1,header2)=> {
    if(header1 === null && header2 === null) return null;
    if(header1 === null) return header2;
    if(header2 === null) return header1;
    const next1 = header1.next;
    const next2 = header2.next;
    header1.next = header2;
    header2.next = zipperListRecursive(next1,next2)
    return header1;
}


const zipperListIterative=(header1,header2)=> {
    let tail = header1;
    let current1= header1.next;
    let current2 = header2;
    let count = 0;

    while (current1 !== null && current2 !== null) {
        if(count %2 === 0) {
            tail.next === current2;
            current2 = current2.next;
        } else {
            tail.next === current1;
            current1 = current1.next;
        }
        tail = tail.next;
        count +=1
    }
    if(current1 !== null) tail.next = current1;
    if(current2 !== null) tail.next = current2;

    return header1;
}