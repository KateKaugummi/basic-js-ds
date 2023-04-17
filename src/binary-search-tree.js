const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {
  rootNode = null;
  constructor() {
    this.rootNode = null;
  }
  root() {
    return this.rootNode;
  }

  add(data) {
    let secondNode = new Node(data);
    if (this.rootNode === null) {
      this.rootNode = secondNode; 
    } else {
      this.insertNode(this.rootNode, secondNode)
    }
  }

  insertNode(node, secondNode) {
    if (secondNode.data < node.data) {
      if (node.left === null) {
        node.left = secondNode;
      } else {
        this.insertNode(node.left, secondNode);
      }
    } else {
      if (node.right === null) {
        node.right = secondNode;
      } else {
        this.insertNode(node.right, secondNode);
      }
    }
  }
  

  has(data) {
    let result = this.find(data);
    if (result != null) {
      return true;
    } else {
      return false;
    }
  }

  find(data) {
    let newNode = this.rootNode;
    while (newNode != null) {
      if (data === newNode.data) {
        return newNode;
      }
      if (data < newNode.data) {
        newNode = newNode.left;
      } else {
        newNode = newNode.right;
      }
    }

    return null;
  }

  remove(data) {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

  min() {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

  max() {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }
}

module.exports = {
  BinarySearchTree
};