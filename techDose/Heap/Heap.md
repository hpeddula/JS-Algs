Heap is always a complete binary Tree

A complete binary tree is a combination of a perfect binary tree and an almost complete binary tree


Perfect Binary Tree -- A Tree which has all of it's nodes filled is a perfect binary tree
Almost Complete Binary Tree --
Leaves must be present only at last and second last level
Leaves at the same level must be filled from left to right
Heap can be represented in an array
The size of the array is determined by the (2^h+1 -1) , so if the height of the heap is 2 starting from 0 then the size of the array is 7.
The range of leaves for a 0 based index array is Math.floor(N/2) to N-1
The range of the internal nodes are from 0 to Math.floor(N/2) -1

Time Complexity for max_heapify is O(log n) , space complexity is O(log n) where log n is the height of the tree

Build a max heap takes O(n) time 
Build max heap is performed only on the internal node that is the index ranging from 0 -> Math.floor(N/2) -1

for( let i =  (Math.floor(heap.length/2) -1); i>=0;i-->){
    max_heap(heap,i)
}

same for min heap