/*

Write a function to check that a binary tree ↴ is a valid binary search tree. ↴

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

*/

// recursive solution
const isBinarySearchTree = function(tree, lessThen = -Infinity, greaterThen = Infinity) {
  // an empty tree is always a binary searh tree
  if (!tree) {
    return true;
  }

  // check if the node value has its left node value greater then itself and its right node value less then itself
  if (tree.value >= greaterThen || tree.value <= lessThen) {
    return false;
  }

  return (
    // recursivele update the call with the next node and its less and great values updates based on its left and right node values.
    isBinarySearchTree(tree.left, lessThen, tree.value) && isBinarySearchTree(tree.right, tree.value, greaterThen)
  );
};

// stack solution
const isBinarySearchTree = function(tree) {
  // set up an array to store node value and the value it needs to be greater and less then.
  nodeBounder = [];
  // update the array above to store the highest and lowest possible values based on node value.
  nodeBounder.push({ node: tree, lowest: -Infinity, highest: Infinity });

  // check if the last value added to the stack is part of the banary tree rules.
  while (nodeBounder.length) {
    let nodeData = nodeBounder.pop();
    let node = nodeData.node;
    let low = nodeData.lowest;
    let high = nodeData.highest;

    // check if the node values is inside the parameters of its ancestors.
    if (node.value <= low || node.value >= high) {
      return false;
    }

    // add the node to the left and to the right wiht the relative parameters where its value should be.
    if (node.left) {
      nodeBounder.push({ node: node.left, lowest: low, highest: node.value });
    }
    if (node.right) {
      nodeBounder.push({ node: node.right, lowest: node.value, highest: high });
    }
  }
  // if you traverse the ehole tree, tree is a binary search tree
  return true;
};

