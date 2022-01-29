const binarySearch = (sortedArray=[],seekElement) => {
    let startIndex = 0;
    let endIndex = sortedArray.length -1;
    while (startIndex <= endIndex ) {
        let middleIndex = (startIndex + endIndex ) /2;
        if(seekElement === sortedArray[middleIndex]) return sortedArray[middleIndex]
        if(sortedArray[middleIndex] < seekElement) startIndex = middleIndex +1;
        else startIndex = middleIndex -1
    }
    return -1;
}

console.log(binarySearch([1,2,3,4,5],4))