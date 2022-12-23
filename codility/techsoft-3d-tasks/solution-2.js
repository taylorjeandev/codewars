// In this problem we consider binary trees, represented by pointer data structures.

// A binary tree is either an empty tree or a node (called the root) made of a single integer value and two further binary trees, called the left subtree and the right subtree. For example, the figure below shows a binary tree that has six nodes. Its root contains the value 5, and the roots of its left and right subtrees have the values 3 and 10. The right subtree of the node with the value 10, as well las the left and right subtrees of the nodes with the values 1, 20, and 21, are empty trees.

// A binary tree can be given using a pointer data structure. Assume that the following declarations are given:

// Tree obj is an object with attributes

// Obj.x - type: int
// Obj.l - type: Tree
// Obj.r - type: Tree

// An empty tree is represented by an empty pointer (denoted by null). A non-empty tree is represented by a pointer to an object representing its root. The attribute X holds the integer contained in the root, while attributes l and r hold the left and right subtrees of the binary tree.

// A path in a binary tree is a non empty sequence of nodes that one can go through by following the pointers. The length of a path is the number of pointers it follow. More formally, a path of length K is a sequence of nodes P[0], P[1], …, P[K], such that a node P[l + 1] is the root of the left or right subtree of P[I], for 0 < I < K. For example, the sequence of nodes with values 5, 3, 21, is a path of length 2 in the tree from the above figure. The sequence of nodes with values 10, 1 is a path of length 1. The sequence of nodes with values 20, 3, 21, is not a valid path.

// The height of a binary tree is defined as the length of the longest possible path in the tree. In particular, a tree of only one node has height 0 and an empty tree has height -1. For example, the tree shown in the above figure is of height 2.

// A binary tree T is given. A node of tree T containing value V is described as visible if the path from the root of three to that node does not have a node with any value exceeding V. In particular the root is always visible and nodes with values lower than that of the root are never visible.

// For example, the tree shown in the above figure has four visible nodes. They are those with values 5, 10, 20, and 21. The node with value 1 is not visible because there is a node with value 10 on the path from the root that node. The node with value 3 is not visible because its value is lower than that of the root, which has value 5.

// Write a function

// Function solution(T);

// That given a binary tree T consisting of N nodes, returns its number of visible nodes. For example, given the tree shown in the figure above, the function should return 4, as explained above.

// Given tree T with the following structure the function should reutn 2, because the only visible nodes are those with value 8.

// To enter your own test cases, you can denote a tree recursively in the following way. An empty binary tree is denoted by None. A non-empty tree is denoted as (X, L, R), where X is the value contained in the root and L and R denote the left and right subtrees. The trees from the above two figured can be denoted as:

// (5, (3, (20, None, None), (21, None, None)), (10, (1, None, None), None)) should return 4

// And:

// (8, (2, (8, None, None), (7, None, None)), (^, None, None))

// Write an efficient algorithm for the following assumptions:

// * N is an integer within the range [0..50,000];
// * Each value in tree T is an integer within the range [-100,000…100,000];
// * The height of tree T (number of edges on the longest path from root to leaf) is within the range [-1…500].

function solution(T) {
  // write your code in JavaScript (Node.js 8.9.4)
  if (!T) return 0;
  let count = 1;
  let max = T.x;
  const traverse = (node) => {
    if (node.l) {
      if (node.l.x >= max) {
        count++;
        max = node.l.x;
      }
      traverse(node.l);
    }
    if (node.r) {
      if (node.r.x >= max) {
        count++;
        max = node.r.x;
      }
      traverse(node.r);
    }
  };
  traverse(T);
  return count;
}

// function solution(T) {
//   // base case: empty tree has 0 visible nodes
//   if (!T) return 0;

//   // count the root as a visible node
//   let count = 1;

//   // check the left and right subtrees
//   count += solution(T.l);
//   count += solution(T.r);

//   // if the current node has a value higher than its children,
//   // then those children are not visible
//   if (T.l && T.x > T.l.x) count -= solution(T.l);
//   if (T.r && T.x > T.r.x) count -= solution(T.r);

//   return count;
// }
// const tree =
//   (5, (3, (20, None, None), (21, None, None)), (10, (1, None, None), None));
// console.log(solution(tree));
