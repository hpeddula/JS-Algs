Full Binary Tree
A Binary tree is a full binary tree if the internal nodes have 2 children and external or leaf nodes have 0 children

Complete Binary Tree
A Binary Tree is a complete binary tree if all the levels are completely filled except possibly the last level and in the last level if
is not completely filled then they are filled in the order of left --> right
 
Perfect Binary Tree
A binary tree is a perfect binary tree if all the internal nodes have 2 children and all the leaf nodes are on the same level,
inherently a PBT is a CBT and a PBT

No. of nodes at a height h is 2^h -1 if h is starting at height 1,if h is 0 the it is 2^h +1

Balanced Binary Tree
A binary tree is a balanced bibnary tree if it follows a constraint that height of the left sub tree and height of the right sub tree
is always less than or equal to 1 i.e, Math.abs(Ht of LST - Ht of RST) <= 1

height of the BBT will be O(log N)


Degenerate Trees
A binary tree is a Degenerate one if every internal node has only one child


InOrder Traversal
1) Left
2) Root
3) Right

PreOrder Traversal
1) Root
2) Left
3) Right

PostOrder Traversal
1) Left
2) Right
3) Root
