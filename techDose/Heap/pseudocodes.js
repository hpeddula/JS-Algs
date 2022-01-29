

//Extract Max
const getMaxElement = (heap) => {
    if(heap.length < 1) {
        throw new Error('Invalid Array Length')
    }
    const max = heap[0];
    heap[0] = heap[heap.length -1]
    heap.splice(0,heap.length -1);
    maxHeapify(heap,0)
    return max
}//Space O(log n) Time O(log n)

//increase key
const increaseKey = (heap,index,key) => {
    if(key <heap[index]) { /// since increase key should be greater than the index value
        throw new Error('Invalid Operation')
    }
    heap[index] = key;
    let i =0;
    //percolate up
    while(index >0 && heap[index/2] < heap[index]) {
        const temp = heap[index/2];
        heap[index/2] = heap[index];
        heap[index] = temp
        index = i/2
    }
}//Space O(log n) Time O(log n)

//decrease key
const decreaseKey = (heap,index,key) => {
    if(heap[index] < key) { // since cecrease key should be less than current value
        throw new Error('Invalid Operation')
    }
    heap[index] = key;
   maxHeapify(heap,index)
}
//Space O(log n) Time O(log n)


//Insert Element 

const insertElement = (heap,key) => {
    heap = heap.push(key);
    let i = heap.length -1
    while(i > 0 && heap[i/2] < heap[i]) {
        let temp = heap[i/2];
        heap[i/2] = heap[i];
        heap[i] = temp;
        i = i/2
    }
    return heap
}//Space O(1) Time O(log n)


//Find Min --> O(n)
//Search --> O(n)
//Delete Random Element --> O(n)


//Heap Push is same as insert element constraint is the heap size 

const heapPush = (heap,key,overflow) => {
    if(heap.length > overflow) {
        throw new Error('Heap Overflow')
    }
    heap.push(key);
    let i  = heap.length -1;
    while(i > 0 && heap[i/2] < heap[i]) {
        let temp = heap[i/2];
        heap[i/2] = heap[i];
        heap[i] = temp;
        i = i/2
    }
    return heap
}
//Space O(1) Time O(log n)

//Heap Pop is extracting the max element from Max Heap or a min element from a Min Heap
const heapPop = (heap) =>{
    if(heap.length === 0) {
        throw new Error('Heap Underflow')
    }
    const max = heap[0];
    heap[0] = heap[heap.length-1]
    heap.splice(0,heap.length -1)
    maxHeapify(heap,0)
    return max;
}

//Space O(log n) Time O(log n)