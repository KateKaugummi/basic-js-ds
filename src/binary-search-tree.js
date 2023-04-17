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
    this.rootNode = remove(this.rootNode, data);
    function remove(node, data) {
      if (!node) {
        return null;
      } else if (data > node.data) {
        node.right = remove(node.right, data);
        return node;
      } else if (data < node.data) {
        node.left = remove(node.left, data);
        return node;
      } else {
        if (!node.left && !node.right) {
          return null;
        } else if (!node.left) {
          node = node.right;
          return node;
        } else if (!node.right) {
          node = node.left;
          return node;
        }
        let min = node.right;
        while (min.left) {
          min = min.left;
        }
        node.data = min.data;
        node.right = remove(node.right, min.data);
        return node;
      }
    }
  }

  min() {
    let current = this.rootNode;
    while (current.left !== null) {
      current = current.left;
    }
    return current.data;
  }

  max() {
    let current = this.rootNode;
    while (current.right !== null) {
      current = current.right;
    }
    return current.data;
  }
}

module.exports = {
  BinarySearchTree
};