/**Min Heapify Recursive */
const minHeapify = (heap,index) => {
    const leftChild = 2* index + 1;
    const rightChild = 2* index + 2;
    let smallest = index;
    if(leftChild <= heap.length && heap[leftChild] < heap [smallest]) smallest =leftChild
    if(rightChild <= heap.length && heap[rightChild] < heap [smallest]) smallest = rightChild
    if(smallest !== index) {
        let temp = heap[index];
        heap[index] = heap[smallest];
        heap[smallest] = temp;
        // swap(heap[index],heap[smallest])
        minHeapify(heap,smallest)
    }
}