const maxHeapifySort = (heap,index=0,size) => {
    // console.log(`index: ${index},heap :${heap}`)
    let largest = index;
    let leftIndex = 2 * index +1;
    let rightIndex = 2 * index + 2;
    // console.log(`left Value : ${leftIndex} ${heap[leftIndex]},right Value : ${rightIndex} ${heap[rightIndex]}`)
    if(leftIndex <= size && heap[leftIndex] > heap[largest]) largest = leftIndex;
    if(rightIndex <=  size && heap[rightIndex] > heap[largest]) largest = rightIndex;
    if(largest !== index) {
        let temp = heap[index];
        heap[index] = heap[largest];
        heap[largest] = temp;
        // console.log(`Heap after swapping ${heap},largest :${largest}`)
        maxHeapifySort(heap,largest,size)
    }
    return heap
}

const heapSort = (heap) => {
    //Building a heap
    for(let i = Math.floor(heap.length/2)-1;i>=0;i--){
        maxHeapifySort(heap,i)
    } 
    // O(n)
    // console.log('Heap after heapfication',heap.length)
    // Extract Max algorithm to sort the array in ascending order
    let res = []
    for(let i=heap.length -1;i>0;i--){
        let temp = heap[0];
        heap[0] = heap[i];
        heap[i] = temp;
        // console.log(`Heap :${heap},Index:${i}`)
        // let heapCopy = heap.slice(0,i)
        // res = heap.pop()
        maxHeapifySort(heap,0,i-1)
    }
    console.log(heap)
}

heapSort([9,6,8,2,1,4,3])