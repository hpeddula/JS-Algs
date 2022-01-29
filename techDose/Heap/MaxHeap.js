/**Max Heapify Recursive */
const maxHeapify = (heap,index) => {
    const leftChild = 2* index + 1;
    const rightChild = 2* index + 2;
    let largest = index;
    if(leftChild <= heap.length && heap[leftChild] > heap [largest]) largest = leftChild
    if(rightChild <= heap.length && heap[rightChild] > heap [largest]) largest = rightChild
    if(largest !== index) {
        let temp = heap[index];
        heap[index] = heap[largest];
        heap[largest] = temp;
        // swap(heap[index],heap[largest])
        maxHeapify(heap,largest)
    }
}