
### Operations
- **Inorder Traversal**: 4, 2, 5, 1, 3
- **Preorder Traversal**: 1, 2, 4, 5, 3
- **Postorder Traversal**: 4, 5, 2, 3, 1

## 2. Binary Search Tree (BST)

### Example
  10
 /  \
5   15
/\
    7
3   \
    20


### Operations
- **Insertion**: Adding 6 to the BST
- **Search**: Finding 7 in the BST
- **Deletion**: Removing 15 from the BST


### Operations
- **Insertion**: Adding the word "cat" to the Trie
- **Search**: Checking if "rat" exists in the Trie
- **Deletion**: Removing the word "cat"

## 8. Segment Trees
- **Definition**: A binary tree used for storing intervals or segments and allows querying the intervals efficiently.
- **Operations**:
  - **Query**: Finding information over a range of indices.
  - **Update**: Modifying elements in the array.

### Example (Range Minimum Query)
- **Array**: [2, 3, 1, 4, 5]
- **Segment Tree**:

      [1]
     /   \
   [1]   [4]
  /  \   / \
 [2] [1] [4] [5]



### Operations
- **Query**: Minimum value in range [1, 3]
- **Update**: Change value at index 2 to 6

## 9. Fenwick Trees (Binary Indexed Trees)
- **Definition**: A data structure that provides efficient methods for cumulative frequency tables.
- **Operations**:
  - **Update**: Adding a value to an element.
  - **Query**: Calculating prefix sums.

### Example
- **Array**: [3, 2, 4, 5, 1]
- **Fenwick Tree**:
    [3]
   /  \
 [5]   [4]
/  \    / \
[3] [4] [5] [1]


### Operations
- **Update**: Add 3 to the value at index 2
- **Query**: Sum of elements from index 1 to 3

## 10. N-ary Trees
- **Definition**: A tree in which a node can have at most N children.
- **Properties**: Generalizes binary trees.

### Example
    1
   /|\ 
  2 3 4
 / \
5   6

### Operations
- **Traversal**: Depth-First Search (DFS)
- **Traversal**: Breadth-First Search (BFS)

## 11. Tree Traversal Algorithms
- **Depth-First Search (DFS)**:
  - **Inorder**: Traverses left subtree, visits node, traverses right subtree.
  - **Preorder**: Visits node, traverses left subtree, traverses right subtree.
  - **Postorder**: Traverses left subtree, traverses right subtree, visits node.
- **Breadth-First Search (BFS)**: Traverses level by level from the root.

## 12. Applications of Trees
- **Expression Trees**: Used in compilers to parse mathematical expressions.
- **Syntax Trees**: Represents the structure of a program or expression.
- **Decision Trees**: Used in machine learning for classification and regression.

## 13. Advanced Topics
- **Suffix Trees**: Used for efficient string matching and substring search.
- **Generalized Trees**: Extensions of traditional tree structures.
- **Tree Isomorphism**: Determining if two trees are structurally identical.

## 14. Complexity Analysis
- **Time Complexity**: Measures the time required for operations in terms of input size.
- **Space Complexity**: Measures the memory used by the tree data structure.

