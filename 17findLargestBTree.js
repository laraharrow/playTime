/*

Write a function to find the 2nd largest element in a binary search tree. ↴

Here's a sample binary tree node class:

  function BinaryTreeNode(value) {
    this.value = value;
    this.left  = null;
    this.right = null;
}

BinaryTreeNode.prototype.insertLeft = function(value) {
    this.left = new BinaryTreeNode(value);
    return this.left;
};

BinaryTreeNode.prototype.insertRight = function(value) {
    this.right = new BinaryTreeNode(value);
    return this.right;
};

// when the largest element is the leaf end element to the right
         ( 5 )
        /     \
      (4)     (8)
     /  \     /  \
   (1)  (4) (7)  (9)

// when the largest element has a subtree to the left 
         ( 5 )
        /     \
      (3)     (8)
     /  \     /  \
   (1)  (4) (7)  (12)
                 /
               (10)
               /  \
             (9)  (11)

*/
const largestNode = function(rootNode) {
  if (!rootNode) {
    throw new Error('Tree must have at least one node');
  }

  let node = rootNode;
  while (node) {
    if (!node.right) {
      return node.value;
    }
    node = node.right;
  }
};

const secondLargestNode = function(rootNode) {
  // tree must have at least 2 nodes to be able to find the second to last largest node
  if (!rootNode || (!rootNode.left || !rootNode.right)) {
    throw new Error('Tree must have at least 2 nodes');
  }

  // if largest node with left side subtree
  if (rootNode.left && !rootNode.right) {
    return largestNode(rootNode.left);
  }

  // if parent of largest doesn't have left subtree
  if (rootNode.right && !rootNode.right.left && !rootNode.right.left) {
    return rootNode.value;
  }
};


